import React from 'react';

const TechnicalProgramCommittee = () => {
  const advisoryMembers = [
    { name: 'Dr. Anirban Mitra', institution: 'HOD CSE, Amity University Kolkata' },
    { name: 'Dr. Subir Gupta', institution: 'HOD CSE AI ML, Haldia Institute of Technology' },
    { name: 'Dr. Bikramjit Sarkar', institution: 'HOD CSE, JIS College of Engineering' },
    { name: 'Dr. Avijit Kumar Chaudhuri', institution: 'Associate Professor, Brainware University' },
    { name: 'Dr. Rahul Kumar Ghosh', institution: 'Associate Professor, Brainware University' },
    { name: 'Dr. Prantosh K. Paul', institution: 'Assistant Professor CIS, Raiganj University' },
    { name: 'Dr. Anjan Bandyopadhyay', institution: 'Assistant Professor, KIIT University' },
    { name: 'Dr. Souvik Pal', institution: 'Associate Professor, Sister Nivedita University' },
    { name: 'Dr. Kedar Nath Das', institution: 'Associate Professor, NIT Silchar' },
    { name: 'Dr. Amit Kumar Singh', institution: 'Assistant Professor, Rajkiya Engineering College' },
    { name: 'Dr. Chandan Kumar Chandam', institution: 'Professor, Department of Electrical Engineering, IIEST Shibpur' },
    { name: 'Prof. Sivaji Chakraborty', institution: 'Professor, Jadavpur University' },
    { name: 'Dr. Monojit Mitra', institution: 'Professor, Electronics and Telecommunication Engineering' },
    { name: 'Dr. Riya Sen', institution: 'Geetanjali Institute of Technical Studies, Udaipur' },
    { name: 'Dr. Sumana Kundu', institution: 'Dr. B. C. Roy Engineering College, Durgapur' },
    { name: 'Dr. Ravi Kant Kumar', institution: 'SRM University, Andhra Pradesh' },
    { name: 'Dr. Prabhat Kumar Upadhyay', institution: 'Birla Institute of Technology' },
    { name: 'Prof. Dr. Ayan Banerjee', institution: 'Indian Institute of Engineering Science and Technology, Shibpur' },
    { name: 'Mr. Aninda Sankar Shukla', institution: 'Mindshare Global' },
    { name: 'Dr. Suman De Sarkar', institution: 'Associate Professor, IISER Kolkata' },
    { name: 'Dr. Manas Roy', institution: 'Assistant Professor, NIT Agartala' },
    { name: 'Dr. Atanu Singha Roy', institution: 'Associate Professor, NIT Meghalaya' },
    { name: 'Dr. Animesh Samanta', institution: 'Assistant Professor, Shiv Nadar University' },
    { name: 'Dr. Ambrish Singh', institution: 'Professor, Central University of Nagaland' },
    { name: 'Dr. Goutam Pramanik', institution: 'Scientist, UGC Division of Atomic Energy' },
    { name: 'Dr. Sabyasachi Chatterjee', institution: 'Assistant Professor, Department of ECE, Heritage Institute of Technology' },
    { name: 'Dr. Kalyan Sundar Kola', institution: 'Associate Professor, Dept of CSE, Brainware University' },
    { name: 'Amitesh Das', institution: 'Assistant Professor, ECE Department, Brainware University' },
    { name: 'Rahmat Ali', institution: 'FOUNDER & CEO, Illicium Motors Pvt Ltd' },
    { name: 'Dr. Rajat Kumar Pal', institution: 'University of Calcutta, Kolkata' },
    { name: 'Dr. Nabendu Chaki', institution: 'University of Calcutta' },
    { name: 'Dr. Rajitha B', institution: 'Motilal Nehru National Institute of Technology Allahabad' },
    { name: 'Dr. Anirban Mukhopadhyay', institution: 'University of Kalyani' },
    { name: 'Dr. Debashish De', institution: 'Maulana Abul Kalam Azad University of Technology' },
    { name: 'Dr. Shivendra Shivani', institution: 'Thapar University, Patiala' },
    { name: 'Dr. Ekramul Hamid', institution: 'Thapar University, Patiala' },
    { name: 'Dr. Chintan Kumar Mandal', institution: 'Jadavpur University' },
    { name: 'Dr. Santi Prasad Maity', institution: 'Indian Institute of Engineering Science and Technology, Shibpur' },
    { name: 'Dr. Asish Kumar Mukhopadhyay', institution: 'Professor Emeritus, IET Bundelkhand University' },
    { name: 'Dr. Apurba Sarkar', institution: 'Indian Institute of Engineering Science and Technology, Shibpur' },
    { name: 'Dr. Jaya Sil', institution: 'Indian Institute of Engineering Science and Technology, Shibpur' },
    { name: 'Dr. Surajit Kumar Roy', institution: 'Indian Institute of Engineering Science and Technology, Shibpur' },
    { name: 'Dr. Nidul Sinha', institution: 'National Institute of Technology, Silchar' },
    { name: 'Dr. Annapa B', institution: 'National Institute of Technology Karnataka, Surathkal' },
    { name: 'Dr. Malay Kule', institution: 'Indian Institute of Engineering Science and Technology, Shibpur' },
    { name: 'Dr. Sankhayan Choudhury', institution: 'University of Calcutta' },
    { name: 'Dr. Sunirmal Khatua', institution: 'University of Calcutta' },
    { name: 'Dr. Pritha Banerjee', institution: 'University of Calcutta' },
    { name: 'Dr. Rajib Das', institution: 'University of Calcutta' },
    { name: 'Dr. Bansibadan Maji', institution: 'National Institute of Technology, Durgapur' },
    { name: 'Dr. Tanvi Agrawal', institution: 'Indian Institute of Technology, Mumbai' },
    { name: 'Dr. Sahil Neelam', institution: 'Punjab Institute of Technology Kapurthala' },
    { name: 'Dr. Parag Kumar Guha Thakurta', institution: 'National Institute of Technology Durgapur' },
    { name: 'Dr. Padmalochan Bera', institution: 'Indian Institute of Technology, Bhubaneswar' },
    { name: 'Dr. Himadri Shekhar Dutta', institution: 'Kalyani Govt. Engineering College' },
    { name: 'Dr. K.K. Shukla', institution: 'Indian Institute of Technology, Banaras Hindu University' },
    { name: 'Dr. Rinki Sharma Ramaiah', institution: 'University of Applied Sciences, Karnataka' },
    { name: 'Dr. Tapas Si', institution: 'University of Engineering & Management, Jaipur' },
    { name: 'Dr. Saradindu Panda', institution: 'Narula Institute of Technology Kolkata' },
    { name: 'Dr. Indranil Chakrabarty', institution: 'International Institute of Information Technology, Hyderabad' },
    { name: 'Mr. Sanjay Saha', institution: 'SAMSUNG, India' },
    { name: 'Dr. Rudra Pratap Ojha', institution: 'G. L. Bajaj Institute of technology and management' },
    { name: 'Dr Soumya Ranjan Mishra', institution: 'School of Computer Engineering, KIIT University' },
    { name: 'Prof Dr Bidisha Bhavani', institution: 'Assistant Professor, JIS University' },
    { name: 'Prof Dr Nipa Biswas', institution: 'Associate Professor, Narula Institute of Technology' },
    { name: 'Mr Shaswata Basu', institution: 'Principal Consultant, INFOSYS' },
    { name: 'Mr Snehasish Bhattacharya', institution: 'TCS Pvt Ltd' },
    { name: 'Mrs Swati Deb', institution: 'Senior Manager, Capgemini' },
    { name: 'Prof Dr Biswajit Ghosh', institution: 'Professor, Techno India Saltlake' },
    { name: 'Prof Dr Ankur Bhattacharjee', institution: 'Assistant Professor, BITS Pilani' },
    { name: 'Dr Joydip Jana', institution: 'RESOLZ Power Pvt Ltd' },
    { name: 'Dr Himadri Shekhar Bhattacharya', institution: 'R&D Engineer, Battery Data Scientist at EXIDE Energy' },
    { name: 'Dr Tamalika Chowdhury', institution: 'Assistant Professor, KLE Technological University' },
    { name: 'Dr. Dhananjoy Bhakta', institution: 'Indian Institute of Information Technology Ranchi' },
    { name: 'Dr. Mandeep K. Chawla', institution: 'MCM DAV College for Women, Chandigarh' },
    { name: 'Dr. Samya Muhuri', institution: 'Thapar Institute of Engineering and Technology' },
    { name: 'Dr. Kousik Dasgupta', institution: 'Kalyani Government Engineering College' },
    { name: 'Dr. Samir Kr Borgohain', institution: 'National Institute of Technology, Silchar' },
    { name: 'Dr. Rik Das', institution: 'Xavier Institute of Social Service' },
    { name: 'Dr. Bhaskar Karn', institution: 'Birla institute of Technology, Mesra' },
    { name: 'Dr. Dhruba Jyoti Bora', institution: 'Madanapalle Institute of Technology' },
    { name: 'Dr. Debashree Devi', institution: 'Indian Institute of Information Technology, Guwahati' },
    { name: 'Mr. Subham Bid', institution: 'Associate at CB Tech, Deutsche Bank' },
    { name: 'Dr. Sandip Das', institution: 'Geetanjali Institute of Technical Studies, Udaipur' },
    { name: 'Mr. Shashwata Banerjee', institution: 'HCL Technologies' },
    { name: 'Ms. Rishmita Saha', institution: 'Capgemini' },
    { name: 'Mr. Aritra Dutta', institution: 'Accenture' },
    { name: 'Dr. Sovan Dalai', institution: 'Professor, Electrical Engineering, Jadavpur University' },
    { name: 'Dr. Samarjeet Bora', institution: 'Professor, Department of Computer Applications, SMIT Sikkim' },
    { name: 'Dr. Harish Sharma', institution: 'Rajasthan Technical University' },
    { name: 'Dr Amar Kishor', institution: 'Magadh University' },
    { name: 'Prof Anupam Das', institution: 'KIIT University' },
    { name: 'Dr. Jayanta Mandal', institution: 'KIIT University' },
    { name: 'Dr. Brojo Kishor Mishra', institution: 'NIST Berhampur' },
    { name: 'Dr. Avijit Chowdhury', institution: 'Brainware University' },
    { name: 'Dr. Sudip Sinha', institution: 'Lynde Group' },
    { name: 'Dr Kousik Bhattacharya', institution: 'Rabindrabharati University' },
    { name: 'Dr Balaam Dey', institution: 'Haldia Institute of Technology' },
    { name: 'Dr Jagannath Samanta', institution: 'Haldia Institute of Technology' },
    { name: 'Dr Sanjukta Chakraborty', institution: 'Seacom Skills University' },
    { name: 'Dr Mauparna Nandan', institution: 'Techno India' },
    { name: 'Malay Halder', institution: 'Aquiver Technologies' },
    { name: 'Koushik Das', institution: 'Aquiver Technologies' }
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
          <h1 className="text-4xl lg:text-5xl font-bold text-blue-600 mb-3">Technical Program Committee</h1>
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

export default TechnicalProgramCommittee;
