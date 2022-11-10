import React, { useContext } from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Authprovider/AuthProvider";
import useTitle from "../../hooks/UseTitle";

const Login = () => {
  const { emailSignin, googleSignin, githubSignin, loading } =
    useContext(AuthContext);
  useTitle("login");
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  if (loading) {
    return (
      <button type="button" className="bg-indigo-500 ..." disabled>
        <svg
          className="animate-spin h-5 w-5 mr-3 ..."
          viewBox="0 0 24 24"
        ></svg>
        Processing...
      </button>
    );
  }

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    emailSignin(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        const currentUser = { email: user.email };
        //get jwt token
        fetch(
          "https://service-review-assignment-server-shahiduzzamansony.vercel.app/jwt",
          {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(currentUser),
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            localStorage.setItem("token", data.token);
            navigate(from, { replace: true });
          });
      })
      .catch((err) => console.error(err));
  };
  const handleGooglein = () => {
    googleSignin()
      .then(() => {
        navigate(from, { replace: true });
      })
      .catch((err) => console.error(err));
  };
  const handleGithubin = () => {
    githubSignin()
      .then(() => {
        navigate(from, { replace: true });
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="hero">
      <div className="hero-content flex">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body py-3">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <button onClick={handleGooglein} className="btn btn-light my-2">
              <FaGoogle className="mr-3"></FaGoogle>Google Login
            </button>
            <button onClick={handleGithubin} className="btn btn-light">
              <FaGithub className="mr-3"></FaGithub>Github Login
            </button>
          </form>

          <p className="text-center">
            Don't have any account?
            <Link className="text-orange-600" to="/register">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
