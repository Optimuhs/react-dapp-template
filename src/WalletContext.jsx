import React, { createContext, useState } from "react";

export const WalletContext = createContext();

export const WalletProvider = ({ children }) => {
  const [signer, setSigner] = useState(null);
  const [provider, setProvider] = useState(null);

  return (
    <WalletContext.Provider
      value={{ signer, setSigner, provider, setProvider }} // Update the value to an object with properties
    >
      {children}
    </WalletContext.Provider>
  );
};
