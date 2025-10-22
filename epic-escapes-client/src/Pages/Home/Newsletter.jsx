import React from "react";

const Newsletter = () => {
  return (
    <div className="bg-base-200 py-16">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Subscribe to Our Newsletter
        </h2>
        <p className="text-lg mb-8">
          Get the latest travel tips, exclusive deals, and destination guides
          delivered to your inbox!
        </p>

        <form className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="input input-bordered w-full"
            required
          />
          <button type="submit" className="btn btn-primary">
            Subscribe
          </button>
        </form>

        <p className="text-sm text-gray-500 mt-4">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </div>
  );
};

export default Newsletter;
