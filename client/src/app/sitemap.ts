import { MetadataRoute } from 'next';
import { servicesContent } from '@/data/services-content';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://modentalclinic.com';

  const services = Object.keys(servicesContent).map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 1,
    },
    ...services,
  ];
}
