import { site } from "../../site.config.mjs";

export function GET() {
  return new Response(
    [
      `User-agent: *`,
      `Allow: /`,
      `Sitemap: ${site.url}/sitemap-index.xml`,
      "",
    ].join("\n"),
    {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
      },
    },
  );
}
