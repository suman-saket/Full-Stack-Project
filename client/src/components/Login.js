import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../App";

const Login = () => {
  const { state, dispatch } = useContext(UserContext);

  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async (e) => {
    e.preventDefault();

    const res = await fetch("/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = res.json();

    if (res.status === 400 || !data) {
      window.alert("invalid details");
      console.log("Invalid  details");
    } else {
      dispatch({ type: "USER", payload: true });
      window.alert("login succesful");
      history.push("/");
    }
  };

  return (
    <>
      <h1>Sign In</h1>
      <form method="POST">
        <label htmlFor="email"></label>
        <input
          type="text"
          name="email"
          id="email"
          autoComplete="off"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your Email"
        />
        <label htmlFor="password"></label>
        <input
          type="password"
          name="password"
          id="password"
          autoComplete="off"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Your Password"
        />
        <div className="form-group form-button">
          <input
            type="submit"
            name="login"
            id="login"
            className="form-submit"
            value="Log In"
            onClick={loginUser}
          />
        </div>
      </form>
    </>
  );
};

export default Login;
