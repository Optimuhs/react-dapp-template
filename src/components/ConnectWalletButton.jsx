import { Web3Provider } from "@ethersproject/providers";
import { useContext } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { WalletContext } from "../WalletContext";

const ConnectWalletButton = () => {
  const { wallet ,setWallet } = useContext(WalletContext);

  const connectWallet = async() => {
    // Connect to the wallet here and set the wallet state
    if(window.ethereum){
        if(!wallet){
            await window.ethereum.request({ method: "eth_requestAccounts" });
            const provider = new Web3Provider(window.ethereum);
            const tsigner = provider.getSigner()
            const address = await tsigner.getAddress()
            setWallet(address);

        } else{
          toast('Disconnecting your wallet', {
            position: "top-right",
            autoClose: 900,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
            setWallet(null)
        }
    }else{
      
      toast('Install your wallet', {
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

  return( 
    <button onClick={connectWallet}>
        {wallet ? `${wallet.slice(0,4)}...${wallet.slice(wallet.length - 4, wallet.length)}` : "Connect Wallet" }
    </button> 
  );
};

export { ConnectWalletButton };

