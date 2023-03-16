import { Web3Provider } from "@ethersproject/providers";
import { useContext } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { WalletContext } from "../WalletContext";

const MintButton = () => {
    const {wallet, setWallet} = useContext(WalletContext)

    const mint = async() => {
        if(wallet){
            const provider = new Web3Provider(window.ethereum);
            const signer = provider.getSigner()
            // console.log(signer)
            // const address = await signer.getAddress()
            // setWallet(address)
        }else{
            // alert("Connect your wallet")
            toast('Connect your wallet', {
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
    
    
    return(
        <button
        onClick={() => {mint()}}>{wallet ? wallet.slice(0,4) : "Mint Now"}
        </button>
    )
}

export { MintButton };

