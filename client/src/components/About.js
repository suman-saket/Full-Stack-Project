import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const About = () => {
  const history = useHistory();
  const [userData, setuserData] = useState({});

  const callAboutPage = async () => {
    try {
      const res = await fetch("/about", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
      console.log(data);
      setuserData(data);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      history.push("/login");
    }
  };

  useEffect(() => {
    callAboutPage();
  }, []);

  return (
    <div>
      <h3>{userData.name}</h3>
      <p>{userData.work}</p>
      <p>{userData.email}</p>
      <p>{userData.phone}</p>
      <p>{userData.profession}</p>
    </div>
  );
};

export default About;
