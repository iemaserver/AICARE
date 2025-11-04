import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedSubmenu, setExpandedSubmenu] = useState(null);

  const toggleSubmenu = (menuName) => {
    setExpandedSubmenu(expandedSubmenu === menuName ? null : menuName);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navItems = [
    { label: 'HOME', path: '/' },
    {
      label: 'ABOUT US',
      subItems: [
        { label: 'University Of Engineering and Management Kolkata', path: '/about/uem' },
        { label: 'Centre of Excellence on Renewable Energy, UEMK', path: '/about/coere' },
        { label: 'Centre of Excellence on Astronomical Studies, UEMK', path: '/about/coea' }
      ]
    },
    {
      label: 'CALL FOR PAPERS',
      subItems: [
        { label: 'Track Of Conference', path: '/conference/tracks' },
        { label: 'Submission Guidelines', path: '/conference/submission-guidelines' },
        { label: 'Presentation Guidelines', path: '/conference/call-papers' }
      ]
    },
    { label: 'REGISTRATION', path: '/registration' },
    {
      label: 'COMMITTEE',
      subItems: [
        { label: 'Organizing Committee', path: '/committee/organizing' },
        { label: 'National Advisory Committee', path: '/committee/national' },
        { label: 'International Advisory Committee', path: '/committee/international' },
        { label: 'Technical Program Committee', path: '/committee/technical' },
        { label: 'Student Committee', path: '/committee/student' }
      ]
    },
    { label: 'KEY NOTE SPEAKERS', path: '/speakers' },
    { label: 'VENUE', path: '/venue' },
    { label: 'CONTACT US', path: '/contact' }
  ];

  return (
    <>

      {/* Desktop Navbar */}
      <nav className="hidden lg:block bg-slate-100 fixed top-10 left-0 right-0 lg:bg-slate-200 w-5/6 shadow-xl z-50 text-white rounded-2xl mx-auto mb-2">
        <div className="relative flex justify-between lg:justify-center py-4 px-6">
          {/* Desktop Menu */}
          <div className="hidden lg:flex lg:justify-between lg:w-5/6 lg:items-center lg:space-x-6">
          {navItems.map((item, index) => (
            <div key={index} className="relative group">
              {item.path ? (
                <Link to={item.path} className="nav-link text-blue-600 py-2 uppercase hover:text-blue-300 transition">
                  {item.label}
                </Link>
              ) : (
                <a href="#" className="nav-link text-blue-600 py-2 uppercase hover:text-blue-300 transition">
                  {item.label}
                </a>
              )}
              {item.subItems && (
                <div className="absolute left-1/2 transform -translate-x-1/2 hidden group-hover:block bg-white text-black w-56 rounded-lg shadow-lg">
                  {item.subItems.map((subItem, subIndex) => (
                    <Link key={subIndex} to={subItem.path} className="block px-4 py-3 hover:bg-blue-100">
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          </div>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-gradient-to-r from-slate-100 to-slate-200 w-full shadow-2xl z-50 lg:hidden border-b-2 border-blue-300">
        <div className="flex items-center justify-between px-4 py-4">
          {/* Mobile Logos */}
          <div className="flex items-center space-x-3">
            <img src="/assets/IEM_Logo.png" className="w-10 h-10 drop-shadow" alt="IEM Logo" />
            <div className="h-8 w-px bg-blue-400"></div>
            <img src="/assets/UEM_Logo.png" className="w-10 h-10 drop-shadow" alt="UEM Logo" />
          </div>

          {/* Menu Button */}
          <button
            className="focus:outline-none p-2 hover:bg-blue-200 rounded-lg transition-colors duration-200"
            onClick={toggleMobileMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-blue-600 font-bold"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={mobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="bg-gradient-to-b from-blue-50 to-slate-100 border-t-2 border-blue-300 max-h-screen overflow-y-auto shadow-inner animate-in slide-in-from-top duration-300">
            {navItems.map((item, index) => (
              <div key={index}>
                {item.path ? (
                  <Link
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-4 text-sm uppercase text-blue-600 hover:bg-blue-50 border-b border-gray-150 font-semibold text-center transition-colors duration-150 active:bg-blue-100"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <>
                    <button
                      type="button"
                      onClick={() => toggleSubmenu(item.label)}
                      className="w-full text-center px-4 py-4 text-sm uppercase text-blue-600 hover:bg-blue-50 border-b border-gray-150 font-semibold flex items-center justify-center gap-2 transition-colors duration-150 active:bg-blue-100"
                    >
                      {item.label}
                      <span className={`text-lg transition-transform ${expandedSubmenu === item.label ? 'rotate-180' : ''}`}>
                        ▼
                      </span>
                    </button>
                    {expandedSubmenu === item.label && (
                      <div className="bg-gradient-to-b from-blue-50 to-gray-100">
                        {item.subItems.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            to={subItem.path}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block px-8 py-3 text-xs text-gray-700 hover:bg-blue-100 hover:text-blue-700 border-b border-blue-200 transition-colors duration-150 active:bg-blue-200 font-medium"
                          >
                            → {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
