import React from "react";

type Props = {};

// components/Footer.tsx

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">Your Company</h2>
            <p className="mt-2 text-gray-400">
              Building awesome things together!
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
            <ul>
              <li className="mb-2">
                <a
                  href="mailto:info@example.com"
                  className="hover:text-gray-300 transition duration-300"
                >
                  Email: info@example.com
                </a>
              </li>
              <li>
                <span className="hover:text-gray-300 transition duration-300">
                  Phone: +1 (123) 456-7890
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="hover:text-gray-300 transition duration-300"
              >
                Twitter
              </a>
              <a
                href="#"
                className="hover:text-gray-300 transition duration-300"
              >
                Facebook
              </a>
              <a
                href="#"
                className="hover:text-gray-300 transition duration-300"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
