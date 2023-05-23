import { Web3Provider } from "@ethersproject/providers";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { WalletContext } from "../WalletContext";

export const ConnectWalletButton = () => {
  const [{ signer, setSigner, provider, setProvider }] =
    useContext(WalletContext);
  const expectedChainId = 5;
  const [userAddress, setUserAddress] = useState("");

  useEffect(() => {
    // Fetch the locally stored item from localStorage
    const storedValue = localStorage.getItem("userAddress");

    // Update the button value with the stored value
    if (userAddress === "") {
      setUserAddress(storedValue);
    }
  }, [userAddress]);

  const switchToNetwork = async () => {
    try {
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: expectedChainId }],
      });
    } catch (error) {
      // Handle error if the user rejects the network switch or if the method is not supported
      console.log("Error switching network:", error);
    }
  };

  const connectWallet = async () => {
    // Connect to the wallet here and set the wallet state
    if (window.ethereum) {
      if (!signer) {
        await window.ethereum.request({ method: "eth_requestAccounts" });

        let tprovider = new Web3Provider(window.ethereum);
        let tsigner = await tprovider.getSigner();
        let address = await tsigner.getAddress();
        const network = await tprovider.getNetwork();

        if (network !== expectedChainId) {
          try {
            await window.ethereum.request({
              method: "wallet_switchEthereumChain",
              params: [{ chainId: `0x${expectedChainId.toString(16)}` }],
            });

            tprovider = new Web3Provider(window.ethereum);
            tsigner = await tprovider.getSigner();
            address = await tsigner.getAddress();

            setSigner(tsigner);
            setProvider(tprovider);
            setUserAddress(address);
            localStorage.setItem("userAddress", address);
          } catch (err) {
            toast("Cannot connect if not on Goerli Network", {
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
        }
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
        setSigner("");
        setProvider("");
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

  const getUserAddress = () => {
    if (userAddress) {
      return `${userAddress.slice(0, 4)}...${userAddress.slice(
        userAddress.length - 4,
        userAddress.length
      )}`;
    } else {
      return "Connect Wallet";
    }
  };
  return (
    <button onClick={connectWallet} className="ConnectWallet">
      <h2>{signer ? `${getUserAddress()}` : "Connect Wallet"}</h2>
    </button>
  );
};
