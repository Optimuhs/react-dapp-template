import { useState } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { WalletContext } from "../WalletContext";
import { BlockchainErrorBoundary } from "./ErrorHandler";
import { Header } from "./Header";
import { MintButton } from "./MintButton";



const Layout = () => {
    const [wallet, setWallet] = useState(null);
    return(
        <BlockchainErrorBoundary>
            <WalletContext.Provider value={{ wallet, setWallet }}>
                <div>
                    <ToastContainer />
                        <Header/>
                        <h1>Stuff </h1>
                        <MintButton/>
                    <ToastContainer />
                </div>
            </WalletContext.Provider>
        </BlockchainErrorBoundary>
    
    )
}
export { Layout };
