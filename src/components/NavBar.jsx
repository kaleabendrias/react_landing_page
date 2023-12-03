import { Link } from "react-scroll";
import { useState, useEffect } from "react";

const NavBar = () => {

    const [theme, setTheme] = useState('light');

    useEffect(() => {
        if(theme === 'dark') {
            document.documentElement.classList.add('dark');
        }
        else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme])

    const handleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }

  return (
    <header className="fixed top-0 w-full bg-slate-700 text-white p-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center md:space-x-4 mb-0 md:mb-4">
          <div className="text-2xl font-bold">Travel Kenya</div>
        </div>
        <div className="flex items-center space-x-2 md:space-x-9">
          <nav className="space-x-2 md:flex md:space-x-4">
            <Link
              to="body"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="hover:text-gray-300"
            >
              Home
            </Link>
            
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="hover:text-gray-300"
            >
              About
            </Link>
          </nav>

          <button className="dark:bg-slate-800 rounded-lg px-2 py-2 ring-1 ring-slate-900/5 shadow-xl" onClick={handleTheme}>
            Dark Mode
          </button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
