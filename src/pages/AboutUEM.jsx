import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AboutUEM = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: '../assets/university-of-engineering-management-kolkata-291622.jpg',
      alt: 'Campus View',
    },
    {
      image: '../assets/UEMK_Building_Final1.jpg',
      alt: 'Building Front',
    },
    {
      image: '../assets/UEMK_Building_Final6.jpg',
      alt: 'University Entrance',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => setCurrentSlide(index);
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="min-h-screen bg-cover bg-center bg-fixed mt-8 lg:mt-20" style={{ backgroundImage: "url('../assets/AboutBg.png')" }}>
      {/* Header Section */}
      <header className="text-center py-8 animate-fadeInUp">
        <img src="../assets/UEM_Logo.png" alt="UEM Logo" className="w-36 mx-auto mb-4" />
        <h1 className="text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
          University of Engineering & Management
        </h1>
      </header>

      {/* Main Content Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 lg:px-12 py-8 max-w-7xl mx-auto">
        {/* Left Column - About Content */}
        <div className="bg-white p-8 shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-300 animate-fadeInUp">
          <h2 className="text-3xl lg:text-4xl font-bold text-blue-600 mb-4">About Us</h2>
          <p className="text-base text-gray-700 leading-relaxed mb-4 text-justify">
            University of Engineering & Management (UEM) aims to provide an international ambience and exposure with 
            innovative teaching techniques and courses which are tailor-made (technical & soft skills) for the job market 
            giving the students the winning edge and competitive advantage during placements. To be a globally recognized 
            educational institution known for outcome-based education and application-oriented research.
          </p>
          <p className="text-base text-gray-700 leading-relaxed text-justify">
            To assist students to understand and enjoy the seamless nature of knowledge and encourage them to apply 
            acquired knowledge to practical use, so they become socially responsible leaders. We foster creativity, 
            innovation, and excellence through an example-based teaching-learning process imparted in a comprehensible way. 
            Our goal is to continuously upgrade our knowledge base, improve infrastructure, and use the latest technology 
            to meet professional requirements.
          </p>
        </div>

        {/* Right Column - Image Slider */}
        <div className="flex flex-col gap-4">
          {/* Slider Container */}
          <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg group">
            <div className="relative w-full h-full">
              {slides.map((slide, index) => (
                <img
                  key={index}
                  src={slide.image}
                  alt={slide.alt}
                  className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition-all hover:scale-110 z-10"
            >
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition-all hover:scale-110 z-10"
            >
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-blue-600 scale-125 shadow-lg'
                    : 'bg-blue-300 hover:bg-blue-400'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

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
        <Link to="/conference/tracks" className="text-red-600 underline font-extrabold animate-pulse ml-2 inline-block">
          🚀 View Tracks
        </Link>
      </marquee>
    </div>
  );
};

export default AboutUEM;
