/** @type {import('next').NextConfig} */
require('dotenv').config();

const nextConfig = {
    env: {
        NEXT_PUBLIC_API_SERVER: process.env.NEXT_PUBLIC_API_SERVER,
        PKEY : process.env.PKEY,
    }
}

module.exports = nextConfig
