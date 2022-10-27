import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Firebase } from "../../firebase/config";
import Logo from "../../assets/logo.png";
import { ColorRing } from "react-loader-spinner";

import "./Login.css";

function Login() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [loading, setLoading] = useState(false);
  const history = useHistory();
  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    Firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        history.push("/");
      })
      .catch((error) => {
        alert(error.message);
      });
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };
  return (
    <>
      {loading && (
        <div style={{ left: "50%", top: "15%", position: "absolute" }}>
          {" "}
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
          />
        </div>
      )}
      <div>
        <div className="loginParentDiv">
          <img width="100px" height="100px" src={Logo} alt=""></img>
          <form onSubmit={handleSubmit}>
            <label>Email</label>
            <br />
            <input
              className="input"
              type="email"
              placeholder="abc@gmail.com"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <label>Password</label>
            <br />
            <input
              className="input"
              type="password"
              name="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <br />
            <button>Sign In</button>
          </form>
          <Link to="/signup">
            <span className="signUpButton">Sign up?</span>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Login;
