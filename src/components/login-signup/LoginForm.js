import React, { useState } from "react";
import "./LoginForm.css";
import { Outlet, Link } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function LoginForm() {
  const onFormSubmit = (e) => {
    alert("logged in");
    // prevent page reload
    e.preventDefault();
  };

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { register, handleSubmit } = useForm();

  return (
    <>
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <div className="login-container">
          <div className="login-form">
            <input
              className="login-input"
              placeholder="Enter Email"
              type="email"
              name="email"
              autoComplete="off"
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
              value={user.email}
              {...register("user.email", {
                required: true,
                onChange: (e) => setUser({ ...user, email: e.target.value }),
              })}
            />

            <input
              className="login-input"
              placeholder="Enter Password"
              type="password"
              name="password"
              autoComplete="off"
              // value={password}
              // onChange={(e) => setPassword(e.target.value)}
              value={user.password}
              {...register("user.password", {
                required: true,
                onChange: (e) => setUser({ ...user, password: e.target.value }),
              })}
            />

            <Link type="button" className="login-button" to="/">
              Login
            </Link>

            <Link className="login-button1" type="button" to="/signupform">
              don't have an account? signup
            </Link>
          </div>
        </div>
      </form>
      <Outlet />
    </>
  );
}
