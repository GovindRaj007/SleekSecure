/**
 * Server entry used only at build time by scripts/prerender.mjs.
 * Renders each route to static HTML so search engines and AI crawlers
 * (which often do not execute JavaScript) receive real content and meta tags.
 */
import { Writable } from "node:stream";
import { renderToPipeableStream } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { AppProviders, AppRoutes } from "./App";
import ScrollToTop from "@/components/layout/ScrollToTop";
import { HeadCollectorContext, type HeadData } from "@/components/shared/Seo";

export { ALL_ROUTES } from "@/lib/routes";
export { BLOG_POSTS } from "@/content/blog";
export { ALL_LOCATIONS } from "@/lib/locations";
export { BUSINESS, SERVICES } from "@/lib/constants";

export const render = (url: string): Promise<{ html: string; head?: HeadData }> => {
  const collector: { head?: HeadData } = {};
  // Must mirror the tree in App.tsx so hydration matches.
  const app = (
    <HeadCollectorContext.Provider value={collector}>
      <AppProviders>
        <SpeedInsights />
        <StaticRouter location={url}>
          <ScrollToTop />
          <AppRoutes />
        </StaticRouter>
      </AppProviders>
    </HeadCollectorContext.Provider>
  );

  return new Promise((resolve, reject) => {
    let html = "";
    let failed: unknown;
    const stream = renderToPipeableStream(app, {
      onAllReady() {
        if (failed) return reject(failed);
        const sink = new Writable({
          write(chunk, _enc, cb) {
            html += chunk.toString();
            cb();
          },
        });
        sink.on("finish", () => resolve({ html, head: collector.head }));
        stream.pipe(sink);
      },
      onShellError: reject,
      onError(err) {
        failed = err;
      },
    });
  });
};
