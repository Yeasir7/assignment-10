import React, { useContext } from 'react';
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';
import AuthContext from '../../Auth/AuthContext';

const LogIn = () => {
  const { signInUser, signInWithGoogle, signInWithGit } =
    useContext(AuthContext);

  const handleGitLogIn = () => {
    signInWithGit()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
  }

  const handleGoogleLogIn = () => {
    signInWithGoogle()
      .then(result => {
        const user = result.user;
        console.log(user);
      })
      .catch(error => console.error(error) );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signInUser(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        form.reset();
      })
      .catch(error => console.error(error) );

  };
    return (
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Sign in to access your personalized travel dashboard. Discover new
              destinations, manage your favorite spots, and start planning your
              next adventure with Epic Escapes!
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>

            <div className="text-center mb-4">
              have no account?{" "}
              <Link to="/signup" className="text-blue-600 font-bold">
                Sign Up
              </Link>
            </div>

            <div className="flex justify-center mb-5 gap-5">
              <button onClick={handleGoogleLogIn}>
                <FaGoogle className="inline mr-2"></FaGoogle>
              </button>
              <button onClick={handleGitLogIn}>
                <FaGithub className="inline mr-2"></FaGithub>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default LogIn;