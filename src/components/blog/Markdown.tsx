/**
 * Tiny Markdown renderer for blog posts (author-controlled content only).
 * Supports: ## / ### headings, paragraphs, - and 1. lists, > callouts,
 * | tables |, **bold**, and [links](/path). Output is plain HTML so it is
 * fully present in the prerendered page for search and AI crawlers.
 */
const escapeHtml = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const inline = (s: string) =>
  escapeHtml(s)
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_m, text: string, href: string) => {
      const external = /^https?:\/\//.test(href);
      return `<a href="${href}"${external ? ' target="_blank" rel="noopener noreferrer"' : ""}>${text}</a>`;
    });

export const slugifyHeading = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export const markdownToHtml = (md: string): string => {
  const lines = md.trim().split(/\r?\n/);
  const out: string[] = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i].trim();
    if (!line) { i++; continue; }

    const h = /^(#{2,3})\s+(.*)$/.exec(line);
    if (h) {
      const level = h[1].length;
      out.push(`<h${level} id="${slugifyHeading(h[2])}">${inline(h[2])}</h${level}>`);
      i++; continue;
    }

    if (line.startsWith("|")) {
      const rows: string[][] = [];
      while (i < lines.length && lines[i].trim().startsWith("|")) {
        const cells = lines[i].trim().replace(/^\||\|$/g, "").split("|").map((c) => c.trim());
        if (!cells.every((c) => /^:?-{2,}:?$/.test(c))) rows.push(cells);
        i++;
      }
      const [head, ...body] = rows;
      out.push(
        `<div class="table-wrap"><table><thead><tr>${head.map((c) => `<th>${inline(c)}</th>`).join("")}</tr></thead><tbody>${body
          .map((r) => `<tr>${r.map((c) => `<td>${inline(c)}</td>`).join("")}</tr>`)
          .join("")}</tbody></table></div>`,
      );
      continue;
    }

    if (/^[-*]\s+/.test(line) || /^\d+\.\s+/.test(line)) {
      const ordered = /^\d+\.\s+/.test(line);
      const re = ordered ? /^\d+\.\s+/ : /^[-*]\s+/;
      const items: string[] = [];
      while (i < lines.length && re.test(lines[i].trim())) {
        items.push(`<li>${inline(lines[i].trim().replace(re, ""))}</li>`);
        i++;
      }
      out.push(ordered ? `<ol>${items.join("")}</ol>` : `<ul>${items.join("")}</ul>`);
      continue;
    }

    if (line.startsWith(">")) {
      const parts: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith(">")) {
        parts.push(lines[i].trim().replace(/^>\s?/, ""));
        i++;
      }
      out.push(`<blockquote>${inline(parts.join(" "))}</blockquote>`);
      continue;
    }

    const para: string[] = [];
    while (i < lines.length && lines[i].trim() && !/^(#{2,3}\s|\||[-*]\s|\d+\.\s|>)/.test(lines[i].trim())) {
      para.push(lines[i].trim());
      i++;
    }
    out.push(`<p>${inline(para.join(" "))}</p>`);
  }
  return out.join("\n");
};

/** Extracts ## headings for a table of contents. */
export const extractToc = (md: string) =>
  md
    .split(/\r?\n/)
    .map((l) => /^##\s+(.*)$/.exec(l.trim()))
    .filter((m): m is RegExpExecArray => !!m)
    .map((m) => ({ id: slugifyHeading(m[1]), text: m[1] }));

const Markdown = ({ source }: { source: string }) => (
  <div className="blog-prose" dangerouslySetInnerHTML={{ __html: markdownToHtml(source) }} />
);

export default Markdown;
