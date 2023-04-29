import { Link } from "react-router-dom";
import { ConnectWalletButton } from "./ConnectWalletButton";

export const Header = () => {
  return (
    <div className="HeaderContainer">
      {/* Use Link and provide a to parameter as a string with the route in Layout */}
      <Link to="/">
        <h1>Heading</h1>
      </Link>
      <div className="NavContainer">
        <Link to="/minting">
          <h2 className="NavLink">Minting</h2>
        </Link>
        <Link to="/staking">
          <h2 className="NavLink">Staking</h2>
        </Link>
        <ConnectWalletButton />
      </div>
    </div>
  );
};
