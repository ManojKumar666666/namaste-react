import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Header = () => {
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  return (
    <div className="flex justify-between shadow-md ">
      <div>
        <img className="w-35" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex items-center gap-10 m-5 ">
          <li>Online Status:{onlineStatus ? "✅" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>
            <Link to="contact">Contact us</Link>
          </li>
          <li>Cart</li>
          <li>Login :{loggedInUser} </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
