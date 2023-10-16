/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'media.discordapp.net',
                port: '',
            },
            {
                protocol: 'https',
                hostname: 'cdn.discordapp.com',
                port: '',
            },
            {
                protocol: 'https',
                hostname: 'www.google.com',
                port: '',
            },
        ],
    },
}

module.exports = nextConfig
