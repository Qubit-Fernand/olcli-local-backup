/**
 * @aloth/olcli — Programmatic API
 *
 * Re-exports the public surface of OverleafClient and all associated
 * interfaces/types so consumers can import directly from the package root.
 *
 * @example
 * ```ts
 * import { OverleafClient } from '@aloth/olcli';
 *
 * const client = await OverleafClient.fromSessionCookie(cookie);
 * const projects = await client.listProjects();
 * ```
 */
export { OverleafClient, type Project, type ProjectInfo, type FolderEntry, type DocEntry, type FileEntry, type CommentMessage, type ProjectComment, type CommentContext, type ListCommentsOptions, type AddCommentOptions, type Credentials, type SessionCookiePair, type CommentStatus, } from './client.js';
export { getBaseUrl, setBaseUrl, getSessionCookieName, setSessionCookieName, getSessionCookie, setSessionCookie, getTimeout, setTimeout, getPasswordCredentials, setPasswordCredentials, clearPasswordCredentials, type PasswordCredentials, getCsrf, setCsrf, getLastProject, setLastProject, clearConfig, getConfigPath, saveOlAuth, } from './config.js';
export { DEFAULT_IGNORE_PATTERNS, loadIgnore, shouldIgnore, buildTexSiblingSet, type IgnoreContext, type LoadIgnoreOptions, } from './ignore.js';
//# sourceMappingURL=index.d.ts.map