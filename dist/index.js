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
// Core client class + all public interfaces/types
export { OverleafClient, } from './client.js';
// Configuration utilities
export { getBaseUrl, setBaseUrl, getSessionCookieName, setSessionCookieName, getSessionCookie, setSessionCookie, getTimeout, setTimeout, getPasswordCredentials, setPasswordCredentials, clearPasswordCredentials, getCsrf, setCsrf, getLastProject, setLastProject, clearConfig, getConfigPath, saveOlAuth, } from './config.js';
// Ignore subsystem
export { DEFAULT_IGNORE_PATTERNS, loadIgnore, shouldIgnore, buildTexSiblingSet, } from './ignore.js';
//# sourceMappingURL=index.js.map