import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      {/* Container for all content */}
      <div className="container mx-auto text-center sm:text-left">
        {/* Support Contact */}
        <p className="mb-6 text-sm">
          Questions? Call{" "}
          <a href="tel:000-800-919-1694" className="underline hover:no-underline">
            000-800-919-1694
          </a>
        </p>

        {/* Footer Links */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
          {/* Column 1 */}
          <div>
            <ul>
              <li className="mb-2">
                <a href="/" className="hover:underline">
                  FAQ
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="hover:underline">
                  Investor Relations
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="hover:underline">
                  Privacy
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="hover:underline">
                  Speed Test
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <ul>
              <li className="mb-2">
                <a href="/" className="hover:underline">
                  Help Centre
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="hover:underline">
                  Jobs
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="hover:underline">
                  Cookie Preferences
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="hover:underline">
                  Legal Notices
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <ul>
              <li className="mb-2">
                <a href="/" className="hover:underline">
                  Account
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="hover:underline">
                  Ways to Watch
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="hover:underline">
                  Corporate Information
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="hover:underline">
                  Only on Netflix
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <ul>
              <li className="mb-2">
                <a href="/" className="hover:underline">
                  Media Centre
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="hover:underline">
                  Terms of Use
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="hover:underline">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Language selection and footer bottom */}
        <div className="mt-6">
          <button className="border border-gray-400 px-4 py-2 rounded-md text-sm hover:bg-gray-700">
            <span role="img" aria-label="Language">
              🌐
            </span>{" "}
            English
          </button>
        </div>

        <div className="mt-6 text-sm">
          <p>Netflix India</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
