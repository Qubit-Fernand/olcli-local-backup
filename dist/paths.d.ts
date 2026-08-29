/**
 * Path helpers for mapping local file paths to remote Overleaf project paths.
 */
/**
 * Normalize a path intended to be used as a remote path inside an Overleaf
 * project.
 *
 * - Converts backslashes to forward slashes (Windows-friendly).
 * - Drops '.' segments and collapses duplicate slashes.
 * - Resolves '..' segments; any that would escape the project root are dropped.
 * - Strips leading slashes so the result is always project-relative.
 *
 * Returns an empty string when nothing usable is left.
 */
export declare function normalizeRemotePath(path: string): string;
/**
 * Derive the remote path for an uploaded file.
 *
 * Precedence:
 *   1. An explicit destination (`--to` / `remote_path`) always wins.
 *   2. Absolute local paths collapse to their basename. Mirroring the local
 *      filesystem hierarchy from '/' into a project is never the intent, and
 *      previously produced remote paths like 'tmp/tmp.abc123/paper.tex'.
 *   3. Relative local paths keep their directory part, so
 *      'figures/diagram.png' still lands in the 'figures' folder.
 */
export declare function resolveRemotePath(localPath: string, destination?: string): string;
//# sourceMappingURL=paths.d.ts.map