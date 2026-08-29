#!/usr/bin/env node
/**
 * olcli MCP Server
 *
 * Exposes OverleafClient methods as MCP tools so AI assistants
 * (Claude Desktop, Cursor, Windsurf, …) can manage Overleaf projects.
 *
 * Transport: stdio (standard for Claude Desktop / Cursor / Windsurf)
 *
 * Auth: reads session cookie from OVERLEAF_SESSION env var or .olauth file in cwd.
 *
 * Start:
 *   npx @aloth/olcli-mcp
 *   node dist/mcp.js
 *   npm run mcp          # (from repo root)
 */
export {};
//# sourceMappingURL=mcp.d.ts.map