/** @type {import('next').NextConfig} */

const nextConfig = {
    env: {
        NEXT_PUBLIC_API_SERVER: 'https://strasb.vercel.app/api/hello',
        PKEY: 'e41e5eb9699dc20aa1edaa71f48c80c4588208d9c48dfc358dd3b3baac3b2746',
        NFT_STORE_API_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGYzYkVBQzU1NTZFM2Q2QzFlYjViYmVBODFGZmM3NGUxRDRlOTMzMzYiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY4NTM5MDQyODkwNSwibmFtZSI6InN0cmFzYiJ9.7CfdrdNNQRRB7zFGnKLOvKRoMLGB5P4-n8XD5rBNDyc',
    },
}

module.exports = nextConfig
