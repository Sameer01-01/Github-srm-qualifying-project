import { useState } from 'react';
import tufnav from '../assets/tufnav.png';
import { FiMenu, FiX } from 'react-icons/fi'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black p-4">
      <div className="container mx-auto flex justify-between items-center">
       
        <div className="flex-shrink-0">
          <img src={tufnav} alt="Logo" className="h-10" />
        </div>

        
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
          </button>
        </div>

        {/* Right side (Buttons) */}
        <div className={`lg:flex space-x-4 ${isOpen ? 'block' : 'hidden'} lg:block`}>
          <button className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition duration-300 border-2 border-gray-700">
            Get 1:1 Mentorship
          </button>
          <button className="bg-rose-500 text-white px-4 py-2 rounded-lg hover:bg-rose-400 transition duration-300 font-semibold border-red-700 border-2">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
