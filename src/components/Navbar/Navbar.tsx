
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import {useEffect, useState} from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', to: 'about' },
    { name: 'Tokenomics', to: 'tokenomics' },
    { name: 'Roadmap', to: 'roadmap' },
    { name: 'Whitepaper', to: 'whitepaper' },
  ];

  const downloadWhitepaper = () => {
    // Replace with actual whitepaper URL
    window.open('/whitepaper.pdf', '_blank');
  };

  const downloadTokenomics = () => {
    // Replace with actual tokenomics URL
    window.open('/tokenomics.pdf', '_blank');
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/90 backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="text-2xl font-bold neon-text"
          >
            SYNAPSE A.I
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                smooth={true}
                duration={500}
                className="cursor-pointer hover:neon-text transition-all duration-300"
                onClick={() => {
                  if (item.name === 'Whitepaper') downloadWhitepaper();
                  if (item.name === 'Tokenomics') downloadTokenomics();
                }}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-black/95 absolute top-20 left-0 w-full py-4"
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                smooth={true}
                duration={500}
                className="block px-4 py-2 text-center hover:neon-text transition-all duration-300"
                onClick={() => {
                  setIsOpen(false);
                  if (item.name === 'Whitepaper') downloadWhitepaper();
                  if (item.name === 'Tokenomics') downloadTokenomics();
                }}
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};