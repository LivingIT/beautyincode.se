import { baseUrl, deployTime } from '$lib/config';

const pages = [
  {
    loc: baseUrl,
    lastmod: deployTime,
    changefreq: 'daily',
    priority: 0.5,
  },
  {
    loc: `${baseUrl}/schedule/`,
    lastmod: deployTime,
    changefreq: 'monthly',
    priority: 0.3,
  },
  {
    loc: `${baseUrl}/speakers/`,
    lastmod: deployTime,
    changefreq: 'monthly',
    priority: 0.3,
  },
  {
    loc: `${baseUrl}/terms/`,
    lastmod: deployTime,
    changefreq: 'monthly',
    priority: 0.3,
  },
  {
    loc: `${baseUrl}/videos/`,
    lastmod: deployTime,
    changefreq: 'monthly',
    priority: 0.3,
  },
];

const items = pages
  .map((page) => {
    return `
    <url>
        <loc>${page.loc}</loc>
        <lastmod>${page.lastmod}</lastmod>
        <changefreq>${page.changefreq}</changefreq>
        <priority>${page.priority}</priority>
    </url>
  `;
  })
  .join('');

export async function GET() {
  return new Response(
    `
    <?xml version="1.0" encoding="UTF-8" ?>
    <urlset
      xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xhtml="https://www.w3.org/1999/xhtml"
      xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
      xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
      xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
      xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
    >
      ${items}
    </urlset>
    `.trim(),
    {
      headers: {
        'Content-Type': 'application/xml',
      },
    },
  );
}
