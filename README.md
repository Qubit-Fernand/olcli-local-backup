# olcli local backup

This repository is a private backup/distribution of the local `olcli` setup on
Fernand's Mac as of 2026-08-29.

It contains:

- `@aloth/olcli` packaged from the current local install, upgraded to the 0.8.0
  command surface.
- Prebuilt `dist/` JavaScript and type declaration files.
- Local wrapper scripts in `local-bin/`:
  - `olcli`: chooses Node.js >= 20 and dispatches to the installed package.
  - `olupload`: safer upload helper for explicit files, root `*.tex`, and figure
    uploads.
  - `overleaf`: compatibility wrapper that forwards `overleaf upload ...` to
    `olcli upload ...`.

No `node_modules`, `.olauth`, `.olcli.json`, cookies, or local Overleaf project
state are tracked.

## Upstream provenance

Upstream package: [`@aloth/olcli`](https://github.com/aloth/olcli)

Base version: `0.8.0`

Local changes preserved here:

- The package metadata does not expose the 0.7 `git-remote-overleaf` binary.
- Fernand's wrapper scripts are included under `local-bin/`.
- The outer `olcli` wrapper keeps the local `olcli upload --fig` convenience
  path by dispatching it to `olupload --fig`.

## Restore package CLI

Install the package from this GitHub repository:

```bash
npm install -g git+ssh://git@github.com/Qubit-Fernand/olcli-local-backup.git
```

This installs the package-level `olcli` and `olcli-mcp` binaries from `dist/`.

## Restore local wrappers

To restore the exact local wrapper behavior used on this Mac:

```bash
scripts/install-local-bin.sh
```

That copies `local-bin/olcli`, `local-bin/olupload`, and `local-bin/overleaf`
into `~/cli/bin` and marks them executable.

## Quick checks

```bash
olcli --version
olcli upload --help
olcli upload --fig --help
olcli comments --help
olcli compile --help
olcli pdf --help
olcli output --help
```

