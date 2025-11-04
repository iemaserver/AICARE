import React from 'react';

const OrganizingCommittee = () => {
  const MemberCard = ({ member, fullWidth = false }) => (
    <div className={`bg-gradient-to-br from-white to-blue-50 shadow-md rounded-lg p-4 flex items-center text-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:from-blue-50 hover:to-purple-50 border border-blue-100 ${fullWidth ? 'col-span-1 md:col-span-2' : ''}`}>
      <div className="w-full flex flex-col items-center">
        <div className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-2"></div>
        <h2 className="text-xs md:text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-2 uppercase tracking-tight">{member.role}</h2>
        {member.name && <p className="text-blue-900 font-bold text-sm md:text-base mb-0.5 hover:text-purple-600 transition-colors">{member.name}</p>}
        {member.names && member.names.map((n, idx) => (
          <p key={idx} className="text-blue-900 font-bold text-sm md:text-base mb-0.5 hover:text-purple-600 transition-colors">{n.name}</p>
        ))}
        {member.position && <p className="text-gray-700 text-xs font-semibold bg-blue-100 bg-opacity-50 px-2 py-0.5 rounded-full mb-1">{member.position}</p>}
        {member.positions && member.positions.map((pos, idx) => (
          <p key={idx} className="text-gray-700 text-xs font-semibold bg-blue-100 bg-opacity-50 px-2 py-0.5 rounded-full mb-1">{pos}</p>
        ))}
        {member.institution && <p className="italic text-gray-600 text-xs mt-1 text-center leading-tight">{member.institution}</p>}
        {member.institutions && member.institutions.map((inst, idx) => (
          <p key={idx} className="italic text-gray-600 text-xs text-center leading-tight">{inst}</p>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-cover bg-center bg-fixed mt-8 lg:mt-20 pb-20" style={{ backgroundImage: "url('/assets/AboutBg.png')" }}>
      <div className="max-w-6xl mx-auto px-4 py-8 lg:py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-blue-600 mb-3">Organizing Committee</h1>
          <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Committee Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Chief Patron - Full Width */}
          <MemberCard member={{
            role: 'Chief Patron',
            name: 'Prof. Banani Chakrabarti',
            position: 'Chancellor',
            institution: 'University of Engineering and Management, Kolkata'
          }} fullWidth={true} />

          {/* General Chairs - 2 columns */}
          <MemberCard member={{
            role: 'General Chair',
            name: 'Prof Dr. Valentina Emilia Balas',
            position: 'Professor',
            institution: 'Aurel Vlaicu University of Arad / Academy of Romanian Scientists, ROMANIA'
          }} />
          <MemberCard member={{
            role: 'General Co-Chair',
            name: 'Prof. (Dr.) Satyajit Chakrabarti',
            position: 'Pro Vice Chancellor',
            institution: 'University of Engineering and Management, Kolkata'
          }} />

          {/* Co-Patron - Full Width with Two Names Side by Side */}
          <div className="bg-gradient-to-br from-white to-blue-50 shadow-md rounded-lg p-4 flex items-center text-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:from-blue-50 hover:to-purple-50 border border-blue-100 col-span-1 md:col-span-2">
            <div className="w-full flex flex-col items-center">
              <div className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-2"></div>
              <h2 className="text-xs md:text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-3 uppercase tracking-tight">Co-Patron</h2>
              <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-8 w-full">
                <div className="flex-1 flex flex-col items-center">
                  <p className="text-blue-900 font-bold text-sm md:text-base mb-0.5 hover:text-purple-600 transition-colors">Prof. (Dr.) Sukalyan Goswami</p>
                  <p className="text-gray-700 text-xs font-semibold bg-blue-100 bg-opacity-50 px-2 py-0.5 rounded-full mb-1">Registrar</p>
                  <p className="italic text-gray-600 text-xs text-center leading-tight">University of Engineering and Management, Kolkata</p>
                </div>
                <div className="hidden md:flex items-center">
                  <div className="h-8 w-0.5 bg-gradient-to-b from-blue-300 to-purple-300 rounded-full"></div>
                </div>
                <div className="flex-1 flex flex-col items-center">
                  <p className="text-blue-900 font-bold text-sm md:text-base mb-0.5 hover:text-purple-600 transition-colors">Prof. (Dr.) Abir Chatterjee</p>
                  <p className="text-gray-700 text-xs font-semibold bg-blue-100 bg-opacity-50 px-2 py-0.5 rounded-full mb-1">Dean-Research</p>
                  <p className="italic text-gray-600 text-xs text-center leading-tight">University of Engineering and Management, Kolkata</p>
                </div>
              </div>
            </div>
          </div>

          {/* Convener - Full Width */}
          <MemberCard member={{
            role: 'Convener',
            name: 'Prof. (Dr.) Rajashree Paul',
            position: 'Deputy Dean (RESEARCH) & Director (IQAC)',
            institution: 'University of Engineering and Management, Kolkata'
          }} fullWidth={true} />

          {/* Conference Chair - Full Width */}
          <MemberCard member={{
            role: 'Conference Chair',
            name: 'Prof. (Dr.) Rajiv Ganguly',
            position: 'Dean-Science',
            institution: 'University of Engineering and Management, Kolkata'
          }} fullWidth={true} />

          {/* Organizing Chair - Full Width */}
          <MemberCard member={{
            role: 'Organizing Chair',
            name: 'Prof. (Dr.) Sudipta Basu Pal(CST-CSIT)',
            position: 'Associate professor',
            institution: 'University of Engineering and Management, Kolkata'
          }} fullWidth={true} />

          {/* Technical Chairs - 2 columns */}
          <MemberCard member={{
            role: 'Technical Programme Committee Chair',
            name: 'Prof. (Dr.) Kamakhya Prasad Ghatak'
          }} />
          <MemberCard member={{
            role: 'Technical Programme Committee Co-Chair',
            name: 'Prof. (Dr.) Chiradeep Mukherjee (CST-CSIT)',
            position: 'Associate professor',
            institution: 'University of Engineering and Management, Kolkata'
          }} />

          {/* Publication Chairs - 2 columns */}
          <MemberCard member={{
            role: 'Publication Chair',
            name: 'Prof. (Dr.) Arnab Ghosh (Elec)',
            position: 'Associate professor & HOD (Office of the Sustainability)',
            institution: 'University of Engineering and Management, Kolkata'
          }} />
          <MemberCard member={{
            role: 'Publication Co-Chair',
            names: [
              { name: 'Prof. (Dr.) Arijeet Ghosh CSE(IOT)' },
              { name: 'Prof. (Dr.) Susmita Biswas CSE(IOT)' }
            ],
            position: 'Associate professor',
            institution: 'University of Engineering and Management, Kolkata'
          }} />

          {/* Finance Chairs - 2 columns */}
          <MemberCard member={{
            role: 'Finance Chair',
            name: 'Prof. (Dr.) Tanay Pramanik (BSH)',
            position: 'Associate professor',
            institution: 'University of Engineering and Management, Kolkata'
          }} />
          <MemberCard member={{
            role: 'Finance Co-Chair',
            name: 'Prof. (Dr.) Sayantan Sil (BSH)',
            position: 'Associate professor',
            institution: 'University of Engineering and Management, Kolkata'
          }} />

          {/* Publicity Chairs - 2 columns + 1 */}
          <MemberCard member={{
            role: 'Publicity Chair',
            name: 'Prof. Anirban Das (Comput. Appl.)',
            position: 'Associate professor',
            institution: 'University of Engineering and Management, Kolkata'
          }} />
          <MemberCard member={{
            role: 'Publicity Co-Chair',
            names: [
              { name: 'Prof. Sujata Ghatak (Computer Application)' },
              { name: 'Prof. (Dr.) Maumita Das (ECE)' }
            ],
            position: 'Associate professor',
            institution: 'University of Engineering and Management, Kolkata'
          }} />
          <MemberCard member={{
            role: 'Publicity Co-Chair',
            name: 'Prof. Isita Chandra',
            institution: 'University of Engineering and Management, Kolkata'
          }} />

          {/* Hospitality Chairs - 2 columns */}
          <MemberCard member={{
            role: 'Hospitality Chair',
            name: 'Prof. Koustov Mondol',
            position: 'Associate professor & HOD (Robotics and AI)',
            institution: 'University of Engineering and Management, Kolkata'
          }} />
          <MemberCard member={{
            role: 'Hospitality Co-Chair',
            names: [
              { name: 'Prof. Subrata Mondal (Elec)' },
              { name: 'Prof. (Dr.) Abhisek Halder (BSH)' }
            ],
            position: 'Assistant Professor',
            institution: 'University of Engineering and Management, Kolkata'
          }} />

          {/* Industry Chairs - 2 columns + 1 */}
          <MemberCard member={{
            role: 'Industry Chair',
            name: 'Prof. (Dr.) Gautam Dalapati',
            positions: ['CEO', 'Founder and CTO'],
            institutions: ['Sunkonnect Pvt Ltd, Singapore', 'Hydrogen Innovation Pvt Ltd']
          }} />
          <MemberCard member={{
            role: 'Industry Co-Chair',
            name: 'Prof. Sukalyan Mukherjee',
            position: 'General Manager',
            institution: 'MOVE Mobility'
          }} />
          <MemberCard member={{
            role: 'Industry Co-Chair',
            name: 'Dr Chittabrata Ghosh',
            position: 'Senior Architect',
            institution: 'Apple INC'
          }} />
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

export default OrganizingCommittee;
