import React from "react";
import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div id="notfound">
      <div className="notfound">
        <div className="notfound-404">
          <h1>404</h1>
        </div>
        <h2>we are sorry, page not found</h2>
        <p className="mb-5">
          The page you are looking for might have been removed or has it's name
          changed or is temporarily unavailable.
        </p>
        <NavLink to="/" className="mt-2">
          Back to HomePage
        </NavLink>
      </div>
    </div>
  );
};

export default ErrorPage;
