import { MetadataRoute } from 'next';
import { treatments, blogPosts, locations } from '@/data/siteData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://skincareclinic.com'; // Replace with actual domain

  const staticRoutes = [
    '',
    '/about',
    '/treatments',
    '/gallery',
    '/blog',
    '/contact',
    '/book',
    '/consultation',
    '/assessment',
    '/faq',
    '/facilities',
    '/testimonials',
    '/resources',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  const treatmentRoutes = treatments.map((t) => ({
    url: `${baseUrl}/treatments/${t.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  const blogRoutes = blogPosts.map((p) => ({
    url: `${baseUrl}/blog/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  const locationRoutes = locations.map((l) => ({
    url: `${baseUrl}/locations/${l.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }));

  return [...staticRoutes, ...treatmentRoutes, ...blogRoutes, ...locationRoutes];
}
