// import { Web3Provider } from "@ethersproject/providers";
// import { useContext } from "react";
// import { WalletContext } from "../WalletContext";
const { ethers } = require("ethers");

async function mintToken(signer) {
  const abi = fetch("../static/NFT_abi.json")
    .then((response) => response.json())
    .then((data) => {
      // Use the data from the JSON file
      const erc721Contract = new ethers.Contract(
        process.env.REACT_APP_NFT_CONTRACT_ADDRESS,
        data,
        signer
      );
      console.log(erc721Contract);
      return erc721Contract;
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  // Create a contract instance for the ERC721 contract
  //   const erc721Contract = new ethers.Contract(
  //     process.env.REACT_APP_NFT_CONTRACT_ADDRESS,
  //     abi,
  //     signer
  //   );
  //   console.log(erc721Contract);
  //   return erc721Contract;
}

module.exports = { mintToken };
