import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://matt3o0.is-a.dev/',
            lastModified: new Date(),
        },
        {
            url: 'https://matt3o0.is-a.dev/about',
            lastModified: new Date(),
        },
        {
            url: 'https://matt3o0.is-a.dev/projects',
            lastModified: new Date(),
        },
        {
            url: 'https://matt3o0.is-a.dev/privacy',
            lastModified: new Date(),
        },
        {
            url: 'https://matt3o0.is-a.dev/xpdevbot',
            lastModified: new Date(),
        },
    ];
}