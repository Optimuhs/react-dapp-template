import { ethers } from "ethers";
import { useContext } from "react";
import { WalletContext } from "../WalletContext";
export const Staking = () => {
  const [{ signer, setSigner, provider, setProvider }] =
    useContext(WalletContext);

  const stake = async () => {
    if (signer) {
      try {
        // const gasPrice = await provider.getGasPrice();
        // const stakingABI = require("../static/Staking_abi.json");
        const nftABI = require("../static/NFT_abi.json");
        // const erc721StakingContract = new ethers.Contract(
        //   process.env.REACT_APP_STAKING_CONTRACT_ADDRESS,
        //   stakingABI,
        //   signer
        // );
        const erc721Contract = new ethers.Contract(
          process.env.REACT_APP_NFT_CONTRACT_ADDRESS,
          nftABI,
          signer
        );

        const tokenId = await userTokens(erc721Contract, signer);
        console.log(tokenId, "token");
        // const transactionData = erc721Contract.interface.encodeFunctionData(
        //   "StakeToken",
        //   [tokenId]
        // );

        // Estimate the gas required for the transaction
        // const gasLimit = await signer.estimateGas({
        //   to: process.env.REACT_APP_STAKING_CONTRACT_ADDRESS,
        //   data: transactionData,
        // });

        // // Create transaction object
        // const transaction = {
        //   to: process.env.REACT_APP_NFT_CONTRACT_ADDRESS,
        //   data: transactionData,
        //   gasPrice: gasPrice.toString(),
        //   gasLimit: gasLimit.mul(2).toString(),
        // };
        // // Sign and send the transaction with the signer
        // const transactionResponse = await signer.sendTransaction(transaction);

        // // Wait for transaction to be mined
        // const transactionReceipt = await transactionResponse.wait();

        // console.log(transactionReceipt, "receipt");
      } catch (error) {
        console.error("Error calling contract function:", error);
      }
    }
  };

  const userTokens = async (contract, signer) => {
    const walletAddress = await signer.getAddress();
    console.log(walletAddress);

    const tokenIds = await contract.balanceOf(walletAddress).then((balance) => {
      const promises = [];
      for (let i = 0; i < balance; i++) {
        promises.push(contract.tokenOfOwnerByIndex(walletAddress, i));
      }
      return Promise.all(promises);
    });
    return tokenIds;
    console.log(tokenIds, "tokens");
    // log the token IDs
    for (const tokenId of tokenIds) {
      console.log(
        `Token ID ${tokenId.toString()} is owned by ${walletAddress}`
      );
    }
  };

  return (
    <div className="ContentWrapper">
      <h1>Staking</h1>
      <p>
        Staking is when a user locks their token away into a smart contract for
        a set amount of time and earns some form of rewards for their staking.
        In this case there is no delay or time lock for staking and unstaking a
        token. However there is a continuous time limit that the user must stake
        their token if they want to earn a reward token, the being 1 day.
        Therefore, if a user stakes their token for 23 hours 59 mintues and 59
        seconds, they will not earn that reward token if they unstake before the
        full 24 hours have passed.{" "}
      </p>
      <h3>Staking will be coming soon!</h3>
      {/* <button
        onClick={() => {
          stake();
        }}
        className="StakeButton"
      >
        <h2>{signer ? "Mint 1 NFT" : "Wallet Not Connected"}</h2>
      </button> */}
    </div>
  );
};
