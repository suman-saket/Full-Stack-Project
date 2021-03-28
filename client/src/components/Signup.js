import React from "react";
import { NavLink } from "react-router-dom";

const Signup = () => {
  return (
    <>
      <h1>SignUp</h1>
      <form>
        <label htmlFor="name"></label>
        <input
          type="text"
          name="name"
          id="name"
          autoComplete="off"
          placeholder="Your Name"
        />
        <label htmlFor="email"></label>
        <input
          type="text"
          name="email"
          id="email"
          autoComplete="off"
          placeholder="Your email"
        />
        <label htmlFor="phone"></label>
        <input
          type="text"
          name="phone"
          id="phone"
          autoComplete="off"
          placeholder="Your phone no"
        />
        <label htmlFor="work"></label>
        <input
          type="text"
          name="work"
          id="work"
          autoComplete="off"
          placeholder="Your profession"
        />
        <label htmlFor="password"></label>
        <input
          type="password"
          name="password"
          id="password"
          autoComplete="off"
          placeholder="Your password"
        />
        <label htmlFor="confirmpassword"></label>
        <input
          type="password"
          name="confirmpassword"
          id="confirmpassword"
          autoComplete="off"
          placeholder=" confirm your password"
        />

        <div className="form-group form-button">
          <input
            type="submit"
            name="signup"
            id="signup"
            className="form-submit"
            value="register"
          />
        </div>
      </form>
      <div>
        <NavLink to="/login">I am alreday registered</NavLink>
      </div>
    </>
  );
};

export default Signup;
