import React, { useState, useEffect } from "react";

const Contact = () => {
  //const history = useHistory();
  const [userData, setuserData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

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
      setuserData({
        ...userData,
        name: data.name,
        email: data.email,
        phone: data.phone,
      });

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

  //we are storing data into state
  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setuserData({
      ...userData,
      [name]: value,
    });
  };

  //send the data to backend
  const contactForm = async (e) => {
    e.preventDefault();

    const { name, email, phone, message } = userData;

    const res = await fetch("/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        message,
      }),
    });
    const data = await res.json();

    if (res.status === 400 || !data) {
      console.log("Msg Not Send");
    } else {
      window.alert("Message Sent");
      setuserData({ ...userData, message: "" });
    }
  };

  return (
    <>
      {/* Contact us Form */}
      <h1>Get in Touch by Entering your Message and Details</h1>
      <form method="POST">
        <div>
          <input
            type="text"
            name="name"
            value={userData.name}
            onChange={handleInputs}
            placeholder="Your name"
          />
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleInputs}
            placeholder="Your email"
          />
          <input
            type="number  "
            name="phone"
            value={userData.phone}
            onChange={handleInputs}
            placeholder="Your phone"
          />
        </div>
        <div>
          <textarea
            type="text"
            name="message"
            value={userData.message}
            onChange={handleInputs}
            placeholder="Message"
          ></textarea>
        </div>
        <div className="contact_form_button">
          <button type="submit" value="Log In" onClick={contactForm}>
            Send Message
          </button>
        </div>
      </form>
    </>
  );
};

export default Contact;
