export async function onRequest({ request, env, next }) {
  const url = new URL(request.url);
  const accept = request.headers.get("Accept") || "";

  if (url.pathname === "/" && prefersMarkdown(accept)) {
    const mdResp = await env.ASSETS.fetch(new URL("/tmux-cheatsheet.md", url.origin));
    const headers = new Headers(mdResp.headers);
    headers.set("Content-Type", "text/markdown; charset=utf-8");
    headers.append("Vary", "Accept");
    return new Response(mdResp.body, { status: mdResp.status, headers });
  }

  const resp = await next();
  if (url.pathname === "/") {
    const headers = new Headers(resp.headers);
    headers.append("Vary", "Accept");
    return new Response(resp.body, { status: resp.status, headers });
  }
  return resp;
}

function prefersMarkdown(accept) {
  if (!accept) return false;
  const entries = accept.split(",").map((token) => {
    const [mime, ...params] = token.trim().split(";").map((s) => s.trim());
    const qParam = params.find((p) => p.startsWith("q="));
    const q = qParam ? parseFloat(qParam.slice(2)) : 1.0;
    return { mime: mime.toLowerCase(), q: Number.isNaN(q) ? 1.0 : q };
  });
  const md = entries.find((e) => e.mime === "text/markdown");
  if (!md) return false;
  const html = entries.find((e) => e.mime === "text/html");
  return md.q > (html?.q ?? 0);
}
