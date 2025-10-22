import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaCompass } from "react-icons/fa";

const Error404 = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="text-center px-4">
        {/* Large 404 Text */}
        <div className="mb-8">
          <h1 className="text-[150px] md:text-[200px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
            404
          </h1>
        </div>

        {/* Error Message */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
            Oops! Lost in the Journey
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-md mx-auto">
            Looks like this destination doesn't exist. Let's get you back on
            track!
          </p>
        </div>

        {/* Illustration (Optional - you can add an image here) */}
        <div className="mb-8">
          <FaCompass className="text-8xl text-blue-500 mx-auto animate-spin-slow" />
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/home" className="btn btn-primary btn-lg gap-2">
            <FaHome /> Back to Home
          </Link>
          <Link to="/login" className="btn btn-outline btn-lg">
            Login
          </Link>
        </div>

        {/* Helpful Links */}
        <div className="mt-12 text-gray-600">
          <p className="mb-2">Popular Destinations:</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/home" className="link link-hover">
              Home
            </Link>
            <Link to="/all-spots" className="link link-hover">
              All Tourist Spots
            </Link>
            <Link to="/login" className="link link-hover">
              Login
            </Link>
            <Link to="/signup" className="link link-hover">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error404;
