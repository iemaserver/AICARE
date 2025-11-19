import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Home = () => {
  // Helper function to get correct asset URL for both localhost and production
  const getAssetUrl = (path) => {
    const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
    if (isLocalhost) {
      return path; // Use relative path for localhost
    }
    return `https://aicare.uem.edu.in${path}`; // Use full URL for production
  };

  const [timeLeft, setTimeLeft] = useState({
    days: 99,
    hours: 17,
    minutes: 55,
    seconds: 11,
  });

  const [countryData, setCountryData] = useState([]);

  useEffect(() => {
    const updateCountdown = () => {
      const targetDate = new Date('November 21, 2025 00:00:00').getTime();
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const countries = [
      { name: 'India', flag: '/assets/india.png', minCount: 10000 },
      { name: 'USA', flag: '/assets/world.png', minCount: 4000 },
      { name: 'China', flag: '/assets/china.png', minCount: 3000 },
      { name: 'Bangladesh', flag: '/assets/bangladesh.png', minCount: 500 },
      { name: 'Canada', flag: '/assets/canada.png', minCount: 500 },
      { name: 'Japan', flag: '/assets/japan.png', minCount: 500 },
      { name: 'Germany', flag: '/assets/germany (1).png', minCount: 400 },
      { name: 'Australia', flag: '/assets/australia.png', minCount: 400 },
      { name: 'New Zealand', flag: '/assets/new-zealand.png', minCount: 400 },
    ];

    const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
    const data = countries.map((country) => ({
      ...country,
      count: getRandomInt(country.minCount, country.minCount * 2),
    }));

    setCountryData(data);
  }, []);

  const totalVisits = countryData.reduce((sum, country) => sum + country.count, 0);
  const dailyVisits = 10;

  return (
    <div>
      <Helmet>
        <title>AICARE 2025 - International Conference on AI, Computing, Astronomy & Renewable Energy</title>
        <meta
          name="description"
          content="AICARE 2025 - 1st International Conference on Artificial Intelligence for Computing, Astronomy, and Renewable Energy. IEEE CONFERENCE ID: 66005"
        />
        <meta name="keywords" content="AICARE 2025, AI Conference, Renewable Energy, Astronomy, IEEE" />
        <meta property="og:title" content="AICARE 2025" />
        <meta property="og:description" content="International Conference on Artificial Intelligence for Computing, Astronomy, and Renewable Energy" />
        <meta property="og:image" content="/assets/AI_Care_Logo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>

      {/* Corner Logos - IEM and UEM Absolute */}
      <img src="/assets/IEM_Logo.png" className="w-20 lg:w-24 absolute top-2 left-4 z-40 hidden lg:block" alt="IEM Logo" />
      <img src="/assets/UEM_Logo.png" className="w-20 lg:w-24 absolute top-2 right-4 z-40 hidden lg:block" alt="UEM Logo" />

      {/* Logos Wrapper - Outside Hero for scroll disappear effect */}
      <div className="relative lg:-top-36 w-full " style={{ height: 0 }}>
        {/* IEEE Kolkata Logo - Left */}
        <div className="absolute top-14 md:top-8 left-1 md:left-4 lg:left-8 z-40 flex gap-3 md:gap-4 flex-col items-center bg-transparent rounded-lg p-1 md:p-2">
          <div className="text-[7px] md:text-[10px] lg:text-xs font-bold text-black mb-0.5 md:mb-1">Technical Co-Sponsor :</div>
          <img src="/assets/IEEE_kolkata.jpeg" className="w-12 md:w-20 lg:w-28" alt="IEEE Kolkata" />
        </div>
        
        {/* AICARE Logo - Middle */}
        <div className="absolute -top-2 md:top-0 lg:-top-8 left-1/2 transform -translate-x-1/2 z-40">
          <img src="/assets/AI_Care_Logo.png" className="w-36 md:w-48 lg:w-64" alt="AICARE Logo" />
        </div>
        
        {/* IEEE PES Logo - Right */}
        <div className="absolute top-12 md:top-8 right-1 md:right-4 lg:right-8 z-40 flex  flex-col items-center bg-transparent rounded-lg p-1 md:p-2">
          <div className="text-[7px] md:text-[10px] lg:text-xs font-bold text-black mb-0.5 md:mb-1">Co-Sponsored By :</div>
          <img src="/assets/IEEE_PES.png" className="w-10 md:w-16 lg:w-28" alt="IEEE PES" />
        </div>
      </div>

      {/* Hero Section */}
      <div
        className="HeroSection lg:mt-64 flex flex-col justify-items-center items-center h-screen relative"
        style={{
          width: '100vw',
          marginLeft: 'calc(-50vw + 50%)',
          backgroundImage: "url('/assets/pc bg.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Logos Container - Independent Positioned */}
        <div className="logos relative lg:mb-28 w-full h-80 lg:h-96">
          
          {/* Bottom Center - Support Logos */}
          <div className="absolute bottom-8 md:bottom-8 lg:-bottom-8 left-1/2 transform -translate-x-1/2 flex flex-wrap justify-center gap-2 md:gap-4 lg:gap-8 w-11/12">
            <div className="flex flex-col items-center rounded-lg p-2">
              <img src="/assets/Renewable_Energy_Logo.png" className="w-14 lg:w-24" alt="Renewable Energy" />
            </div>
            <div className="flex flex-col items-center rounded-lg p-2">
              <img src="/assets/Space_Observatory_Logo.png" className="w-14 lg:w-24" alt="Space Observatory" />
            </div>
            <div className="flex flex-col items-center rounded-lg p-2">
              <img src="/assets/IEEE_Logo.png" className="w-14 lg:w-24" alt="IEEE" />
            </div>
            <div className="flex flex-col items-center rounded-lg p-2">
              <img src="/assets/uemk renewable energy club logo.png" className="w-14 lg:w-24" alt="UEMK Club" />
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="home_cont h-full flex items-center">
          <div className="flex flex-col  mt-0 lg:mt-0 justify-items-center items-center text-center">
            {/* Main Heading */}
            <div className="heading mb-4 lg:mb-8 font-semibold text-4xl lg:text-6xl text-white">
              AICARE 2025
            </div>

            {/* Subheading */}
            <div className="sub_heading_1 font-semibold text-base w-11/12 lg:text-xl  text-white">
              <div className="lg:mb-10">
              <p>1st International Conference on Artificial Intelligence for Computing, Astronomy, and Renewable Energy, 2025</p>
              <p>(IEEE AICARE CONFERENCE ID : 66005)</p>
              </div>
              <p className="mt-12 font-normal mx-auto text-xs w-11/12 lg:text-sm">
                Organized by <br />
                Center of Excellence on Renewable Energy & Centre of Excellence in Astronomical Studies <br />
                on
              </p>
              <h1 className="sub_heading_1 mt-4 lg:mt-6">21st and 22nd November, 2025</h1>
            </div>

            {/* Timer Text */}
            <div className="sub_heading_1 m-4 lg:mt-4 font-normal text-xl lg:text-3xl text-white">
              The conference will begin in....
            </div>

            {/* Timer */}
            <div className="Timer_Box flex w-11/12 justify-center space-x-5 lg:space-x-10  m-4">
              <div className="bg-[#D2E1F9] h-16 w-1/4 lg:h-20 lg:w-28 rounded-lg flex flex-col justify-center items-center">
                <span className="text-3xl lg:text-4xl font-semibold">{timeLeft.days}</span>
                <span className="text-sm">Days</span>
              </div>
              <div className="h-16 w-20 lg:h-20 lg:w-28 p-px rounded-lg bg-gradient-to-tr from-blue-500 via-white via-blue-500 to-blue-500">
                <div className="bg-black rounded-lg h-full w-full flex flex-col justify-center items-center text-white">
                  <span className="text-3xl lg:text-4xl font-semibold">{timeLeft.hours}</span>
                  <span className="text-sm">Hours</span>
                </div>
              </div>
              <div className="h-16 w-20 lg:h-20 lg:w-28 p-px rounded-lg bg-gradient-to-tr from-blue-500 via-white via-blue-500 to-blue-500">
                <div className="bg-black rounded-lg h-full w-full flex flex-col justify-center items-center text-white">
                  <span className="text-3xl lg:text-4xl font-semibold">{timeLeft.minutes}</span>
                  <span className="text-sm">Minutes</span>
                </div>
              </div>
              <div className="h-16 w-20 lg:h-20 lg:w-28 p-px rounded-lg bg-gradient-to-tr from-blue-500 via-white via-blue-500 to-blue-500">
                <div className="bg-black rounded-lg h-full w-full flex flex-col justify-center items-center text-white">
                  <span className="text-3xl lg:text-4xl font-semibold">{timeLeft.seconds}</span>
                  <span className="text-sm">Seconds</span>
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="Progress_Bar flex justify-center">
              <img src="/assets/Progressbar.png" className="w-11/12 lg:w-6/12" alt="Progress" />
            </div>
          </div>
        </div>
      </div>

      {/* Schedule Buttons Section */}
      <div style={{
        width: '100vw',
        marginLeft: 'calc(-50vw + 50%)'
      }}>
        <div className="bg-gradient-to-r from-blue-50 to-white py-6 lg:py-10">
          <div className="max-w-7xl mx-auto px-4">
            
            {/* Online Schedule Section */}
            <div className="mb-8 lg:mb-12">
              <div className="flex items-center justify-center gap-3 lg:gap-4 mb-4 lg:mb-6">
                <div className="w-8 lg:w-12 h-1 bg-gradient-to-r from-blue-400 to-blue-700"></div>
                <h2 className="text-xl lg:text-3xl font-bold text-blue-600 text-center">Online Schedule - AICARE</h2>
                <div className="w-8 lg:w-12 h-1 bg-gradient-to-r from-blue-700 to-blue-400"></div>
              </div>
              <div className="flex flex-wrap gap-2 lg:gap-4 items-center justify-center">
                <button 
                  type="button"
                  onClick={() => window.open(getAssetUrl('/assets/AICARE_Schedule_Online_Session_1.pdf'), '_blank')}
                  className="flex-shrink-0 w-40 sm:w-48 md:w-56 lg:flex-1 text-center rounded-lg px-4 py-2.5 lg:py-3 bg-gradient-to-r from-[#001f3f] to-[#0a4d8c] text-white font-semibold hover:from-white hover:to-blue-50 hover:text-[#001f3f] border-2 border-[#001f3f] transition-all duration-300 shadow-md hover:shadow-lg text-sm lg:text-base cursor-pointer"
                >
                  Online_Session-1
                </button>
                <button 
                  type="button"
                  onClick={() => window.open(getAssetUrl('/assets/AICARE_Schedule_Online_Session_2.pdf'), '_blank')}
                  className="flex-shrink-0 w-40 sm:w-48 md:w-56 lg:flex-1 text-center rounded-lg px-4 py-2.5 lg:py-3 bg-gradient-to-r from-[#001f3f] to-[#0a4d8c] text-white font-semibold hover:from-white hover:to-blue-50 hover:text-[#001f3f] border-2 border-[#001f3f] transition-all duration-300 shadow-md hover:shadow-lg text-sm lg:text-base cursor-pointer"
                >
                  Online_Session-2
                </button>
                <button 
                  type="button"
                  onClick={() => window.open(getAssetUrl('/assets/AICARE_Schedule_Online_Session_3.pdf'), '_blank')}
                  className="flex-shrink-0 w-40 sm:w-48 md:w-56 lg:flex-1 text-center rounded-lg px-4 py-2.5 lg:py-3 bg-gradient-to-r from-[#001f3f] to-[#0a4d8c] text-white font-semibold hover:from-white hover:to-blue-50 hover:text-[#001f3f] border-2 border-[#001f3f] transition-all duration-300 shadow-md hover:shadow-lg text-sm lg:text-base cursor-pointer"
                >
                  Online_Session-3
                </button>
                <button 
                  type="button"
                  onClick={() => window.open(getAssetUrl('/assets/AICARE_Schedule_Online_Session_4.pdf'), '_blank')}
                  className="flex-shrink-0 w-40 sm:w-48 md:w-56 lg:flex-1 text-center rounded-lg px-4 py-2.5 lg:py-3 bg-gradient-to-r from-[#001f3f] to-[#0a4d8c] text-white font-semibold hover:from-white hover:to-blue-50 hover:text-[#001f3f] border-2 border-[#001f3f] transition-all duration-300 shadow-md hover:shadow-lg text-sm lg:text-base cursor-pointer"
                >
                  Online_Session-4
                </button>
              </div>
            </div>

            {/* Offline Program Schedule Section */}
            <div className="mb-8 lg:mb-12">
              <div className="flex items-center justify-center gap-3 lg:gap-4 mb-4 lg:mb-6">
                <div className="w-8 lg:w-12 h-1 bg-gradient-to-r from-blue-400 to-blue-700"></div>
                <h2 className="text-xl lg:text-3xl font-bold text-blue-600 text-center">Offline Program Schedule - AICARE</h2>
                <div className="w-8 lg:w-12 h-1 bg-gradient-to-r from-blue-700 to-blue-400"></div>
              </div>
              <div className="flex justify-center">
                <button 
                  type="button"
                  onClick={() => window.open(getAssetUrl('/assets/AICARE_2025_Program_Schedule.pdf'), '_blank')}
                  className="w-60 sm:w-72 md:w-80 lg:w-96 text-center rounded-lg px-4 py-2.5 lg:py-3 bg-gradient-to-r from-[#001f3f] to-[#0a4d8c] text-white font-semibold hover:from-white hover:to-blue-50 hover:text-[#001f3f] border-2 border-[#001f3f] transition-all duration-300 shadow-md hover:shadow-lg text-sm lg:text-base cursor-pointer"
                >
                  Offline Program Schedule
                </button>
              </div>
            </div>

            {/* Event Schedule Section */}
            <div className="mb-0">
              <div className="flex items-center justify-center gap-3 lg:gap-4 mb-4 lg:mb-6">
                <div className="w-8 lg:w-12 h-1 bg-gradient-to-r from-blue-400 to-blue-700"></div>
                <h2 className="text-xl lg:text-3xl font-bold text-blue-600 text-center">Event Schedule - AICARE</h2>
                <div className="w-8 lg:w-12 h-1 bg-gradient-to-r from-blue-700 to-blue-400"></div>
              </div>
              <div className="flex justify-center">
                <button 
                  type="button" 
                  onClick={() => window.open('/assets/AICARE_2025_Program_Schedule.pdf', '_blank')}
                  className="w-60 sm:w-72 md:w-80 lg:w-96 text-center rounded-lg px-4 py-2.5 lg:py-3 bg-gradient-to-r from-[#001f3f] to-[#0a4d8c] text-white font-semibold hover:from-white hover:to-blue-50 hover:text-[#001f3f] border-2 border-[#001f3f] transition-all duration-300 shadow-md hover:shadow-lg text-sm lg:text-base"
                >
                  Event Schedule
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Marquee/Announcement Banner */}
      {false && (
        <div style={{
          width: '100vw',
          marginLeft: 'calc(-50vw + 50%)'
        }}>
          <marquee
            behavior=""
            className="bg-[#0a00c0] h-8 lg:h-12 p-1 lg:p-2 block text-yellow-200 lg:text-2xl"
            direction="left"
          >
            {/* <span className="inline-block">AICARE 2025 will be held at the University of Engineering and Management,Kolkata on 21st and 22nd November, 2025. After review, all accepted and presented papers will appear in IEEE Xplore. *(IEEE CONFERENCE ID : 66005). Paper Submission link: https://cmt3.research.microsoft.com/AICARE2025 or
            <a className="text-red-300 ml-2" href="https://cmt3.research.microsoft.com/AICARE2025">
              Click Me
            </a></span> */}
          </marquee>
        </div>
      )}

      {/* About Section */}
      <div
        className="flex justify-center items-center min-h-fit w-full relative"
        style={{
          width: '100vw',
          marginLeft: 'calc(-50vw + 50%)',
          backgroundImage: "url('/assets/AboutBg.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="generalContainer w-full flex flex-col items-center lg:items-start px-4 lg:px-0 py-0 lg:py-0">
          <div className="aboutItem">
            <div className="mt-8 lg:mt-12 mb-12 lg:mb-16 text-center">
              <div className="flex items-center justify-center gap-4 mb-3">
                <div className="w-12 h-1 bg-gradient-to-r from-blue-400 to-blue-700"></div>
                <h1 className="text-3xl lg:text-4xl font-bold text-blue-600">About AICARE</h1>
                <div className="w-12 h-1 bg-gradient-to-r from-blue-700 to-blue-400"></div>
              </div>
              <p className="text-gray-600 text-sm lg:text-base">Learn more about our international conference</p>
            </div>

            <div className="aboutItemDescription mt-10 lg:mt-6 h-fit flex">
              <div className="aboutItemDescriptionText mx-2 lg:mx-44 text-justify">
                International Conference on Artificial Intelligence for Computing, Astronomy and Renewable Energy (AICARE 2025) is being organized by the Centre of Excellence in Renewable Energy, UEM Kolkata and Centre of Excellence in Astronomy, UEM KOLKATA. The conference is technically co-sponsored by IEEE Kolkata Section. The conference serves as a premier gathering for researchers, engineers, and professionals to explore the latest developments and trends in Artificial Intelligence, Computation in the field of Engineering. With a focus on advanced technologies such as astronomy, data science, IoT, renewable energy integration, power electronics, automation, electrification of transportation, smart grid technologies, resilient monitoring, protection systems, and intelligent systems, the conference provides a platform for exchanging ideas, sharing insights, and fostering collaborations in cutting-edge research. Participants from academia, industry, and government agencies come together to present their research findings, discuss challenges, and propose innovative solutions to address the evolving demands of the different Engineering fields. Through keynote speeches, technical sessions, and networking opportunities, the conference aims to stimulate interdisciplinary discussions and inspire new avenues of research that contribute to the advancement of modern Artificial Intelligence and IoT-based engineering practices worldwide. AICARE 2025 will be held at the University of Engineering and Management, Kolkata, on 21st and 22nd November, 2025.
              </div>
            </div>

            <div className="aboutButtons w-full flex justify-center items-center mt-10 lg:mt-16">
              <div className="aboutBtns w-full lg:w-10/12 flex flex-col md:flex-row gap-4 lg:gap-10 justify-center items-center">
                <Link
                  to="/venue"
                  className="my-1 hover:text-white hover:border-none hover:bg-blue-600 text-blue-800 rounded-lg border-solid border-2 border-blue-800 h-9 text-center p-1 w-5/12 lg:w-3/12"
                >
                  Venue
                </Link>
                <a
                  href="/assets/AICARE.pdf"
                  className="my-1 hover:text-white hover:border-none hover:bg-blue-600 text-blue-800 rounded-lg border-solid border-2 border-blue-800 h-9 text-center p-1 w-6/12 lg:w-4/12"
                >
                  AI CARE Brochure
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Dates Section */}
      <div
        id="keydates"
        className="Key_Dates_Section relative"
        style={{
          width: '100vw',
          marginLeft: 'calc(-50vw + 50%)',
          backgroundImage: "url('/assets/AboutBg.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'top',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="mt-8 lg:mt-12 mb-12 lg:mb-16 text-center">
          <div className="flex items-center justify-center gap-4 mb-3">
            <div className="w-12 h-1 bg-gradient-to-r from-blue-400 to-blue-700"></div>
            <h1 className="text-3xl lg:text-4xl font-bold text-blue-600">Key Dates</h1>
            <div className="w-12 h-1 bg-gradient-to-r from-blue-700 to-blue-400"></div>
          </div>
          <p className="text-gray-600 text-sm lg:text-base">Important deadlines and event dates</p>
        </div>

        <div className="flex flex-col sm:flex-row h-full w-full min-h-screen min-w-screen" style={{ backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
          <div className="flex justify-center"></div>

          <div className="flex-1 flex flex-col justify-center m-auto lg:ml-10 w-10/12 text-left p-4 sm:p-8">
            <img src="/assets/UEMK_Building_home.png" className="image-container sm:w-48 md:w-9/12 lg:w-[600px] rounded-lg mb-10 lg:mb-0 my-auto" alt="UEMK Building" />
          </div>

          <div className="flex-1 flex flex-col gap-12 sm:gap-8 w-10/12 m-auto lg:mr-10 p-4 sm:p-8 justify-center">
            {/* Timeline Items */}
            <div className="flex items-center">
              <div className="bg-gradient-to-b from-blue-300 to-blue-700 text-white text-center rounded transform -skew-x-6 p-1 w-[15%] max-w-[80px] flex flex-col items-center">
                <span className="text-[2vw] sm:text-[1vw]">MAR</span>
                <span className="text-[4vw] sm:text-[2vw] font-bold">03</span>
              </div>
              <div className="border-b-4 border-blue-600 mt-0 flex-grow -ml-2 -mb-0 pl-6 pr-8 py-0 lg:py-2.5 flex flex-col justify-center">
                <h2 className="text-[4vw] sm:text-[1.5vw] text-black italic font-bold">
                  FULL PAPER SUBMISSION OPENS ON
                </h2>
                <p className="text-[2.5vw] sm:text-[1vw] text-black italic">
                  3RD MARCH, 2025
                </p>
              </div>
            </div>

            <div className="flex justify-end items-center text-right">
              <div className="border-b-4 border-blue-600 mt-0 -mb-0 mr-0 pr-6 pl-8 py-0 lg:py-2.5 flex flex-col justify-center">
                <h2 className="text-[4vw] sm:text-[1.5vw] text-black italic font-bold flex items-center gap-2">
                  FULL PAPER SUBMISSION
                  <span className="text-[3vw] sm:text-[1vw] text-red-600 animate-pulse font-bold">(EXTENDED)</span>
                </h2>
                <p className="text-[2.5vw] sm:text-[1vw] text-black italic">
                  <span className="line-through text-gray-500">6TH JULY</span>
                  <span className="ml-2 font-semibold">21st AUG, 2025</span>
                </p>
              </div>
              <div className="bg-gradient-to-b from-blue-300 to-blue-700 text-white text-center rounded transform -skew-x-6 p-1 w-[15%] max-w-[80px] flex flex-col items-center">
                <span className="text-[2vw] sm:text-[1vw]">AUG</span>
                <span className="text-[4vw] sm:text-[2vw] font-bold">06</span>
              </div>
            </div>

            <div className="flex items-center">
              <div className="bg-gradient-to-b from-blue-300 to-blue-700 text-white text-center rounded transform -skew-x-6 p-1 w-[15%] max-w-[80px] flex flex-col items-center">
                <span className="text-[2vw] sm:text-[1vw]">AUG</span>
                <span className="text-[4vw] sm:text-[2vw] font-bold">30</span>
              </div>
              <div className="border-b-4 border-blue-600 mt-0 flex-grow -ml-2 -mb-0 pl-6 pr-8 py-0 lg:py-2.5 flex flex-col justify-center">
                <h2 className="text-[4vw] sm:text-[1.5vw] text-black italic font-bold">
                  ACCEPTANCE NOTIFICATIONS
                  <span className="text-[3vw] sm:text-[1vw] text-red-600 animate-pulse font-bold">(EXTENDED)</span>
                </h2>
                <p className="text-[2.5vw] sm:text-[1vw] text-black italic">
                  <span className="line-through text-gray-500">4TH AUG</span>
                  <span className="ml-2 font-semibold">30TH AUG, 2025</span>
                </p>
              </div>
            </div>

            <div className="flex justify-end items-center text-right">
              <div className="border-b-4 border-blue-600 mt-0 -mb-0 mr-0 pr-6 pl-8 py-0 lg:py-2.5 flex flex-col justify-center">
                <h2 className="text-[4vw] sm:text-[1.5vw] text-black italic font-bold">
                  CAMERA READY SUBMISSIONS
                </h2>
                <p className="text-[2.5vw] sm:text-[1vw] text-black italic">
                  15TH SEPTEMBER, 2025
                </p>
              </div>
              <div className="bg-gradient-to-b from-blue-300 to-blue-700 text-white text-center rounded transform -skew-x-6 p-1 w-[15%] max-w-[80px] flex flex-col items-center">
                <span className="text-[2vw] sm:text-[1vw]">SEPT</span>
                <span className="text-[4vw] sm:text-[2vw] font-bold">15</span>
              </div>
            </div>

            <div className="flex items-center">
              <div className="bg-gradient-to-b from-blue-300 to-blue-700 text-white text-center rounded transform -skew-x-6 p-1 w-[15%] max-w-[80px] flex flex-col items-center">
                <span className="text-[2vw] sm:text-[1vw]">NOV</span>
                <span className="text-[4vw] sm:text-[2vw] font-bold">21</span>
              </div>
              <div className="border-b-4 border-blue-600 mt-0 flex-grow -ml-2 -mb-0 pl-6 pr-8 py-0 lg:py-2.5 flex flex-col justify-center">
                <h2 className="text-[4vw] sm:text-[1.5vw] text-black italic font-bold">
                  CONFERENCE DATES
                </h2>
                <p className="text-[2.5vw] sm:text-[1vw] text-black italic">
                  21ST AND 22ND NOVEMBER, 2025
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* World Participation Section */}
      <div
        className="relative py-6 lg:py-10 px-4 lg:px-8"
        style={{
          width: '100vw',
          marginLeft: 'calc(-50vw + 50%)',
          backgroundImage: "url('/assets/AboutBg.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Section Heading */}
          <div className="mt-8 lg:mt-12 mb-8 text-center">
            <div className="flex items-center justify-center gap-4 mb-3">
              <div className="w-12 h-1 bg-gradient-to-r from-blue-400 to-blue-700"></div>
              <h1 className="text-3xl lg:text-4xl font-bold text-blue-600">Global Reach</h1>
              <div className="w-12 h-1 bg-gradient-to-r from-blue-700 to-blue-400"></div>
            </div>
            <p className="text-gray-600 text-sm lg:text-base">Connecting researchers and professionals from around the world</p>
          </div>

          {/* Two Column Layout: Flags Left, Stats Right */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Left Side - Country Flags Grid */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-3 gap-3">
                {countryData.map((country, index) => (
                  <div key={country.name} className="group relative bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-lg hover:shadow-2xl hover:scale-110 transition duration-300 p-3 border-2 border-blue-200 hover:border-blue-500 overflow-hidden">
                    {/* Rank Badge */}
                    <div className="absolute top-2 right-2 bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded-full w-7 h-7 flex items-center justify-center font-bold text-xs shadow-lg">
                      {index + 1}
                    </div>
                    
                    {/* Flag Container */}
                    <div className="bg-white rounded-lg p-2 mb-2 flex items-center justify-center shadow-sm group-hover:shadow-md transition">
                      <img src={country.flag} alt={`${country.name} Flag`} className="w-12 h-12 rounded-md object-cover group-hover:scale-120 transition duration-300" />
                    </div>
                    
                    {/* Visitor Count Box */}
                    <div className="bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg p-2 text-center group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-blue-600 transition duration-300">
                      <p className="text-lg font-bold text-blue-700 group-hover:text-white transition">{country.count.toLocaleString()}</p>
                      <p className="text-xs text-blue-600 group-hover:text-blue-100 transition font-semibold">participants</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right Side - Statistics Box */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 shadow-2xl h-full flex flex-col justify-center sticky top-20">
                <div className="mb-8">
                  <p className="text-blue-200 font-semibold text-xs uppercase tracking-widest mb-3">Total Worldwide Visits</p>
                  <div className="flex items-baseline gap-3">
                    <p className="text-5xl lg:text-6xl font-bold text-white">{totalVisits.toLocaleString()}</p>
                    <p className="text-lg text-blue-100 font-medium">visitors</p>
                  </div>
                </div>
                
                <div className="w-16 h-1 bg-gradient-to-r from-blue-300 to-green-400 mb-8"></div>
                
                <div>
                  <p className="text-blue-200 font-semibold text-xs uppercase tracking-widest mb-3">Daily Average Visits</p>
                  <div className="flex items-baseline gap-3">
                    <p className="text-5xl lg:text-6xl font-bold text-green-300">{dailyVisits}</p>
                    <p className="text-lg text-blue-100 font-medium">per day</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Marquee */}
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

export default Home;
