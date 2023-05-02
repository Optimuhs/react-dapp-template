import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { WalletContext } from "../WalletContext";
import { BlockchainErrorBoundary } from "./ErrorHandler";
import { Header } from "./Header";
import { Home } from "./Home";
import { Minting } from "./Minting";
import { Staking } from "./Staking";
export const Layout = () => {
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);

  return (
    <BlockchainErrorBoundary>
      <WalletContext.Provider
        value={[{ signer, setSigner, provider, setProvider }]}
      >
        {/* Wrap all components relevant with BrowserRouter  */}
        <BrowserRouter>
          <div>
            <ToastContainer />
            <Header />
            <ToastContainer />
          </div>
          {/* Insert routes that will be used, use Links to routes see Header */}
          <div className="RouteWrapper">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/minting" element={<Minting />} />
              <Route path="/staking" element={<Staking />} />
            </Routes>
          </div>
        </BrowserRouter>
      </WalletContext.Provider>
    </BlockchainErrorBoundary>
  );
};
