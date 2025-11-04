import React from 'react';

const Venue = () => {
  return (
    <div className="min-h-screen bg-cover bg-center bg-fixed mt-8 lg:mt-20 pb-20" style={{ backgroundImage: "url('/assets/AboutBg.png')" }}>
      {/* Hero Section */}
      <div className="relative h-56 sm:h-64 md:h-72 bg-cover bg-center mb-8" style={{ backgroundImage: "url('/assets/3391556.jpg')" }}>
        <div className="absolute inset-0 bg-blue-800 bg-opacity-60 flex items-center justify-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center px-4">Conference Venue</h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-3 sm:px-4 py-6 sm:py-8">
        {/* Venue Address Section */}
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-800 mb-6 sm:mb-8 text-center">Venue Address</h2>
          
          <div className="grid md:grid-cols-2 gap-4 md:gap-6 items-start">
            {/* Address Box */}
            <div className="bg-white rounded-lg shadow-lg p-5 sm:p-6 border-l-4 border-blue-600 hover:shadow-xl transition-shadow">
              <p className="text-sm sm:text-base font-bold text-gray-800 mb-3 leading-relaxed">
                University Area, Plot No. III – B/5, New Town, Action Area – III,<br />
                Kolkata, West Bengal 700160
              </p>
              
              <p className="text-sm sm:text-base font-semibold text-blue-700 mb-2">Transportation & Landmarks:</p>
              <ul className="list-disc list-inside mb-4 text-xs sm:text-sm text-gray-700 space-y-0.5">
                <li>Karigari Bhawan, Opposite Uniworld City</li>
                <li>Biswabangla Gate (3 km)</li>
                <li>Sec V Metro (9 km)</li>
                <li>Airport (13 km)</li>
              </ul>
              
              <p className="text-sm sm:text-base font-semibold text-blue-700 mb-2">Contact:</p>
              <div className="text-xs sm:text-sm text-gray-700 mb-3 space-y-1">
                <p><strong>Phone:</strong> <a href="tel:08010700500" className="text-blue-600 hover:underline">08010700500</a></p>
                <p><strong>Email:</strong> <a href="mailto:aicare@uem.edu.in" className="text-blue-600 hover:underline">aicare@uem.edu.in</a></p>
              </div>
              
              <a 
                href="https://www.google.com/maps/place/University+of+Engineering+%26+Management,+Kolkata+(UEM)/@22.5599202,88.4873265,17z/data=!3m1!4b1!4m6!3m5!1s0x3a020b267a3cdc13:0xb3b21d652126f40!8m2!3d22.5599202!4d88.4899014" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 px-4 py-1.5 sm:py-2 text-xs sm:text-sm bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
              >
                📍 View on Google Maps
              </a>
            </div>
            
            {/* Map Section */}
            <div className="rounded-lg overflow-hidden shadow-lg h-64 sm:h-72 md:h-80">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.9140939323957!2d88.4873265!3d22.5599202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a020b267a3cdc13%3A0xb3b21d652126f40!2sUniversity%20of%20Engineering%20%26%20Management%2C%20Kolkata%20(UEM)!5e0!3m2!1sen!2sin!4v1667123456789!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy"
                title="UEM Venue Location"
              >
              </iframe>
            </div>
          </div>
        </div>
        
        {/* Venue Gallery Section */}
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-800 mb-6 sm:mb-8 text-center">Venue Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            <img 
              src="/assets/uem image.jpg" 
              alt="Venue Inside" 
              className="w-full h-40 sm:h-48 object-cover rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
            />
            <img 
              src="/assets/UEMK_Building_Final6.jpg" 
              alt="Venue Entrance" 
              className="w-full h-40 sm:h-48 object-cover rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
            />
            <img 
              src="/assets/UEMK_Building_Final1.jpg" 
              alt="Conference Hall" 
              className="w-full h-40 sm:h-48 object-cover rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
            />
          </div>
        </div>
      </div>

      {/* Yellow Marquee */}
      <marquee
        behavior=""
        direction="left"
        className="fixed bottom-0 left-0 right-0 bg-[#FFFF00] h-8 lg:h-10 p-1 z-50 text-black text-xs lg:text-lg font-bold whitespace-nowrap overflow-hidden"
      >
        <span className="animate-pulse text-red-600 font-extrabold inline-block">
          AICARE 2025 Topics (but not limited to):
        </span>
        <span className="inline-block ml-2">Applications of AI in Computing, UAV Networks, Astronomy, Renewable Energy.</span>
        <a href="/conference/tracks" className="text-red-600 underline font-extrabold animate-pulse ml-2 inline-block">
          🚀 View Tracks
        </a>
      </marquee>
    </div>
  );
};

export default Venue;
