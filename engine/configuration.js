/*
IPFS API DETAILS
*/
import { create as ipfsHttpClient } from 'ipfs-http-client';
export const client = ipfsHttpClient(process.env.IPFS_CLIENT);

export var nftcollection = "0x9B01794cD410D344d67719224b1F88fE7b8e886f"
export var nftresell = "0xB58749ed51Fd5167F79d81B586e64a28695aaaca"
export var marketcontract = "0x05bB0dB7F0cE17a42755A9Cee6Ad65139B2eaa86"
export var nftcreator = "0x09ca1c6448f32a12B4F3029bfd907Cd95C43C333"

/*
Alchemy API Settings
*/
export var alchemyapi = "https://polygon-mumbai.g.alchemy.com/v2/P-Xzw2rp3FPFiicHxvi5DfKxRYE_5vwb";