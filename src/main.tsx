import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.tsx";
import "@fontsource-variable/dm-sans";
import "@fontsource-variable/playfair-display";
import "./index.css";

const container = document.getElementById("root")!;

// Pages are prerendered at build time (scripts/prerender.mjs); hydrate them when present.
if (container.hasChildNodes()) {
  hydrateRoot(container, <App />);
} else {
  createRoot(container).render(<App />);
}
