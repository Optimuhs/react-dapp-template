import { ethers } from "ethers";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { WalletContext } from "../WalletContext";

export const MintButton = () => {
  // Import state from context
  const [{ signer, setSigner, provider, setProvider }] =
    useContext(WalletContext);

  const navigate = useNavigate();

  const mint = async () => {
    if (signer) {
      try {
        const gasPrice = await provider.getGasPrice();
        const abi = require("../static/NFT_abi.json");
        const value = (1 * Math.pow(10, 13)).toString(); // "cost"
        let add = await signer.getAddress();
        let a = signer.address;
        let b = await signer.getAddress();
        console.log(signer.provider);
        console.log(signer._isProviderConnected());
        console.log(b);

        const erc721Contract = new ethers.Contract(
          process.env.REACT_APP_NFT_CONTRACT_ADDRESS,
          abi,
          signer
        );

        console.log(erc721Contract.address, "contract");
        const metadata = {
          name: "Optimuhs' Thanks",
          description: "Thank you for testing this out!",
          image: process.env.REACT_APP_NFT_CID,
        };

        const transactionData = erc721Contract.interface.encodeFunctionData(
          "mintNFT",
          [metadata]
        );

        // Estimate the gas required for the transaction
        const gasLimit = await signer.estimateGas({
          to: process.env.REACT_APP_NFT_CONTRACT_ADDRESS,
          data: transactionData,
          value: value,
        });

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
        const status = await transactionReceipt.status;
        console.log(transactionReceipt, "receipt");
        navigate("/Results", {
          state: [{ prop1: transactionReceipt, prop2: status }],
        });
      } catch (error) {
        console.error("Error calling contract function:", error);
        console.log("e", error.message);
        navigate("/Results", {
          state: [{ prop1: error.message }],
        });
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
      onClick={async () => {
        await mint();
      }}
      className="MintButton"
    >
      <h2>{signer ? "Mint 1 NFT" : "Wallet Not Connected"}</h2>
    </button>
  );
};
