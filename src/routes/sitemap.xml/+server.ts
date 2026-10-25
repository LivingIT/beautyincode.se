import { baseUrl, deployTime } from '$lib/config';

const pages = [
  {
    loc: baseUrl,
    changefreq: 'daily',
    priority: 0.5,
  },
  {
    loc: `${baseUrl}/schedule/`,
    changefreq: 'monthly',
    priority: 0.3,
  },
  {
    loc: `${baseUrl}/speakers/`,
    changefreq: 'monthly',
    priority: 0.3,
  },
  {
    loc: `${baseUrl}/tickets/`,
    changefreq: 'monthly',
    priority: 0.3,
  },
  {
    loc: `${baseUrl}/terms/`,
    changefreq: 'monthly',
    priority: 0.3,
  },
  {
    loc: `${baseUrl}/privacy/`,
    changefreq: 'monthly',
    priority: 0.3,
  },
  {
    loc: `${baseUrl}/videos/`,
    changefreq: 'monthly',
    priority: 0.3,
  },
];

const items = pages
  .map((page) => {
    return `
    <url>
        <loc>${page.loc}</loc>
        ${deployTime ? `<lastmod>${deployTime}</lastmod>` : ''}
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
