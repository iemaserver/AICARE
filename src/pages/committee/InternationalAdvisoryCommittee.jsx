import React from 'react';

const InternationalAdvisoryCommittee = () => {
  const advisoryMembers = [
    { name: 'Prof. Dr. Sandeep Poddar', institution: 'Deputy Vice Chancellor (Research & Innovation), Lincoln University College, Malaysia' },
    { name: 'Dr. Chong Wen Tong', institution: 'Professor in the Department of Mechanical Engineering, Universiti Malaya' },
    { name: 'Om B Khadka', institution: 'Project Lead & IT and Development Expert, HELVETAS Swiss' },
    { name: 'Dr. Nor Ashidi Mat Isa', institution: 'Universiti Sains Malaysia, Malaysia' },
    { name: 'Dr. Vincenzo Piuri', institution: 'Universita\' degli Studi di Milano, Milano, Italy' },
    { name: 'Dr. Hadj Bourdoucen', institution: 'Sultan Qaboos University, Oman' },
    { name: 'Dr. Nathalie Japkowicz', institution: 'American University, USA' },
    { name: 'Dr. Erik Cambria', institution: 'Nanyang Technological University, Singapore' },
    { name: 'Dr. Michel Plaisent', institution: 'University of Quebec in Montreal, Canada' },
    { name: 'Dr. Adam W. Skorek', institution: 'University of Québec at Trois-Rivières, Canada' }
  ];

  const MemberCard = ({ member }) => (
    <div className="bg-gradient-to-br from-white to-blue-50 shadow-md rounded-lg p-4 flex items-center text-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:from-blue-50 hover:to-purple-50 border border-blue-100">
      <div className="w-full flex flex-col items-center">
        <div className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-2"></div>
        <p className="text-blue-900 font-bold text-sm md:text-base mb-0.5 hover:text-purple-600 transition-colors">{member.name}</p>
        <p className="text-gray-700 text-xs font-semibold bg-blue-100 bg-opacity-50 px-2 py-0.5 rounded-full mb-1">{member.institution}</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-cover bg-center bg-fixed mt-8 lg:mt-20 pb-20" style={{ backgroundImage: "url('/assets/AboutBg.png')" }}>
      <div className="max-w-6xl mx-auto px-4 py-8 lg:py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-blue-600 mb-3">International Advisory Committee</h1>
          <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {advisoryMembers.map((member, idx) => (
            <MemberCard key={idx} member={member} />
          ))}
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

export default InternationalAdvisoryCommittee;
