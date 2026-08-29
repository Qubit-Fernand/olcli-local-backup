#!/usr/bin/env bash
set -euo pipefail

repo_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd -P)"
target_dir="${HOME}/cli/bin"

mkdir -p "$target_dir"

for name in olcli olupload overleaf; do
  install -m 0755 "$repo_root/local-bin/$name" "$target_dir/$name"
  echo "installed $target_dir/$name"
done

