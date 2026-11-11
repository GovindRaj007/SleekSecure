/**
 * One-time Google sign-in for the Search Console MCP (mcp-server-gsc in .mcp.json).
 *
 * Use this when service-account keys are blocked by the org policy
 * `iam.disableServiceAccountKeyCreation`. It signs in with your own Google account
 * (read-only Search Console scope) and writes an `authorized_user` credentials file,
 * which the MCP server's GoogleAuth({ keyFile }) accepts in place of a service-account key.
 *
 * Usage:
 *   node scripts/gsc-auth.mjs "C:/path/to/client_secret_xxx.json"
 *
 * The client JSON is a "Desktop app" OAuth client ID from Google Cloud Console.
 * Output: C:/Users/<you>/.gsc/sleeksecure-gsc.json (or $GSC_CREDENTIALS). Never commit it.
 */
import fs from "node:fs";
import http from "node:http";
import os from "node:os";
import path from "node:path";
import { exec } from "node:child_process";

const SCOPE = "https://www.googleapis.com/auth/webmasters.readonly";
const clientFile = process.argv[2];
if (!clientFile) {
  console.error('Usage: node scripts/gsc-auth.mjs "<path to downloaded OAuth client JSON>"');
  process.exit(1);
}
const raw = JSON.parse(fs.readFileSync(clientFile, "utf-8"));
const client = raw.installed ?? raw.web;
if (!client?.client_id || !client?.client_secret) {
  console.error("That file is not an OAuth client ID JSON (expected an 'installed' Desktop app client).");
  process.exit(1);
}
const outFile = process.env.GSC_CREDENTIALS ?? path.join(os.homedir(), ".gsc", "sleeksecure-gsc.json");

const server = http.createServer();
server.listen(0, "127.0.0.1", () => {
  const redirectUri = `http://127.0.0.1:${server.address().port}`;
  const authUrl =
    "https://accounts.google.com/o/oauth2/v2/auth?" +
    new URLSearchParams({
      client_id: client.client_id,
      redirect_uri: redirectUri,
      response_type: "code",
      scope: SCOPE,
      access_type: "offline",
      prompt: "consent",
    });

  server.on("request", async (req, res) => {
    const params = new URL(req.url, redirectUri).searchParams;
    const code = params.get("code");
    if (!code) {
      res.end(params.get("error") ? `Sign-in failed: ${params.get("error")}` : "Waiting for Google sign-in…");
      if (params.get("error")) { console.error("Sign-in failed:", params.get("error")); server.close(); process.exitCode = 1; }
      return;
    }
    try {
      const r = await fetch("https://oauth2.googleapis.com/token", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          code,
          client_id: client.client_id,
          client_secret: client.client_secret,
          redirect_uri: redirectUri,
          grant_type: "authorization_code",
        }),
      });
      const tok = await r.json();
      if (!tok.refresh_token) throw new Error(`No refresh token returned: ${JSON.stringify(tok)}`);
      fs.mkdirSync(path.dirname(outFile), { recursive: true });
      fs.writeFileSync(
        outFile,
        JSON.stringify(
          { type: "authorized_user", client_id: client.client_id, client_secret: client.client_secret, refresh_token: tok.refresh_token },
          null,
          2,
        ),
      );
      res.end("Signed in. You can close this tab and return to Claude Code.");
      console.log(`Saved Search Console credentials to ${outFile}`);
    } catch (err) {
      res.end("Token exchange failed - see the terminal.");
      console.error(err);
      process.exitCode = 1;
    }
    server.close();
  });

  console.log("Opening Google sign-in in your browser. If it doesn't open, visit:\n" + authUrl);
  exec(`start "" "${authUrl}"`, { shell: "cmd.exe" });
});
