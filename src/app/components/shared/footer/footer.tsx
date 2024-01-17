// components/Footer.tsx

import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Joota Woala</h2>
            <p className="text-gray-400">
            Joota Woala: Elevate your style with our curated footwear collection. Comfort meets fashion in every step. Stay connected for exclusive offers and updates. Walk in style!
            </p>
          </div>

          {/* Part 2 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
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

          {/* Part 3 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
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

          {/* Part 4 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
            <form>
              <input
                type="email"
                placeholder="Your email"
                className="bg-gray-700 text-white p-2 rounded focus:outline-none focus:ring focus:border-blue-300"
              />
              <button
                type="submit"
                className="mt-2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none focus:ring focus:border-blue-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
