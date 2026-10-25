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
    loc: `${baseUrl}/tickets/`,
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
    loc: `${baseUrl}/privacy/`,
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
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
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
