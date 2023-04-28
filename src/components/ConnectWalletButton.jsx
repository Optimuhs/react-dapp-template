import { Web3Provider } from "@ethersproject/providers";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { WalletContext } from "../WalletContext";

export const ConnectWalletButton = () => {
  const [{ signer, setSigner, provider, setProvider }] =
    useContext(WalletContext);

  // const [] = useContext(WalletContext);
  const [userAddress, setUserAddress] = useState("");

  useEffect(() => {
    // Fetch the locally stored item from localStorage
    const storedValue = localStorage.getItem("userAddress");

    // Update the button value with the stored value
    if (userAddress === "") {
      setUserAddress(storedValue);
    }
  }, []);

  const connectWallet = async () => {
    // Connect to the wallet here and set the wallet state
    if (window.ethereum) {
      if (!signer) {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const tprovider = new Web3Provider(window.ethereum);
        const tsigner = tprovider.getSigner();
        const address = await tsigner.getAddress();
        setSigner(tsigner);
        setProvider(tprovider);
        setUserAddress(address);
        localStorage.setItem("userAddress", address);
      } else {
        toast("Disconnecting your wallet", {
          position: "top-right",
          autoClose: 900,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setSigner(null);
        setProvider(null);
        localStorage.removeItem("userAddress");
        setUserAddress("Connect Wallet");
      }
    } else {
      toast("Install your wallet", {
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

  // const getUserAddress = () => {
  //   const userAddress = JSON.parse(localStorage.getItem("userAddress"));
  //   return `${userAddress.slice(0, 4)}...${userAddress.slice(
  //     userAddress.length - 4,
  //     userAddress.length
  //   )}`;
  // };

  return (
    <button onClick={connectWallet}>
      {signer
        ? `${userAddress.slice(0, 4)}...${userAddress.slice(
            userAddress.length - 4,
            userAddress.length
          )}`
        : "Connect Wallet"}
    </button>
  );
};
