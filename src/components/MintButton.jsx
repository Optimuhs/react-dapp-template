import { ethers } from "ethers";
import { useContext } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { WalletContext } from "../WalletContext";

export const MintButton = () => {
  // Import state from context
  const [{ signer, setSigner, provider, setProvider }] =
    useContext(WalletContext);

  const mint = async () => {
    if (signer) {
      try {
        const gasPrice = await provider.getGasPrice();
        const abi = require("../static/NFT_abi.json");
        const value = (1 * Math.pow(10, 14)).toString(); // "cost"
        const erc721Contract = new ethers.Contract(
          process.env.REACT_APP_NFT_CONTRACT_ADDRESS,
          abi,
          signer
        );
        const transactionData = erc721Contract.interface.encodeFunctionData(
          "mintNFT",
          []
        );
        // Estimate the gas required for the transaction
        const gasLimit = await signer.estimateGas({
          to: process.env.REACT_APP_NFT_CONTRACT_ADDRESS,
          data: transactionData,
          value: value,
        });
        console.log(gasLimit.toString());
        // Create transaction object
        const transaction = {
          to: process.env.REACT_APP_NFT_CONTRACT_ADDRESS,
          data: transactionData,
          gasPrice: gasPrice.toString(),
          gasLimit: gasLimit.mul(2).toString(),
          value: value,
        };
        // Sign and send the transaction with the signer
        const transactionResponse = await signer.sendTransaction(transaction);

        // Wait for transaction to be mined
        const transactionReceipt = await transactionResponse.wait();

        console.log(transactionReceipt, "receipt");
      } catch (error) {
        console.error("Error calling contract function:", error);
      }
    } else {
      // alert("Connect your wallet")
      toast("Connect your wallet", {
        position: "top-right",
        autoClose: 900,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <button
      onClick={() => {
        mint();
      }}
      className="MintButton"
    >
      {signer ? "Mint 1 NFT" : "Connect Your Wallet"}
    </button>
  );
};
