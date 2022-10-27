import React, { useContext } from "react";
import { useHistory } from "react-router";
// import { AllPostContext } from "../../contextStore/AllPostContext";
// import { PostContext } from "../../contextStore/PostContext";
import "./Header.css";
import OlxLogo from "../../assets/OlxLogo";
// import SearchIcon from "../../assets/SearchIcon";
import Arrow from "../../assets/Arrow";
import SellButton from "../../assets/SellButton";
import SellButtonPlus from "../../assets/SellButtonPlus";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contextStore/AuthContext";
import { Firebase } from "../../firebase/config";
import Search from "../Search/Search";
function Header() {
  // const { allPost } = useContext(AllPostContext);
  // const { setPostContent } = useContext(PostContext);
  const history = useHistory();

  const { user } = useContext(AuthContext);

  const logoutHandler = () => {
    Firebase.auth()
      .signOut()
      .then(() => {
        history.push("/login");
      });
  };
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="search_location">
          <input list="a" placeholder="Enter your location" />
          <datalist id="a">
            <option>Dera Bassi</option>
            <option>Ludhiana</option>
            <option>Delhi</option>
            <option>Punjab</option>
          </datalist>
        </div>
        <Search />
        <div className="loginPage">
          {user ? (
            <span
              style={{
                color: "#098bbf",
                fontSize: "20px",
                position: "relative",
                left: "10px",
                textDecoration: "none",
              }}
            >
              {user.displayName}
            </span>
          ) : (
            <Link to="/login">
              <div className="login_button">
                <button type="button">Login</button>
              </div>{" "}
            </Link>
          )}
        </div>
        {user && (
          <span
            style={{
              position: "relative",
              left: "-65px",
              fontSize: "20px",
              color: "#098bbf",
              textDecoration: "underline",
            }}
            onClick={logoutHandler}
            className="logout-span"
          >
            Logout
          </span>
        )}

        <Link to="/create">
          {" "}
          <div className="sell_button">
            <button type="button">+Sell</button>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
