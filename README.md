# Strasb
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

View the on-chain deployment: [here](https://www.tally.xyz/gov/web3atkaist-2023/proposal/19363343624449512003859703095119427253163935390615042240894878141681517417169).

## Getting Started
This project uses the Polygon Mumbai Testnet.

To add the Mumbai Testnet to Metamask:
```bash
Network Name: Mumbai
New RPC URL: https://polygon-mumbai.infura.io/v3/4458cf4d1689497b9a38b1d6bbf05e78
Chain ID: 80001
Currency Symbol: MATIC
Block Explorer URL: https://mumbai.polygonscan.com
```

If you don't have any MATIC, go to [https://mumbaifaucet.com/](https://mumbaifaucet.com/) and send 0.5 MATIC to your wallet.

### Setup
First install the dependencies:
```bash
npm install
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```
connect your metamask wallet, and you should be good to go!

# Smart Contracts deployed on Mumbai Testnet
*** Preventing advertiser from selling and crediting creator with matic not yet implemented ***

NFT Collection Contract
0x9B01794cD410D344d67719224b1F88fE7b8e886f

NFT Resell Contract
0xB58749ed51Fd5167F79d81B586e64a28695aaaca

NFT Marketplace Contract
0x05bB0dB7F0cE17a42755A9Cee6Ad65139B2eaa86

NFT Creator Contract
0x09ca1c6448f32a12B4F3029bfd907Cd95C43C333

boilerplate credits to: https://github.com/net2devcrypto
