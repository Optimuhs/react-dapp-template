import { Squash as Hamburger } from "hamburger-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ConnectWalletButton } from "./ConnectWalletButton";
export const Header = () => {
  const [isOpen, setOpen] = useState(false);

  // useEffect(() => {

  // },[isOpen])

  return (
    <div className="HeaderContainer">
      {/* Use Link and provide a to parameter as a string with the route in Layout */}
      <Link to="/" style={{ textDecoration: "none" }}>
        <h1 className="NavLink" id="Logo">
          Heading
        </h1>
      </Link>
      <div className="HamburgerWrapper">
        <Hamburger
          rounded
          toggled={isOpen}
          toggle={setOpen}
          size={32}
          easing="ease-in"
        />
      </div>

      <div
        className={`${isOpen ? "Show" : "Hidden"} Sidebar`}
        style={{
          visibility: isOpen ? "visible" : "hidden",
        }}
      >
        <ul className="Hidden">
          <li>
            <Link to="/minting" style={{ textDecoration: "none" }}>
              <h2 className="NavLink">Minting</h2>
            </Link>
          </li>
          <li>
            <Link to="/staking" style={{ textDecoration: "none" }}>
              <h2 className="NavLink">Staking</h2>
            </Link>
          </li>
        </ul>
      </div>

      <div className="NavContainer">
        <ul>
          <li>
            <Link to="/minting" style={{ textDecoration: "none" }}>
              <h2 className="NavLink">Minting</h2>
            </Link>
          </li>
          <li>
            {" "}
            <Link to="/staking" style={{ textDecoration: "none" }}>
              <h2 className="NavLink">Staking</h2>
            </Link>
          </li>
        </ul>

        <ConnectWalletButton />
      </div>
    </div>
  );
};
