/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: process.env.NEXT_PUBLIC_BASE_PATH,
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
