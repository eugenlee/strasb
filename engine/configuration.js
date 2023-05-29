/*
IPFS API DETAILS
*/
import { create as ipfsHttpClient } from 'ipfs-http-client';
export const client = ipfsHttpClient('http://localhost:5001');

export var nftcollection = "0xBF774A8Bd17255607AbD061fC0E45D5d0ddF1BE8"
export var nftresell = "0x369c778f89aA412b98A7fB9CE846eAa5cb13585c"
export var marketcontract = "0x58a871EA56b4f60593801D12e040c9f6B9b1e4D7"
export var nftcreator = "0x51fbdB1Da74efB14Ae9A32Eb13dF1B2fCA27Cc38"

/*
Alchemy API Settings
*/
export var alchemyapi = "https://polygon-mumbai.g.alchemy.com/v2/P-Xzw2rp3FPFiicHxvi5DfKxRYE_5vwb";