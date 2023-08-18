import React, { useState } from "react";
// import signupItems from "./signupItems";
import { Outlet, Link } from "react-router-dom";
import "./SignupForm.css";

export default function SignupForm() {
  // const [fullName, setFullName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [cPassword, setCPassword] = useState("");

  const handleSubmit = (e) => {
    alert("Form submited");
    // prevent page reload
    e.preventDefault();
  };

  const [user, setUser] = useState({
    fullName: "",
    email: "",
    password: "",
    cPassword: "",
  });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="signup-container">
          <div className="signup-form">
            <input
              className="signup-input"
              placeholder="Enter Fullname"
              type="text"
              name="fullName"
              autoComplete="off"
              // value={fullName}
              // onChange={(e) => setFullName(e.target.value)}
              value={user.fullName}
              onChange={(e) => setUser({ ...user, fullName: e.target.value })}
              required
            />

            <input
              className="signup-input"
              placeholder="Enter Email"
              type="email"
              name="email"
              autoComplete="off"
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              required
            />

            <input
              className="signup-input"
              placeholder="Enter Password"
              type="password"
              name="password"
              autoComplete="off"
              // value={password}
              // onChange={(e) => setPassword(e.target.value)}
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              required
            />

            <input
              className="signup-input"
              placeholder="Enter Confirm Password"
              type="password"
              name="cpassword"
              autoComplete="off"
              // value={cPassword}
              // onChange={(e) => setCPassword(e.target.value)}
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              required
            />

            <Link className="signup-button" type="button" to="/loginform">
              Signup
            </Link>

            <Link className="signup-button1" type="button" to="/loginform">
              already have an account? login
            </Link>
          </div>
        </div>
      </form>
      <Outlet />
    </div>
  );
}
