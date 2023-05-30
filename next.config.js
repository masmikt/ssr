/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: 'next',
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
