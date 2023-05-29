/*
IPFS API DETAILS
*/
import { create as ipfsHttpClient } from 'ipfs-http-client';
export const client = ipfsHttpClient(process.env.IPFS_CLIENT);

export var nftcollection = "0x16E072DCf5a6AB3a42147929578428D7C61EF794"
export var nftresell = "0x87Ef5597621E9b5D403b939a5ACB6E2355DA9223"
export var marketcontract = "0xfb7aacbDc58EEF8755f97962Dbd88d2471541Ce0"
export var nftcreator = "0x7Eb71CFc8E49eA9c6B0482026533448A8631af95"

/*
Alchemy API Settings
*/
export var alchemyapi = "https://polygon-mumbai.g.alchemy.com/v2/P-Xzw2rp3FPFiicHxvi5DfKxRYE_5vwb";