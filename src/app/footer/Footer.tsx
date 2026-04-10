import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white">
            Shakaet<span className="text-indigo-500">Dev</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-gray-400">
            We build modern, fast, and scalable web applications using React,
            Node.js, and cutting-edge technologies.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {["Home", "About", "Services", "Projects", "Contact"].map(
              (item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-indigo-400 transition"
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-semibold mb-4">Services</h3>
          <ul className="space-y-2">
            {[
              "Web Development",
              "UI/UX Design",
              "Backend API",
              "Mobile Apps",
              "Cloud Deployment",
            ].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-indigo-400 transition">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-white font-semibold mb-4">Newsletter</h3>
          <p className="text-sm text-gray-400 mb-3">
            Subscribe to get latest updates.
          </p>

          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Enter email"
              className="w-full px-3 py-2 rounded-lg bg-gray-800 text-white focus:outline-none"
            />
            <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-12 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} ShakaetDev. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;