import { Link } from 'react-router-dom';

const TrackOfConference = () => {
  const tracks = [
    {
      title: 'Applications of AI in Computing',
      image: '../assets/COMPUTING.png',
      chairs: ['Prof Dr. Buddhadeb Pradhan', 'Prof. Dr. Siddhartha Roy'],
      topics: [
        'Machine Learning and Deep Learning Innovations',
        'Natural Language Processing Applications',
        'AI in Cybersecurity',
        'Ethics and Fairness in AI',
        'AI for Fog Computing',
        'AI in Cloud Computing',
        'AI for Edge Computing',
        'Reinforcement Learning Techniques',
        'Computer Vision and Image Processing',
        'Explainable AI (XAI)',
        'AI for IIoT (Industrial Internet of Things)',
        'Data Privacy and AI',
        'AI-Driven Software Engineering',
        'AI in Robotics and Automation',
        'Augmented Reality and AI',
        'AI for Predictive Analytics',
        'AI in Healthcare Computing',
        'Quantum Computing and AI',
        'AI for Resource Optimization',
      ]
    },
    {
      title: 'UAV Networks',
      image: '../assets/UAV.png',
      chairs: ['Prof. Dr Shreya Nag', 'Prof. Dr Ayan Chatterjee', 'Prof. Dr Anirban Ganguly'],
      topics: [
        'AI-enabled UAV applications in Autonomous Navigation and Flight Control',
        'Computer Vision Techniques for Smart UAVs',
        'AI-Enhanced Object Detection and Tracking',
        'Swarm Intelligence and Cooperative UAV Systems',
        'Machine Learning for Environmental Monitoring',
        'AI-enabled UAV Applications in Precision Agriculture',
        'Data Processing and Analysis for UAV Imagery',
        'Ethics and Regulations in UAV AI Applications',
        'UAVs in Search and Rescue Operations',
        'Security Challenges in UAV Operations and AI Solutions',
        'New opportunities/challenges/use cases for UAV-enabled IoT',
        'UAV swarming and coordination for IoT deployments',
        'UAV-assisted data collection and analytics for IoT applications',
        'Protocols and architectures for UAV-enabled MEC',
        'Computation offloading for UAV-enabled MEC',
        'UAV\'s trajectory design for UAV-enabled IoT',
        'Spectrum management and multiple access schemes for UAV-enabled IoT',
        'Green energy powered UAV-enabled IoT networks',
        'MIMO/massive MIMO/millimeter wave technologies for UAV-enabled IoT',
        'Quality of Service provisioning for UAV-enabled IoT',
        'Network security and information assurance for UAV-enabled IoT',
      ]
    },
    {
      title: 'Astronomy',
      image: '../assets/ASTRONOMY.png',
      chairs: ['Prof. Dr Arkabrata Gupta', 'Prof Dr Joy Ganguly', 'Prof Suparna Sau'],
      topics: [
        'Astrophysical Data Analysis',
        'Star Formation',
        'Nucleosynthesis',
        'Solar Astrophysics',
        'Image Processing for Astronomy',
        'Exoplanet Detection and Characterization',
        'Time Series Analysis of Astronomical Data',
        'Telescope Automation and Control',
        'Big Data Challenges in Astronomy',
        'Simulations of Cosmic Phenomena',
        'Galaxy Evolution',
        'Galaxy Classification',
        'Radio Astronomy',
        'Gravitational Wave Detection',
        'Stellar Evolution',
        'Large Astronomical Surveys',
        'Cosmological Simulations and Modelling',
        'Space Mission Planning and Operations',
        'Anomaly Detection in Astronomical Observations',
        'Visualization Techniques for Astronomical Data',
        'Quantum Computing and AI in Astronomy',
      ]
    },
    {
      title: 'Renewable Energy',
      image: '../assets/RENEWABLE.png',
      chairs: ['Prof Dr Soumyendu Banerjee', 'Prof Dr. Sananda Pal', 'Prof Dr. Debanjana Datta Mitra'],
      topics: [
        'Machine Learning for Renewable Energy Forecasting',
        'AI in Smart Grid Management and Optimization',
        'Predictive Maintenance for Renewable Energy Systems',
        'AI-Driven Energy Storage Solutions',
        'Data Analytics for Solar Energy Performance',
        'Wind Energy Prediction and Optimization using AI',
        'AI in Electric Vehicle Integration with Renewable Energy',
        'Decentralized Energy Management using Blockchain and AI',
        'AI for Energy Demand Response Strategies',
        'Computer Vision for Solar Panel Inspection',
        'Optimizing Energy Efficiency in Buildings with AI',
        'Green energy technologies',
        'AI in Hydropower Generation and Management',
        'Artificial Intelligence for Renewable Energy Microgrids',
        'Environmental Impact Assessment using AI Techniques',
        'Integration of AI in Climate Change Mitigation Strategies',
        'AI and IoT for Enhanced Energy Monitoring Systems',
        'Smart Renewable Energy System Design with AI',
        'Data-Driven Policy Making in Renewable Energy',
        'Future Trends: AI and Next-Generation Renewable Technologies',
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 mt-8 lg:mt-20 pb-20">
      {/* Header */}
      <section className="relative flex flex-col items-center justify-center py-8 sm:py-12 lg:py-16 px-3 sm:px-4 overflow-hidden">
        {/* Background decoration - hidden on mobile */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 hidden sm:block"></div>
        <div className="absolute -top-40 -right-40 w-40 sm:w-60 md:w-80 h-40 sm:h-60 md:h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 sm:opacity-30 animate-pulse hidden sm:block"></div>
        <div className="absolute -bottom-40 -left-40 w-40 sm:w-60 md:w-80 h-40 sm:h-60 md:h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 sm:opacity-30 animate-pulse hidden sm:block"></div>
        
        <div className="relative z-10 text-center w-full">
          <div className="inline-flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <div className="w-2 sm:w-3 h-2 sm:h-3 bg-blue-500 rounded-full animate-bounce"></div>
            <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-purple-500 rounded-full animate-bounce delay-100"></div>
            <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 bg-indigo-500 rounded-full animate-bounce delay-200"></div>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4 sm:mb-6 tracking-tight leading-tight">
            Conference Tracks
          </h1>
          
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-4 sm:mb-6"></div>
          
          <p className="text-center text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl max-w-4xl leading-relaxed font-medium px-2">
            Explore the four major tracks of AICARE 2025 and discover the latest advancements in AI
          </p>
          
          <div className="mt-6 sm:mt-8 flex justify-center gap-1.5 sm:gap-2">
            <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-purple-500 rounded-full animate-pulse delay-75"></div>
            <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-indigo-500 rounded-full animate-pulse delay-150"></div>
          </div>
        </div>
      </section>

      {/* Tracks Grid */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tracks.map((track, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-300 border border-gray-100 hover:border-blue-200"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden h-56 bg-gradient-to-br from-blue-400 to-indigo-600">
                <img
                  src={track.image}
                  alt={track.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
                {/* Track Number Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg text-blue-600 shadow-lg">
                  {index + 1}
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Title */}
                <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6 group-hover:scale-105 transform transition duration-300">
                  {track.title}
                </h2>

                {/* Track Chairs */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-5 mb-6 border-l-4 border-blue-500">
                  <div className="flex items-center mb-3">
                    <h3 className="font-bold text-blue-900">Track Chairs</h3>
                  </div>
                  <ul className="space-y-2">
                    {track.chairs.map((chair, idx) => (
                      <li key={idx} className="text-blue-700 font-medium text-sm">
                        • {chair}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Topics */}
                <div>
                  <div className="flex items-center mb-4">
                    <h3 className="font-bold text-gray-900">Research Topics</h3>
                    <span className="ml-auto text-xs font-semibold text-indigo-600 bg-indigo-100 px-3 py-1 rounded-full">
                      {track.topics.length} topics
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {track.topics.map((topic, idx) => (
                      <li key={idx} className="text-gray-700 flex items-start text-sm leading-relaxed hover:text-blue-600 transition">
                        <span className="text-indigo-500 mr-2.5 font-bold flex-shrink-0 mt-0.5">▸</span>
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Best Student Paper Award */}
      <section className="max-w-3xl mx-auto px-4 py-8 lg:py-12">
        <div className="relative bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 rounded-xl lg:rounded-2xl p-6 lg:p-8 shadow-lg lg:shadow-xl border-2 border-amber-200 overflow-hidden group hover:shadow-xl lg:hover:shadow-2xl transition-all duration-300">
          {/* Decorative background */}
          <div className="absolute inset-0 bg-gradient-to-r from-amber-400/5 to-orange-400/5 group-hover:from-amber-400/10 group-hover:to-orange-400/10 transition"></div>
          
          <div className="relative z-10">
            <div className="flex items-start gap-3 lg:gap-4 mb-4 lg:mb-6">
              <div className="flex-1 min-w-0">
                <h3 className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">Best Student Paper Award</h3>
                {/* <div className="h-1 w-24 lg:w-32 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mt-2"></div> */}
              </div>
            </div>
            <p className="text-gray-700 text-sm lg:text-base leading-relaxed font-medium lg:ml-20">
              There will be <span className="font-bold text-amber-700">three (3) best student paper awards</span> in three different tracks. A paper will be considered a student paper if <span className="font-bold text-amber-700">all the authors are students only</span>. Otherwise, a full registration fee is applicable.
            </p>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="max-w-4xl mx-auto px-4 py-8 lg:py-12">
        <div className="text-center mb-6 lg:mb-10">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2 lg:mb-4">Download Resources</h2>
          <p className="text-gray-600 text-sm lg:text-lg">Get detailed information about the conference tracks and event materials</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8">
          {/* Print/Download Tracks */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl lg:rounded-2xl blur-lg opacity-30 group-hover:opacity-100 transition duration-300"></div>
            <button
              onClick={() => window.print()}
              className="relative w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-semibold lg:font-bold py-4 lg:py-6 px-4 lg:px-8 rounded-xl lg:rounded-2xl transition-all duration-300 transform group-hover:-translate-y-1 lg:group-hover:-translate-y-2 shadow-lg"
            >
              <div className="text-base lg:text-lg mb-1 lg:mb-2">Conference Tracks</div>
              <div className="text-xs lg:text-sm opacity-90">Print or Save as PDF</div>
            </button>
          </div>
          
          {/* Download Brochure */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-700 rounded-xl lg:rounded-2xl blur-lg opacity-30 group-hover:opacity-100 transition duration-300"></div>
            <a
              href="../assets/AICARE.pdf"
              download
              className="relative w-full block bg-gradient-to-r from-green-500 to-emerald-700 hover:from-green-600 hover:to-emerald-800 text-white font-semibold lg:font-bold py-4 lg:py-6 px-4 lg:px-8 rounded-xl lg:rounded-2xl transition-all duration-300 transform group-hover:-translate-y-1 lg:group-hover:-translate-y-2 shadow-lg text-center"
            >
              <div className="text-base lg:text-lg mb-1 lg:mb-2">Event Brochure</div>
              <div className="text-xs lg:text-sm opacity-90">Download PDF</div>
            </a>
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
        <a href="#" className="text-red-600 underline font-extrabold animate-pulse ml-2 inline-block">
          View Tracks
        </a>
      </marquee>
    </div>
  );
};

export default TrackOfConference;
