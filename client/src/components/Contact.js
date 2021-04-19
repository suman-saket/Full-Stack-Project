import React, { useState, useEffect } from "react";

const Contact = () => {
  //const history = useHistory();
  const [userData, setuserData] = useState({});

  const userContact = async () => {
    try {
      const res = await fetch("/getdata", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
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
      //history.push("/login");
    }
  };

  useEffect(() => {
    userContact();
  }, []);
  return (
    <>
      <h1>this is contact page</h1>
      <p>{userData.name}</p>
      <p>{userData.email}</p>
      <p>{userData.phone}</p>
    </>
  );
};

export default Contact;
