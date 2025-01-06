import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed top-0 w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img src={require('../assets/logo-ytss.png')} alt="YouthTigerSoccerSchool" className="h-12 w-12" />
              <span className="text-[#e04a30] text-xl font-bold">Youth Tiger Soccer School</span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="hover:text-[#ffb784] text-[#f88f4d] px-3 py-2">Beranda</Link>
            <Link to="/about" className="hover:text-[#ffb784] text-[#f88f4d] px-3 py-2">Tentang</Link>
            <Link to="/contact" className="hover:text-[#ffb784] text-[#f88f4d] px-3 py-2">Kontak</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#e04a30] hover:text-[#ffb784] focus:outline-none"
            >
              {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to="/" className="block hover:text-[#ffb784] text-[#f88f4d] px-3 py-2">Beranda</Link>
              <Link to="/about" className="block hover:text-[#ffb784] text-[#f88f4d] px-3 py-2">Tentang</Link>
              <Link to="/contact" className="block hover:text-[#ffb784] text-[#f88f4d] px-3 py-2">Kontak</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
