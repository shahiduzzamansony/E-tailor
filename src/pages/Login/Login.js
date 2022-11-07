import React from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";

const Login = () => {
  return (
    <div className="hero">
      <div className="hero-content flex">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <button className="btn btn-light">
              <FaGoogle className="mr-3"></FaGoogle>Google Login
            </button>
            <button className="btn btn-light">
              <FaGithub className="mr-3"></FaGithub>Github Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
