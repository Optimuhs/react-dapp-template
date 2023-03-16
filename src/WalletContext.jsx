import { createContext, useState } from "react";
const WalletContext = createContext();

const WalletProvider = ({ children }) => {
  const [wallet, setWallet] = useState(null);
  const [signer, setSigner] = useState(null)
  return (
    <WalletContext.Provider value={[{ wallet, setWallet }, {signer, setSigner}]}>
      {children}
    </WalletContext.Provider>
  );
};

export {
  WalletContext,
  WalletProvider
};


