import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { WalletContext } from "../WalletContext";
import { BlockchainErrorBoundary } from "./ErrorHandler";
import { Header } from "./Header";
import { MintButton } from "./MintButton";

export const Layout = () => {
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);

  return (
    <BlockchainErrorBoundary>
      <WalletContext.Provider
        value={[{ signer, setSigner, provider, setProvider }]}
      >
        <div>
          <ToastContainer />
          <Header />
          <h1>Stuff </h1>
          <MintButton />
          <ToastContainer />
        </div>
      </WalletContext.Provider>
    </BlockchainErrorBoundary>
  );
};
