/** @type {import('next').NextConfig} */
const nextConfig = {
    // basePath: '/w2a',
    async redirects() {
        return [
            {
                source: '/',
                destination: '/setup-flow',
                permanent: false,
            },
        ];
    },
    output: 'standalone',
}

module.exports = nextConfig
