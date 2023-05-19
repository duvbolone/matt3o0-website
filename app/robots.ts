import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: [
                '/',
                '/about',
                '/projects',
                '/privacy',
            ],
            disallow: [
                '/icons',
                '/projects',
                '/files'
            ],
        },
        sitemap: 'https://matt3o0.is-a.dev/sitemap.xml',
    };
}