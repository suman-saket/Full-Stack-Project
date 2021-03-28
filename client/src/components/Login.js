import React from "react";

const Login = () => {
  return (
    <>
      <h1>Sign In</h1>
      <form>
        <label htmlFor="email"></label>
        <input
          type="text"
          name="email"
          id="email"
          autoComplete="off"
          placeholder="Your Email"
        />
        <label htmlFor="password"></label>
        <input
          type="password"
          name="password"
          id="password"
          autoComplete="off"
          placeholder="Your Password"
        />
        <div className="form-group form-button">
          <input
            type="submit"
            name="login"
            id="login"
            className="form-submit"
            value="Sign in"
          />
        </div>
      </form>
    </>
  );
};

export default Login;
