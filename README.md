# Strasb
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started
First install the dependencies:
```bash
npm install
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

### Backend
Setup local IPFS Node. Download IPFS and IPFS CLI. ***Unfortunately, the create NFT portion only works locally as I only used IPFS locally.***

```bash
cd kubo
ipfs config --json API.HTTPHeaders.Access-Control-Allow-Origin '[\"*\"]'
ipfs config --json API.HTTPHeaders.Access-Control-Allow-Methods '[\"PUT\", \"GET\", \"POST\"]'
ipfs config --json Addresses.API \"/ip4/0.0.0.0/tcp/5001\"
```

Then in the `next.config.js` file, change:
```bash
IPFS_CLIENT: 'http://localhost:5001'
```

### Frontend
Now run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```
connect your metamask wallet, and you should be good to go! The Advertiser/Creator navbar is a bit finnicky because state mangement was kicking my butt. Please bare with the MVP! 🙏

# Smart Contracts deployed on Mumbai Testnet
NFT Collection Contract
0x16E072DCf5a6AB3a42147929578428D7C61EF794

NFT Resell Contract
0x87Ef5597621E9b5D403b939a5ACB6E2355DA9223

NFT Marketplace Contract
0xfb7aacbDc58EEF8755f97962Dbd88d2471541Ce0

NFT Creator Contract
0x7Eb71CFc8E49eA9c6B0482026533448A8631af95

boilerplate credits to: https://github.com/net2devcrypto