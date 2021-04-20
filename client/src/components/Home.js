import React, { useState, useEffect } from "react";

const Home = () => {
  const [userName, setuserName] = useState("");
  const [show, setShow] = useState(false);

  const userHomePage = async () => {
    try {
      const res = await fetch("/getdata", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      console.log(data);
      setuserName(data.name);
      setShow(true);
    } catch (err) {
      console.log(err);
      //history.push("/login");
    }
  };

  useEffect(() => {
    userHomePage();
  }, []);
  return (
    <div>
      <p className="pt-5">Welcome</p>
      <h1>{userName}</h1>
      <h2>{show ? "Happy to seew you Back" : "It is a Full Stack Project"}</h2>
    </div>
  );
};

export default Home;
