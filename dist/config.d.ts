/**
 * Configuration management for olcli
 */
export interface PasswordCredentials {
    email: string;
    password: string;
}
export declare function getBaseUrl(): string;
export declare function setBaseUrl(url: string): void;
export declare function getTimeout(): number;
export declare function setTimeout(ms: number): void;
export declare function getPasswordCredentials(): PasswordCredentials | undefined;
export declare function setPasswordCredentials(email: string, password: string): void;
export declare function clearPasswordCredentials(): void;
export declare function getSessionCookieName(): string;
export declare function setSessionCookieName(name: string): void;
export declare function getSessionCookie(): string | undefined;
export declare function setSessionCookie(cookie: string): void;
export declare function getCsrf(): string | undefined;
export declare function setCsrf(csrf: string): void;
export declare function getLastProject(): string | undefined;
export declare function setLastProject(projectId: string): void;
export declare function clearConfig(): void;
export declare function getConfigPath(): string;
/**
 * Save session cookie in .olauth format for compatibility
 */
export declare function saveOlAuth(cookie: string, path?: string): void;
//# sourceMappingURL=config.d.ts.map