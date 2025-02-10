import {  useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

export default function Header() {
  const [btnName, setBtnName] = useState("Login");
  const {loggedInUser} = useContext(UserContext);
  console.log(loggedInUser);

  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50">
      <div className="logo-container"> 
        <img className="w-35" src={ LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            Status: {onlineStatus ? "🟢" : "🔴"}
          </li>
          <li className="px-4">
            <Link style={{textDecoration: "none", color: "black"}} to={"/"}>Home</Link>
          </li> 
          <li className="px-4">
            <Link style={{textDecoration: "none", color: "black"}} to={"/about"}>About Us</Link>
          </li>
          <li className="px-4">
            <Link style={{textDecoration: "none", color: "black"}} to={"/contact"}>Contact Us</Link>
          </li>
          <li className="px-4">
            <Link style={{textDecoration: "none", color: "black"}} to={"/grocery"}>Grocery</Link>
          </li>
          <li className="px-4">Cart</li>
          <button
            className="login"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
}
