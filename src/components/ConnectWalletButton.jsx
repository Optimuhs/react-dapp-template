import { Web3Provider } from "@ethersproject/providers";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { WalletContext } from "../WalletContext";

export const ConnectWalletButton = () => {
  const [{ signer, setSigner, provider, setProvider }] =
    useContext(WalletContext);

  const [userAddress, setUserAddress] = useState("");

  useEffect(() => {
    // Fetch the locally stored item from localStorage
    const storedValue = localStorage.getItem("userAddress");

    // Update the button value with the stored value
    if (userAddress === "") {
      setUserAddress(storedValue);
    }
  }, [userAddress]);

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
        setUserAddress("");
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

  return (
    <button onClick={connectWallet} className="ConnectWallet">
      <h2>
        {signer
          ? `${userAddress.slice(0, 4)}...${userAddress.slice(
              userAddress.length - 4,
              userAddress.length
            )}`
          : "Connect Wallet"}
      </h2>
    </button>
  );
};
