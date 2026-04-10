import { useState } from "react";

const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="backdrop-blur-md bg-white/70 border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">

            {/* Logo */}
            <div className="text-2xl font-bold text-indigo-600">
              Shakaet<span className="text-gray-800">Dev</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 font-medium">
              {["Home", "About", "Services", "Projects", "Contact"].map(
                (item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-gray-700 hover:text-indigo-600 transition duration-300 relative group"
                  >
                    {item}
                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-indigo-600 group-hover:w-full transition-all duration-300"></span>
                  </a>
                )
              )}
            </div>

            {/* Button */}
            <div className="hidden md:block">
              <button className="px-5 py-2 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 transition shadow-md">
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setOpen(!open)}>
                <svg
                  className="w-7 h-7 text-gray-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                  />
                </svg>
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden px-4 pb-4 space-y-3 bg-white/90 backdrop-blur-md">
            {["Home", "About", "Services", "Projects", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href="#"
                  className="block text-gray-700 hover:text-indigo-600"
                >
                  {item}
                </a>
              )
            )}
            <button className="w-full mt-2 px-4 py-2 rounded-xl bg-indigo-600 text-white">
              Get Started
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Nav;