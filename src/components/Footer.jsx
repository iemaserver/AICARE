import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-700 w-screen text-white py-6 shadow-lg border-t border-blue-500" style={{ marginBottom: '40px', width: '100vw', marginLeft: 'calc(-50vw + 50%)' }}>
      <div className="w-full px-4 lg:px-8">
        {/* Top Section - Left and Right */}
        <div className="flex flex-col lg:flex-row justify-between mb-2">
          {/* Left - Conference Details */}
          <div className="lg:w-1/2">
            <h3 className="text-xl lg:text-2xl font-bold mb-1">AICARE 2025</h3>
            <p className="text-blue-100 text-xs lg:text-sm mb-2">
              1st International Conference on Artificial Intelligence for Computing, Astronomy and Renewable Energy
            </p>
            <div className="text-blue-100 text-xs">
              <p className="mb-1"><span className="font-semibold">Quick Links:</span> <a href="/speakers" className="hover:text-white">Speakers</a> | <a href="/registration" className="hover:text-white">Registration</a> | <a href="/conference/tracks" className="hover:text-white">Tracks</a> | <a href="/contact" className="hover:text-white">Contact</a></p>
            </div>
          </div>

          {/* Right - College Details */}
          <div className="lg:w-1/2 lg:text-right text-blue-100 text-xs mt-2 lg:mt-0">
            <p className="font-semibold text-sm mb-1">University of Engineering and Management</p>
            <p className="mb-1">Kolkata, India</p>
            <p className="mb-1"><span className="font-semibold">Email:</span> aicare2025@uem.edu.in</p>
            <p className="mb-1"><span className="font-semibold">Phone:</span> +91-8010700500</p>
            <p className="text-xs"><span className="font-semibold">Organized by:</span> Centre of Excellence on Renewable Energy & Centre of Excellence in Astronomical Studies</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-blue-500 pt-2 text-blue-200 text-xs text-center">
          <p>© 2025 University of Engineering and Management. All rights reserved. | Privacy Policy | Terms & Conditions</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
