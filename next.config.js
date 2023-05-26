/** @type {import('next').NextConfig} */
const nextConfig = {
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
