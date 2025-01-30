import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
// const Header = () => {
export default function Header() {
  const [btnName, setBtnName] = useState("Login");
  console.log("Header render");
  useEffect(() => {
    console.log("UseEffect called");
  }, [btnName]);
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul >
          <li>
            <Link style={{textDecoration: "none", color: "black"}} to={"/"}>Home</Link>
          </li> 
          <li>
            <Link style={{textDecoration: "none", color: "black"}} to={"/about"}>About Us</Link>
          </li>
          <li>
            <Link style={{textDecoration: "none", color: "black"}} to={"/contact"}>Contact Us</Link>
          </li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
}

// export default Header;
