import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";

const Signup = () => {
  const history = useHistory();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    confirmpassword: "",
  });
  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();
    const { name, email, phone, work, password, confirmpassword } = user;
    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        work,
        password,
        confirmpassword,
      }),
    });
    const data = await res.json();
    if (data.status === 422 || !data) {
      window.alert("Invalid Registrtaion");
      console.log("Invalid Registration");
    } else {
      window.alert("Registrtaion Done");
      console.log("Valid Registration");

      history.push("/login");
    }
  };

  return (
    <>
      <h1>SignUp</h1>
      <form method="POST">
        <label htmlFor="name"></label>
        <input
          type="text"
          name="name"
          id="name"
          autoComplete="off"
          value={user.name}
          onChange={handleInputs}
          placeholder="Your Name"
        />
        <label htmlFor="email"></label>
        <input
          type="text"
          name="email"
          id="email"
          autoComplete="off"
          value={user.email}
          onChange={handleInputs}
          placeholder="Your email"
        />
        <label htmlFor="phone"></label>
        <input
          type="text"
          name="phone"
          id="phone"
          autoComplete="off"
          value={user.phone}
          onChange={handleInputs}
          placeholder="Your phone no"
        />
        <label htmlFor="work"></label>
        <input
          type="text"
          name="work"
          id="work"
          autoComplete="off"
          value={user.work}
          onChange={handleInputs}
          placeholder="Your profession"
        />
        <label htmlFor="password"></label>
        <input
          type="password"
          name="password"
          id="password"
          autoComplete="off"
          value={user.password}
          onChange={handleInputs}
          placeholder="Your password"
        />
        <label htmlFor="confirmpassword"></label>
        <input
          type="password"
          name="confirmpassword"
          id="confirmpassword"
          autoComplete="off"
          value={user.confirmpassword}
          onChange={handleInputs}
          placeholder=" confirm your password"
        />

        <div className="form-group form-button">
          <input
            type="submit"
            name="signup"
            id="signup"
            className="form-submit"
            value="register"
            onClick={PostData}
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
