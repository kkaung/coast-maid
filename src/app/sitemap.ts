import { absoluteUrl } from '@/lib/utils';
import { allPosts, allPages, allAuthors } from 'contentlayer/generated';
import { type MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const pagesRoutes = allPages.map(page => ({
        url: absoluteUrl(`/${page.slugAsParams}`),
        lastModified: new Date().toISOString(),
    }));

    const postsRoutes = allPosts.map(post => ({
        url: absoluteUrl(`${post.slug}`),
        lastModified: new Date().toISOString(),
    }));

    const authorsRoutes = allAuthors.map(post => ({
        url: absoluteUrl(`${post.slug}`),
        lastModified: new Date().toISOString(),
    }));

    const routes = [
        '',
        '/cleaning-services',
        '/pricing',
        '/house-cleaning-pricing-gold-coast',
        '/blog',
        '/booking',
        '/frequently-asked-questions',
        '/house-cleaning-checklist',

        '/deep-cleaning-gold-coast',
        '/regular-cleaning-gold-coast',
        '/end-of-lease-cleaning-gold-coast',
        '/office-cleaning-gold-coast',
        '/oven-cleaning-gold-coast',
        '/carpet-cleaning-gold-coast',
        '/window-cleaning-gold-coast',
        '/builder-cleaning-gold-coast',
        '/airbnb-cleaning-gold-coast',
    ].map(route => ({
        url: absoluteUrl(route),
        lastModified: new Date().toISOString(),
    }));

    return [...routes, ...pagesRoutes, ...postsRoutes, ...authorsRoutes];
}
