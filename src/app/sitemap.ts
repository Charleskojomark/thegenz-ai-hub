import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://thegenz-ai-hub.vercel.app';
  const routes = [
    '',
    '/about',
    '/learn',
    '/build',
    '/connect',
    '/cohort',
    '/apply',
    '/submit-problem',
    '/mentor',
    '/partner',
    '/contact',
    '/insights',
    '/privacy',
    '/terms',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : route === '/apply' || route === '/cohort' ? 0.9 : 0.8,
  }));
}
