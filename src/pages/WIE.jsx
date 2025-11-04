import { Link } from 'react-router-dom';

const WIE = () => {
  const benefits = [
    {
      title: 'Exclusive Networking',
      description: 'Connect with women professionals, researchers, and students from around the world'
    },
    {
      title: 'Knowledge Sharing',
      description: 'Participate in workshops and sessions on AI, IoT, and Renewable Energy'
    },
    {
      title: 'Recognition',
      description: 'Showcase your contributions and research to the global community'
    },
    {
      title: 'Innovation Platform',
      description: 'Collaborate on cutting-edge projects and ideas'
    },
    {
      title: 'Mentorship',
      description: 'Learn from and engage with experienced women leaders in technology'
    },
    {
      title: 'Career Growth',
      description: 'Explore career opportunities and professional development in tech'
    }
  ];

  return (
    <div className="min-h-screen bg-cover bg-center bg-fixed mt-8 lg:mt-20 pb-20" style={{ backgroundImage: "url('../assets/AboutBg.png')" }}>
      <div className="max-w-6xl mx-auto px-3 sm:px-4 py-6 sm:py-8 lg:py-12">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-block mb-4 sm:mb-6">
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-7xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-2 sm:mb-4 leading-tight">
            Women in Engineering
          </h1>
          <div className="h-1 w-32 sm:w-40 md:w-48 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full mb-4 sm:mb-6"></div>
          <p className="text-xs sm:text-sm md:text-lg lg:text-2xl text-gray-700 max-w-3xl mx-auto px-2">
            Special Discount on Registration Fees at AICARE 2025
          </p>
        </div>

        {/* Introduction Section */}
        <div className="bg-white bg-opacity-95 rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 lg:p-10 mb-6 sm:mb-8">
          <div className="space-y-4 sm:space-y-6">
            <div>
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-purple-600 mb-2 sm:mb-4">Special Discount for Women in Engineering</h2>
              <p className="text-gray-700 leading-relaxed text-xs sm:text-sm md:text-base lg:text-lg mb-2 sm:mb-4">
                We are offering a <span className="font-bold text-purple-600">special discount for the Women in Engineering category at AICARE 2025.</span> Join us to be part of this inspiring community and connect with professionals in AI, IoT, Renewable Energy, and more.
              </p>
              <p className="text-gray-700 leading-relaxed text-xs sm:text-sm md:text-base lg:text-lg">
                The Women in Engineering category at AICARE 2025 is designed to provide a platform for women professionals, researchers, and students to showcase their contributions to the rapidly evolving fields of AI, IoT, and renewable energy. By joining this event, you will not only be able to expand your knowledge but also inspire others with your innovative work and passion for technology.
              </p>
            </div>

            <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-3 sm:p-6 border-l-4 border-pink-600">
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-purple-900 font-semibold">
                ✨ Enjoy special discounted registration fees and be part of AICARE 2025's Women in Engineering initiative!
              </p>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center text-purple-600 mb-2 sm:mb-4">Why Join Women in Engineering?</h2>
          <div className="h-1 w-24 sm:w-28 md:w-32 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full mb-6 sm:mb-10"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-lg p-4 sm:p-6 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border-t-4 border-pink-500"
              >
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-purple-700 mb-1 sm:mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* About Section */}
        <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 lg:p-10 mb-6 sm:mb-8 border-2 border-pink-200">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-center text-purple-700 mb-4 sm:mb-6">
            About Women in Engineering at AICARE 2025
          </h2>
          <div className="space-y-4 sm:space-y-6 max-w-3xl mx-auto">
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed text-center">
              AICARE 2025 celebrates women in engineering and technology, with a special focus on creating opportunities for networking, collaboration, and growth. Share your knowledge, network with like-minded professionals, and explore the future of AI, IoT, renewable energy, and more.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 mt-4 sm:mt-6 pt-4 sm:pt-6 border-t-2 border-pink-300">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-pink-600 mb-1 sm:mb-2">300+</div>
                <p className="text-gray-700 font-semibold text-xs sm:text-sm md:text-base">Women Participants Expected</p>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-600 mb-1 sm:mb-2">50+</div>
                <p className="text-gray-700 font-semibold text-xs sm:text-sm md:text-base">Women Speakers & Panelists</p>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-pink-600 mb-1 sm:mb-2">10+</div>
                <p className="text-gray-700 font-semibold text-xs sm:text-sm md:text-base">Networking Events</p>
              </div>
            </div>
          </div>
        </div>

        {/* Registration CTA */}
        <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 lg:p-12 text-center border-2 border-purple-200">
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-purple-700 mb-3 sm:mb-4">Ready to Join?</h3>
          <p className="text-gray-700 text-xs sm:text-sm md:text-base lg:text-lg mb-4 sm:mb-8 max-w-2xl mx-auto">
            Take advantage of the special WIE discount and register now to be part of AICARE 2025!
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link
              to="/registration"
              className="inline-block px-6 sm:px-8 md:px-10 py-2 sm:py-3 md:py-4 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white font-bold text-xs sm:text-sm md:text-base lg:text-lg rounded-lg transition transform hover:scale-105 shadow-lg"
            >
              Register Now with WIE Discount
            </Link>
            <a
              href="https://cmt3.research.microsoft.com/AICARE2025"
              className="inline-block px-6 sm:px-8 md:px-10 py-2 sm:py-3 md:py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-xs sm:text-sm md:text-base lg:text-lg rounded-lg transition transform hover:scale-105 shadow-lg"
            >
              Submit Your Paper
            </a>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-8 sm:mt-12 bg-white rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 lg:p-10">
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-center text-purple-600 mb-6 sm:mb-8">Frequently Asked Questions</h3>
          
          <div className="space-y-4 sm:space-y-6 max-w-3xl mx-auto">
            <div className="border-l-4 border-pink-600 pl-3 sm:pl-6 py-1 sm:py-2">
              <h4 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 mb-1 sm:mb-2">Who is eligible for the WIE discount?</h4>
              <p className="text-gray-700 text-xs sm:text-sm md:text-base">Any woman professional, researcher, or student in engineering or technology fields is eligible for the WIE special discount at AICARE 2025.</p>
            </div>

            <div className="border-l-4 border-purple-600 pl-3 sm:pl-6 py-1 sm:py-2">
              <h4 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 mb-1 sm:mb-2">What is the discount amount?</h4>
              <p className="text-gray-700 text-xs sm:text-sm md:text-base">The specific discount percentage will be provided during registration. Please visit the registration page for detailed pricing information.</p>
            </div>

            <div className="border-l-4 border-pink-600 pl-3 sm:pl-6 py-1 sm:py-2">
              <h4 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 mb-1 sm:mb-2">How do I apply for the WIE discount?</h4>
              <p className="text-gray-700 text-xs sm:text-sm md:text-base">Simply select the Women in Engineering category during the registration process. You'll be prompted to provide verification of your status.</p>
            </div>

            <div className="border-l-4 border-purple-600 pl-3 sm:pl-6 py-1 sm:py-2">
              <h4 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 mb-1 sm:mb-2">What events are included in WIE?</h4>
              <p className="text-gray-700 text-xs sm:text-sm md:text-base">WIE participants have full access to all conference sessions, keynote speeches, workshops, and exclusive women in engineering networking events.</p>
            </div>

            <div className="border-l-4 border-pink-600 pl-3 sm:pl-6 py-1 sm:py-2">
              <h4 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 mb-1 sm:mb-2">Can I get the discount for multiple papers?</h4>
              <p className="text-gray-700 text-xs sm:text-sm md:text-base">The WIE discount applies per author. If you have multiple papers, each paper registration follows the standard pricing structure.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Yellow Marquee */}
      <marquee
        behavior=""
        direction="left"
        className="fixed bottom-0 left-0 right-0 bg-[#FFFF00] h-6 sm:h-8 lg:h-10 p-0.5 sm:p-1 z-50 text-black text-2xs sm:text-xs lg:text-lg font-bold whitespace-nowrap overflow-hidden"
      >
        <span className="animate-pulse text-red-600 font-extrabold inline-block">
          AICARE 2025 Topics (but not limited to):
        </span>
        <span className="inline-block ml-1 sm:ml-2">Applications of AI in Computing, UAV Networks, Astronomy, Renewable Energy.</span>
        <a href="/conference/tracks" className="text-red-600 underline font-extrabold animate-pulse ml-1 sm:ml-2 inline-block">
          View Tracks
        </a>
      </marquee>
    </div>
  );
};

export default WIE;
