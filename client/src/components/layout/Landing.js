import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="landingbg">
      <div className="w-100 mb-0 text-center landingbgoverly pt-5 text-light">
        <h1 className="display-4 pt-5 mb-4">
          Join your colleagues, classmates, and friends.
        </h1>
        <p className="lead mb-4">
          Create your profile and Connect with people who can help
        </p>
        <p className="lead">
          <Link className="btn btn-info btn-lg mr-2" to="login" role="button">
            Sign in
          </Link>
          <Link
            className="btn btn-info btn-lg ml-2"
            to="register"
            role="button"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Landing;
