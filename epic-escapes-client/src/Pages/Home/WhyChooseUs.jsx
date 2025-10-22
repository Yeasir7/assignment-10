import React from "react";
import { FaTrophy, FaDollarSign, FaShieldAlt, FaStar } from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <div className="py-16 bg-base-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose Epic Escapes?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We make your travel dreams come true with our exceptional services
            and unforgettable experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="card bg-base-200 shadow-lg hover:shadow-xl transition-shadow">
            <div className="card-body items-center text-center">
              <FaTrophy className="text-5xl text-primary mb-4" />
              <h3 className="card-title text-xl mb-2">Best Destinations</h3>
              <p className="text-gray-600">
                Carefully curated tourist spots that showcase the beauty of
                Bangladesh.
              </p>
            </div>
          </div>

          <div className="card bg-base-200 shadow-lg hover:shadow-xl transition-shadow">
            <div className="card-body items-center text-center">
              <FaDollarSign className="text-5xl text-success mb-4" />
              <h3 className="card-title text-xl mb-2">Affordable Prices</h3>
              <p className="text-gray-600">
                Competitive rates and transparent pricing with no hidden
                charges.
              </p>
            </div>
          </div>

          <div className="card bg-base-200 shadow-lg hover:shadow-xl transition-shadow">
            <div className="card-body items-center text-center">
              <FaShieldAlt className="text-5xl text-info mb-4" />
              <h3 className="card-title text-xl mb-2">Safe & Secure</h3>
              <p className="text-gray-600">
                Your safety is our priority with trusted guides and secure
                bookings.
              </p>
            </div>
          </div>

          <div className="card bg-base-200 shadow-lg hover:shadow-xl transition-shadow">
            <div className="card-body items-center text-center">
              <FaStar className="text-5xl text-warning mb-4" />
              <h3 className="card-title text-xl mb-2">Expert Guidance</h3>
              <p className="text-gray-600">
                Professional team with years of experience in tourism
                management.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
