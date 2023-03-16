import { Web3Provider } from "@ethersproject/providers";
import { WalletContext } from "../WalletContext";
const { ethers } = require("ethers");

const contractAddress;
const { wallet ,setWallet } = useContext(WalletContext);


// Initialize an ethers provider and signer with your private key
const provider = new Web3Provider("goerli");
const signer = new ethers.Wallet(provider);

// Create a contract instance for the ERC721 contract
const erc721Contract = new ethers.Contract(contractAddress, abi, signer);

// Get the number of ERC721 tokens owned by the user
const tokenCount = await erc721Contract.balanceOf(userAddress);

// Create an array to hold the token IDs
const tokenIds = [];

// Loop through all of the user's tokens and add their IDs to the array
for (let i = 0; i < tokenCount.toNumber(); i++) {
  const tokenId = await erc721Contract.tokenOfOwnerByIndex(userAddress, i);
  tokenIds.push(tokenId.toString());
}

console.log(tokenIds);
