import React, { useState, useEffect } from 'react';

const StudentCommittee = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentIEEESlide, setCurrentIEEESlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isAutoPlayIEEE, setIsAutoPlayIEEE] = useState(true);

  const organizingMembers = [
    { name: 'Angshuman Rakshit', department: 'CST Department, UEMK', role: 'Student Coordinator', image: '/assets/angshuman.png' },
    { name: 'Pritam Das', department: 'CSIT Department, UEMK', role: 'Student Coordinator', image: '/assets/pritam.jpg' },
    { name: 'Priyanka Ghosh', department: 'CST Department, UEMK', role: 'Student Coordinator', image: '/assets/priyanka.jpg' },
    { name: 'Sagnik Dutta', department: 'CST Department, UEMK', role: 'Student Coordinator', image: '/assets/sagnik.jpg' },
    { name: 'Sourjya Mitra', department: 'CST Department, UEMK', role: 'Student Coordinator', image: '/assets/sourjyo.jpg' },
    { name: 'Swastika Dey', department: 'CST Department, UEMK', role: 'Student Coordinator', image: '/assets/swastika.jpg' }
  ];

  const ieeeMembers = [
    { name: 'Amitabh Daripa', department: 'CSE (IOT) Department, UEMK', role: 'IEEE Executive Member', image: '/assets/Amitabh.jpg' },
    { name: 'Angshuman Rakshit', department: 'CST Department, UEMK', role: 'IEEE Executive Member', image: '/assets/angshuman.png' },
    { name: 'Ankush Dutta', department: 'CSE (AI & ML) Department, UEMK', role: 'IEEE Executive Member', image: '/assets/Ankush.png' },
    { name: 'Anusua Ghosh', department: 'CSIT Department, UEMK', role: 'IEEE Executive Member', image: '/assets/Anusua.jpg' },
    { name: 'Shubhodip Pal', department: 'CSE Department, UEMK', role: 'IEEE Executive Member', image: '/assets/Shubhodip.png' }
  ];

  // Auto-slide functionality for Organizing Members
  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % organizingMembers.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlay, organizingMembers.length]);

  // Auto-slide functionality for IEEE Members
  useEffect(() => {
    if (!isAutoPlayIEEE) return;
    const interval = setInterval(() => {
      setCurrentIEEESlide((prev) => (prev + 1) % ieeeMembers.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlayIEEE, ieeeMembers.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % organizingMembers.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + organizingMembers.length) % organizingMembers.length);
  };

  const nextIEEESlide = () => {
    setCurrentIEEESlide((prev) => (prev + 1) % ieeeMembers.length);
  };

  const prevIEEESlide = () => {
    setCurrentIEEESlide((prev) => (prev - 1 + ieeeMembers.length) % ieeeMembers.length);
  };

  const CarouselCard = ({ member, index, position }) => {
    // Calculate position for 3 cards on mobile (small + blur), 3 on desktop (normal)
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    
    let translateX = 0;
    let opacity = 1;
    let scale = 0.75;
    let blur = 0;
    
    if (isMobile) {
      // Mobile: Show 3 cards with center focused
      if (position === 0) {
        translateX = 0;
        opacity = 1;
        scale = 1;
        blur = 0;
      } else if (position === 1) {
        translateX = 110;
        opacity = 0.7;
        scale = 0.75;
        blur = 3;
      } else if (position === -1) {
        translateX = -110;
        opacity = 0.7;
        scale = 0.75;
        blur = 3;
      } else {
        opacity = 0;
        scale = 0;
        blur = 0;
      }
    } else {
      // Desktop: Show center and 1 on each side (normal size)
      if (position === 0) {
        translateX = 0;
        opacity = 1;
        scale = 1;
        blur = 0;
      } else if (position === 1) {
        translateX = 320;
        opacity = 0.6;
        scale = 0.85;
        blur = 0;
      } else if (position === -1) {
        translateX = -320;
        opacity = 0.6;
        scale = 0.85;
        blur = 0;
      } else {
        opacity = 0;
        scale = 0;
        blur = 0;
      }
    }
    
    return (
      <div className={`absolute top-1/2 left-1/2 -translate-y-1/2 transition-all duration-700 ease-out`}
        style={{
          transform: `translate(calc(-50% + ${translateX}px), -50%) scale(${scale})`,
          opacity: opacity,
          zIndex: position === 0 ? 10 : 5,
          filter: `blur(${blur}px)`
        }}
      >
        <div className="flex justify-center">
          <div className="bg-white rounded-xl shadow-2xl overflow-hidden w-56 sm:w-64 md:w-80">
            {/* Blue Header */}
            <div className="h-16 sm:h-20 md:h-24 bg-gradient-to-r from-blue-600 to-blue-700"></div>
            
            {/* Profile Picture */}
            <div className="relative flex justify-center -mt-8 sm:-mt-10 md:-mt-12 mb-2 sm:mb-3 md:mb-4">
              <div className="w-24 sm:w-28 md:w-32 h-24 sm:h-28 md:h-32 rounded-full border-3 sm:border-4 border-white shadow-lg overflow-hidden bg-gradient-to-br from-cyan-300 to-purple-300 flex items-center justify-center">
                {member.image ? (
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-3xl sm:text-4xl md:text-5xl">👤</span>
                )}
              </div>
            </div>
            
            {/* Content */}
            <div className="text-center px-3 sm:px-4 pb-3 sm:pb-4 md:pb-6">
              <h3 className="text-sm sm:text-base md:text-lg font-bold text-blue-900 mb-0.5 sm:mb-1">{member.name}</h3>
              <p className="text-xs sm:text-sm font-semibold text-blue-700">{member.role}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const MemberCard = ({ member, isOrganizing }) => (
    <div className="bg-gradient-to-br from-white to-blue-50 shadow-md rounded-lg p-4 flex items-center text-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:from-blue-50 hover:to-purple-50 border border-blue-100">
      <div className="w-full flex flex-col items-center">
        {member.image ? (
          <img 
            src={member.image} 
            alt={member.name}
            className="w-20 h-20 object-cover rounded-full border-4 border-blue-600 mb-2"
          />
        ) : (
          <div className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-2"></div>
        )}
        <p className="text-blue-900 font-bold text-sm md:text-base mb-0.5 hover:text-purple-600 transition-colors">{member.name}</p>
        {isOrganizing && <p className="text-gray-700 text-xs font-semibold bg-blue-100 bg-opacity-50 px-2 py-0.5 rounded-full">{member.role}</p>}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-cover bg-center bg-fixed mt-8 lg:mt-20 pb-20" style={{ backgroundImage: "url('/assets/AboutBg.png')" }}>
      <div className="max-w-6xl mx-auto px-4 py-8 lg:py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-blue-600 mb-3">Student Committee</h1>
          <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Organizing Student Members Section - Carousel */}
        <div className="mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-700 mb-4 sm:mb-8 text-center">Organizing Student Members</h2>
          
          {/* Carousel Container */}
          <div className="flex justify-center items-center gap-1 sm:gap-3 md:gap-6 mb-4 sm:mb-6 w-full px-1 sm:px-2">
            <button
              onClick={() => {
                prevSlide();
                setIsAutoPlay(false);
                setTimeout(() => setIsAutoPlay(true), 10000);
              }}
              className="hidden sm:flex bg-blue-600 hover:bg-blue-700 text-white rounded-full p-2 sm:p-3 shadow-lg transition-all hover:scale-110 flex-shrink-0"
            >
              <svg className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <div className="relative flex-1 max-w-4xl">
              <div className="relative h-52 sm:h-64 md:h-80 lg:h-96 flex items-center justify-center">
                {organizingMembers.map((member, idx) => {
                  let position;
                  
                  // Always show 3 cards (center and sides)
                  if (idx === currentSlide) {
                    position = 0; // center
                  } else if (idx === (currentSlide + 1) % organizingMembers.length) {
                    position = 1; // right
                  } else if (idx === (currentSlide - 1 + organizingMembers.length) % organizingMembers.length) {
                    position = -1; // left
                  } else {
                    position = 2; // hidden
                  }
                  
                  return (
                    position !== 2 && (
                      <CarouselCard key={idx} member={member} index={idx} position={position} />
                    )
                  );
                })}
              </div>
            </div>
            
            <button
              onClick={() => {
                nextSlide();
                setIsAutoPlay(false);
                setTimeout(() => setIsAutoPlay(true), 10000);
              }}
              className="hidden sm:flex bg-blue-600 hover:bg-blue-700 text-white rounded-full p-2 sm:p-3 shadow-lg transition-all hover:scale-110 flex-shrink-0"
            >
              <svg className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          {/* Mobile Swipe Navigation Dots */}
          <div className="flex sm:hidden justify-center gap-2 mb-4">
            <button
              onClick={() => {
                prevSlide();
                setIsAutoPlay(false);
                setTimeout(() => setIsAutoPlay(true), 10000);
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-3 py-1.5 shadow-lg transition-all text-xs font-semibold"
            >
              ← Prev
            </button>
            <button
              onClick={() => {
                nextSlide();
                setIsAutoPlay(false);
                setTimeout(() => setIsAutoPlay(true), 10000);
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-3 py-1.5 shadow-lg transition-all text-xs font-semibold"
            >
              Next →
            </button>
          </div>
          
          {/* Spacer for dots */}
          <div className="mb-2 sm:mb-4 md:mb-6"></div>
          
          {/* Dots Indicator */}
          <div className="flex justify-center gap-1 sm:gap-2 mt-2 sm:mt-4 md:mt-6">
            {organizingMembers.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setCurrentSlide(idx);
                  setIsAutoPlay(false);
                  setTimeout(() => setIsAutoPlay(true), 10000);
                }}
                className={`rounded-full transition-all ${
                  idx === currentSlide
                    ? 'bg-blue-600 w-2.5 sm:w-3 h-2.5 sm:h-3'
                    : 'bg-blue-300 w-1.5 sm:w-2 h-1.5 sm:h-2 hover:bg-blue-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* IEEE Student Branch Section - Carousel */}
        <div className="mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-700 mb-4 sm:mb-8 text-center">IEEE Student Branch Executive Members</h2>
          
          {/* Carousel Container */}
          <div className="flex justify-center items-center gap-1 sm:gap-3 md:gap-6 mb-4 sm:mb-6 w-full px-1 sm:px-2">
            <button
              onClick={() => {
                prevIEEESlide();
                setIsAutoPlayIEEE(false);
                setTimeout(() => setIsAutoPlayIEEE(true), 10000);
              }}
              className="hidden sm:flex bg-blue-600 hover:bg-blue-700 text-white rounded-full p-2 sm:p-3 shadow-lg transition-all hover:scale-110 flex-shrink-0"
            >
              <svg className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <div className="relative flex-1 max-w-4xl">
              <div className="relative h-52 sm:h-64 md:h-80 lg:h-96 flex items-center justify-center">
                {ieeeMembers.map((member, idx) => {
                  let position;
                  
                  // Always show 3 cards (center and sides)
                  if (idx === currentIEEESlide) {
                    position = 0; // center
                  } else if (idx === (currentIEEESlide + 1) % ieeeMembers.length) {
                    position = 1; // right
                  } else if (idx === (currentIEEESlide - 1 + ieeeMembers.length) % ieeeMembers.length) {
                    position = -1; // left
                  } else {
                    position = 2; // hidden
                  }
                  
                  return (
                    position !== 2 && (
                      <CarouselCard key={idx} member={member} index={idx} position={position} />
                    )
                  );
                })}
              </div>
            </div>
            
            <button
              onClick={() => {
                nextIEEESlide();
                setIsAutoPlayIEEE(false);
                setTimeout(() => setIsAutoPlayIEEE(true), 10000);
              }}
              className="hidden sm:flex bg-blue-600 hover:bg-blue-700 text-white rounded-full p-2 sm:p-3 shadow-lg transition-all hover:scale-110 flex-shrink-0"
            >
              <svg className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          {/* Mobile Swipe Navigation Buttons */}
          <div className="flex sm:hidden justify-center gap-2 mb-4">
            <button
              onClick={() => {
                prevIEEESlide();
                setIsAutoPlayIEEE(false);
                setTimeout(() => setIsAutoPlayIEEE(true), 10000);
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-3 py-1.5 shadow-lg transition-all text-xs font-semibold"
            >
              ← Prev
            </button>
            <button
              onClick={() => {
                nextIEEESlide();
                setIsAutoPlayIEEE(false);
                setTimeout(() => setIsAutoPlayIEEE(true), 10000);
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-3 py-1.5 shadow-lg transition-all text-xs font-semibold"
            >
              Next →
            </button>
          </div>
          
          {/* Spacer for dots */}
          <div className="mb-2 sm:mb-4 md:mb-6"></div>
          
          {/* Dots Indicator */}
          <div className="flex justify-center gap-1 sm:gap-2 mt-2 sm:mt-4 md:mt-6">
            {ieeeMembers.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setCurrentIEEESlide(idx);
                  setIsAutoPlayIEEE(false);
                  setTimeout(() => setIsAutoPlayIEEE(true), 10000);
                }}
                className={`rounded-full transition-all ${
                  idx === currentIEEESlide
                    ? 'bg-blue-600 w-2.5 sm:w-3 h-2.5 sm:h-3'
                    : 'bg-blue-300 w-1.5 sm:w-2 h-1.5 sm:h-2 hover:bg-blue-400'
                }`}
              />
            ))}
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

export default StudentCommittee;
