/** @type {import('next').NextConfig} */

const nextConfig = {
    env: {
        NEXT_PUBLIC_API_SERVER: 'https://strasb.vercel.app/api/hello',
        PKEY: 'e41e5eb9699dc20aa1edaa71f48c80c4588208d9c48dfc358dd3b3baac3b2746',
        IPFS_CLIENT: 'https://strasb.vercel.app:5001',
    }
}

module.exports = nextConfig
