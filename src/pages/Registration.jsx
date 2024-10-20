import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./home/smallComponent/Footer";

const Registration = () => {
    const { searchParams } = new URL(document.location);
    const emailValue = searchParams.get("email");
    const [email, setEmail] = useState(emailValue || "");
    const [isFocused, setIsFocused] = useState(false);
    const [password, setPassword] = useState("");

  const handleFocus = () => setIsFocused(true);
  const handleBlur = (e) => {
    if (!e.target.value) {
      setIsFocused(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white w-full">
      {/* Header - Removed fixed positioning */}
      <header className="w-full flex items-center justify-between p-4">
        <Link to={'/'}>
          <img src="/netflix-logo.png" alt="Netflix Logo" className="w-52" />
        </Link>
        <Link to={'/login'}>
          <p className="text-black text-xl hover:underline">Sign in</p>
        </Link>
      </header>

      {/* Content - No top margin needed */}
      <div className="w-full max-w-md p-8 border border-gray-300 rounded-md">

        {/* Step 1 of 3 */}
        <div className="mb-6">
          <p className="text-sm text-gray-600">STEP 1 OF 3</p>
          <h2 className="text-2xl font-bold mt-1">Welcome back!</h2>
          <p className="text-lg">Joining Netflix is easy.</p>
          <p className="text-sm text-gray-500 mt-2">
            Enter your password and you'll be watching in no time.
          </p>
        </div>

        {/* Email Display */}
        <div className="relative mb-6">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={handleFocus}
            onBlur={handleBlur}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <label
            className={`absolute left-4 top-2.5 transition-all duration-300 ease-in-out text-gray-500 ${
              isFocused || email
                ? "-translate-y-5 -translate-x-0 scale-75 mt-2"
                : "translate-y-0 scale-100"
            }`}
          >
            Enter your Email
          </label>
          {!email && (
            <p className="text-red-500 text-sm mt-1">Email is required.</p>
          )}
        </div>

        {/* Password Field */}
        <div className="relative mb-6">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onFocus={handleFocus}
            onBlur={handleBlur}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <label
            className={`absolute left-4 top-2.5 transition-all duration-300 ease-in-out text-gray-500 ${
              isFocused || password
                ? "-translate-y-5 -translate-x-0 scale-75 mt-2"
                : "translate-y-0 scale-100"
            }`}
          >
            Enter your password
          </label>
          {!password && (
            <p className="text-red-500 text-sm mt-1">Password is required.</p>
          )}
        </div>

        {/* Forgot Password */}
        <div className="text-right mb-6">
          <a href="#" className="text-blue-600 text-sm hover:underline">
            Forgot your password?
          </a>
        </div>

        {/* Next Button */}
        <div>
          <button className="w-full py-3 bg-red-600 text-white text-lg rounded-md hover:bg-red-700">
            Next
          </button>
        </div>
      </div>

      {/* Sign In Link */}
      <div className="mt-6 w-full">
        <Footer />
      </div>
    </div>
  );
};

export default Registration;
