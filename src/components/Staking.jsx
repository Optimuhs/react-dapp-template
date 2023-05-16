import { useContext } from "react";
import { WalletContext } from "../WalletContext";
export const Staking = () => {
  const [{ signer, setSigner, provider, setProvider }] =
    useContext(WalletContext);

  return (
    <div className="ContentWrapper">
      <h1>Staking</h1>
      <p>
        Staking is when a user locks their token away into a smart contract for
        a set amount of time and earns some form of rewards for their staking.
        In this case there is no delay or time lock for staking and unstaking a
        token. However there is a continuous time limit that the user must stake
        their token if they want to earn a reward token, 1 day{" "}
      </p>
      <h3>Staking will be coming soon!</h3>
    </div>
  );
};
