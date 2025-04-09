'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { HiMenu, HiX } from 'react-icons/hi';
import { FaScissors, FaCalendarAlt } from 'react-icons/fa';
import clsx from 'clsx';

interface NavLink {
  name: string;
  href: string;
  icon?: React.ReactNode;
}

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks: NavLink[] = [
    { name: 'שירותים', href: '/services' },
    { name: 'גלריה', href: '/gallery' },
    { name: 'אודות', href: '/about' },
    { name: 'צור קשר', href: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className={clsx(
        'fixed top-0 right-0 left-0 z-50 w-full transition-all duration-300 ease-in-out',
        scrolled
          ? 'bg-white/80 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      )}
      dir="rtl"
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-10">
            <motion.div
              className="flex items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative h-12 w-12 mr-2 bg-primary rounded-full flex items-center justify-center
                shadow-[inset_-2px_-2px_5px_rgba(0,0,0,0.2),_inset_2px_2px_5px_rgba(255,255,255,0.2)]">
                <FaScissors className="text-white text-xl" />
              </div>
              <div className="text-xl font-bold bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                מספרה דלתא
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 space-x-reverse">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative mx-3 py-2 text-gray-700 hover:text-primary transition-colors duration-300 group"
              >
                <span>{link.name}</span>
                <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="/book-appointment">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center px-6 py-2.5 rounded-full bg-primary text-white font-medium
                shadow-[5px_5px_10px_rgba(0,0,0,0.1),_-5px_-5px_10px_rgba(255,255,255,0.1)]
                hover:shadow-[inset_2px_2px_5px_rgba(0,0,0,0.2),_inset_-2px_-2px_5px_rgba(255,255,255,0.1)]
                transition-all duration-300"
                aria-label="קבע תור עכשיו"
              >
                <FaCalendarAlt className="ml-2" />
                קבע תור עכשיו
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-full bg-white/90 backdrop-blur-sm border border-gray-200 shadow-md
              hover:shadow-inner transition-all duration-300"
              aria-label={isOpen ? 'סגור תפריט' : 'פתח תפריט'}
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <HiX className="h-6 w-6 text-primary" />
              ) : (
                <HiMenu className="h-6 w-6 text-primary" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-white/90 backdrop-blur-md border-t border-gray-100"
      >
        <div className="container mx-auto px-4 py-3">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="py-2 px-4 rounded-lg text-gray-700 hover:text-primary hover:bg-gray-50/80
                transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/book-appointment"
              className="flex items-center justify-center py-3 px-4 mt-2 rounded-full
              bg-primary text-white font-medium shadow-md
              hover:shadow-inner transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              <FaCalendarAlt className="ml-2" />
              קבע תור עכשיו
            </Link>
          </nav>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;