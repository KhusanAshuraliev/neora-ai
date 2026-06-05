import type { MetadataRoute } from 'next'

const BASE_URL = 'https://www.neora.page'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // Allow all crawlers, including AI assistants
        // (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, etc.)
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  }
}
