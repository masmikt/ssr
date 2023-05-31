/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    // async redirects() {
    //     return [
    //         {
    //             source: '/',
    //             destination: '/setup-flow',
    //             permanent: false,
    //         },
    //     ];
    // },
    output: 'standalone',
}

module.exports = nextConfig
