# tmux Cheat Sheet

Default prefix key: `C-b` (Ctrl+b). Shown below as `PREFIX`.

Authoritative references:
- [tmux(1) man page](https://man.openbsd.org/tmux.1)
- [tmux wiki — Getting Started](https://github.com/tmux/tmux/wiki/Getting-Started)

---

## Sessions

| Command | Action | Docs |
|---|---|---|
| `tmux` | Start a new unnamed session | [new-session](https://man.openbsd.org/tmux.1#new-session) |
| `tmux new -s <name>` | Start a new named session | [new-session](https://man.openbsd.org/tmux.1#new-session) |
| `tmux ls` | List sessions | [list-sessions](https://man.openbsd.org/tmux.1#list-sessions) |
| `tmux attach -t <name>` | Attach to an existing session | [attach-session](https://man.openbsd.org/tmux.1#attach-session) |
| `tmux kill-session -t <name>` | Kill a session | [kill-session](https://man.openbsd.org/tmux.1#kill-session) |
| `PREFIX d` | Detach from current session | [detach-client](https://man.openbsd.org/tmux.1#detach-client) |
| `PREFIX s` | Interactive session switcher | [choose-tree](https://man.openbsd.org/tmux.1#choose-tree) |
| `PREFIX $` | Rename current session | [rename-session](https://man.openbsd.org/tmux.1#rename-session) |
| `PREFIX (` / `PREFIX )` | Previous / next session | [switch-client](https://man.openbsd.org/tmux.1#switch-client) |

---

## Windows

| Command | Action | Docs |
|---|---|---|
| `PREFIX c` | Create a new window | [new-window](https://man.openbsd.org/tmux.1#new-window) |
| `PREFIX ,` | Rename current window | [rename-window](https://man.openbsd.org/tmux.1#rename-window) |
| `PREFIX n` / `PREFIX p` | Next / previous window | [next-window](https://man.openbsd.org/tmux.1#next-window) |
| `PREFIX <N>` | Select window by number | [select-window](https://man.openbsd.org/tmux.1#select-window) |
| `PREFIX w` | Interactive window list | [choose-tree](https://man.openbsd.org/tmux.1#choose-tree) |
| `PREFIX &` | Kill current window | [kill-window](https://man.openbsd.org/tmux.1#kill-window) |
| `PREFIX f` | Find window by name | [find-window](https://man.openbsd.org/tmux.1#find-window) |
| `PREFIX .` | Move window (change index) | [move-window](https://man.openbsd.org/tmux.1#move-window) |

---

## Panes

| Command | Action | Docs |
|---|---|---|
| `PREFIX %` | Split pane vertically (left/right) | [split-window](https://man.openbsd.org/tmux.1#split-window) |
| `PREFIX "` | Split pane horizontally (top/bottom) | [split-window](https://man.openbsd.org/tmux.1#split-window) |
| `PREFIX <arrow>` | Move between panes | [select-pane](https://man.openbsd.org/tmux.1#select-pane) |
| `PREFIX o` | Cycle to next pane | [select-pane](https://man.openbsd.org/tmux.1#select-pane) |
| `PREFIX q` | Show pane numbers (press to select) | [display-panes](https://man.openbsd.org/tmux.1#displayp) |
| `PREFIX x` | Kill current pane | [kill-pane](https://man.openbsd.org/tmux.1#kill-pane) |
| `PREFIX z` | Zoom / unzoom current pane | [resize-pane](https://man.openbsd.org/tmux.1#resize-pane) |
| `PREFIX {` / `PREFIX }` | Swap pane with previous / next | [swap-pane](https://man.openbsd.org/tmux.1#swap-pane) |
| `PREFIX !` | Break pane into its own window | [break-pane](https://man.openbsd.org/tmux.1#break-pane) |
| `PREFIX C-<arrow>` | Resize pane by 1 cell | [resize-pane](https://man.openbsd.org/tmux.1#resize-pane) |
| `PREFIX M-<arrow>` | Resize pane by 5 cells | [resize-pane](https://man.openbsd.org/tmux.1#resize-pane) |
| `PREFIX <space>` | Cycle through built-in layouts | [next-layout](https://man.openbsd.org/tmux.1#next-layout) |

---

## Copy Mode & Scrollback

| Command | Action | Docs |
|---|---|---|
| `PREFIX [` | Enter copy mode (scroll, search, select) | [copy-mode](https://man.openbsd.org/tmux.1#copy-mode) |
| `PREFIX ]` | Paste the most recent buffer | [paste-buffer](https://man.openbsd.org/tmux.1#paste-buffer) |
| `PREFIX =` | Choose a buffer to paste | [choose-buffer](https://man.openbsd.org/tmux.1#choose-buffer) |
| `PREFIX #` | List all paste buffers | [list-buffers](https://man.openbsd.org/tmux.1#list-buffers) |
| In copy mode: `/` or `?` | Search forward / backward | [WINDOWS AND PANES](https://man.openbsd.org/tmux.1#WINDOWS_AND_PANES) |
| In copy mode: `<space>` then `<enter>` | Start selection, copy selection (emacs mode) | [WINDOWS AND PANES](https://man.openbsd.org/tmux.1#WINDOWS_AND_PANES) |

See also: [tmux wiki — Clipboard](https://github.com/tmux/tmux/wiki/Clipboard).

---

## Command Mode & Config

| Command | Action | Docs |
|---|---|---|
| `PREFIX :` | Open the tmux command prompt | [command-prompt](https://man.openbsd.org/tmux.1#command-prompt) |
| `:source-file ~/.tmux.conf` | Reload config without restarting | [source-file](https://man.openbsd.org/tmux.1#source-file) |
| `:set -g <option> <value>` | Set a global option | [set-option](https://man.openbsd.org/tmux.1#set-option) |
| `:bind <key> <command>` | Create a key binding | [bind-key](https://man.openbsd.org/tmux.1#bind-key) |
| `:show-options -g` | Show current global options | [show-options](https://man.openbsd.org/tmux.1#show-options) |
| `PREFIX ?` | List all key bindings | [list-keys](https://man.openbsd.org/tmux.1#list-keys) |

---

## Miscellaneous

| Command | Action | Docs |
|---|---|---|
| `PREFIX t` | Show a large clock | [clock-mode](https://man.openbsd.org/tmux.1#clock-mode) |
| `PREFIX ~` | Show recent tmux messages | [show-messages](https://man.openbsd.org/tmux.1#show-messages) |
| `tmux kill-server` | Kill the tmux server and all sessions | [kill-server](https://man.openbsd.org/tmux.1#kill-server) |
| `tmux source-file <path>` | Load a config file from the shell | [source-file](https://man.openbsd.org/tmux.1#source-file) |
