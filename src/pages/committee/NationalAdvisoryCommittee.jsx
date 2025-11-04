import React from 'react';

const NationalAdvisoryCommittee = () => {
  const advisoryMembers = [
    { name: 'Prof. (Dr.) Partha Chaudhuri', institution: 'Visiting Professor, School of Advanced Materials, Green Energy and Sensor Systems, IIEST, Shibpur' },
    { name: 'Dr. Syed Minhaz Hossain', institution: 'Associate Professor, Department of Physics, IIEST, Shibpur' },
    { name: 'Dr. Sumita Mukhopadhyay', institution: 'Assistant Professor, School of Advanced Materials, Green Energy and Sensor Systems, IIEST, Shibpur' },
    { name: 'Prof. (Dr.) Sujit K. Biswas', institution: 'Dean (Academic) & Professor, Dept. of Electrical Engg., St. Thomas\' College of Engineering and Technology, Kolkata' },
    { name: 'Prof. (Dr.) Samarjit Sengupta', institution: 'Ex-Professor (Applied Physics Department), University of Calcutta' },
    { name: 'Prof. (Dr.) Siddhartha Sankar Thakur', institution: 'Professor, Department of Electrical Engineering, NIT Durgapur' },
    { name: 'Prof. (Dr.) Pradip Kumar Sadhu', institution: 'Professor (HAG) and Ex-Head, Department Of Electrical Engineering, IIT (ISM), Dhanbad' },
    { name: 'Prof. (Dr.) Prithwiraj Purkait', institution: 'Professor, Department of Power Engineering, Jadavpur University' },
    { name: 'Dr. Ankush Bag', institution: 'Assistant Professor, Department of Electronics and Electrical Engineering, IIT Guwahati' },
    { name: 'Dr. Pritam Kumar Das', institution: 'Associate Professor, Department of Mechanical Engineering, Aditya University' },
    { name: 'Dr. Mithun Das', institution: 'Assistant Professor, School of Nuclear Studies, Jadavpur University' },
    { name: 'Dr. Arindam K. Sil', institution: 'Associate Professor, Department of Electrical Engineering, Jadavpur University' },
    { name: 'Dr. Sajjan Kumar', institution: 'Assistant Professor, Department of Electrical and Electronics Engineering, SSN College of Engineering, Chennai' },
    { name: 'Prof. (Dr.) Suman Chakraborty', institution: 'Professor, Department of Mechanical Engineering & Sir J. C. Bose National Fellow, IIT Kharagpur' },
    { name: 'Prof. (Dr.) Ranjan Ganguly', institution: 'Professor, Department of Power Engineering, Jadavpur University' },
    { name: 'Prof. (Dr.) Amitava Datta', institution: 'Pro Vice-Chancellor, Jadavpur University' },
    { name: 'Prof. (Dr.) Niladri Chakraborty', institution: 'Professor, Department of Power Engineering, Jadavpur University' },
    { name: 'Prof. (Dr.) Kaustuv Kanti Ganguli', institution: 'Associate Professor, College of Interdisciplinary Studies, Zayed University' },
    { name: 'Dr. Joydeep Munshi', institution: 'Lead Scientist at GE Aerospace Research, Pennsylvania, United States' },
    { name: 'Om B. Khadka', institution: 'Project Lead & IT and Development Expert, HELVETAS Swiss' },
    { name: 'Dr. Sudip Sinha', institution: 'Technical Manager, The Linde Group' },
    { name: 'Dr. Chirasree Roy Chowdhury', institution: 'Associate Professor, Electronics and Telecommunication Engineering' },
    { name: 'Dr. Ankita Pramanik', institution: 'Associate Professor, Electronics and Telecommunication Engineering' },
    { name: 'Dr. Prasun Chakrabarti', institution: 'Dean - Engineering and Professor, CSE, Padampat Singhania University, Udaipur' },
    { name: 'Prof. Dr. Dilip K. Banerjee', institution: 'Former Pro VC, Central University of Jharkhand, Ranchi' },
    { name: 'Dr. Goutam Panigrahi', institution: 'Assistant Professor, NIT Durgapur' },
    { name: 'Dr. Biswapati Jana', institution: 'HOD Computer Science, Vidyasagar University' },
    { name: 'Prof. Dr. Samarjit Kar', institution: 'Professor, NIT Durgapur' },
    { name: 'Dr. Amar Kishore', institution: 'Assistant Professor, Magadh University' },
    { name: 'Dr. Jagdish Chand Bansal', institution: 'Associate Professor, South Asian University, New Delhi' },
    { name: 'Dr. Rajneesh Talwar', institution: 'Dean, Chitkara University' },
    { name: 'Dr. Pawanesh Abrol', institution: 'Professor and Head, Computer Science and IT, University of Jammu' },
    { name: 'Dr. A. Lenin Fred', institution: 'Principal, Mar Ephraem College of Engineering & Technology, Kanyakumari' },
    { name: 'Dr. Narendra Gupta', institution: 'Director Education, SKN Agriculture University, Rajasthan' },
    { name: 'Prof. Dr. G.L. Sharma', institution: 'Director, Sikkim Manipal Institute of Technology, Sikkim' },
    { name: 'Anjan Saha', institution: 'Scientist, DRDO' },
    { name: 'Dr. Abhishek Das', institution: 'Associate Professor, CSE, Aliah University, Kolkata' },
    { name: 'Dr. Anirban Chakraborty', institution: 'Scientist C, DRDO, Bangalore' },
    { name: 'Dr. Subrata Kumar Ghosh', institution: 'Professor, IIT(ISM), Dhanbad' },
    { name: 'Dr. Niranjan Kumar', institution: 'Associate Professor, IIT(ISM), Dhanbad' },
    { name: 'Dr. Ankit Kotia', institution: 'Assistant Professor, NIMS University, Jaipur, Rajasthan' },
    { name: 'Dr. Ranjan Basak', institution: 'Associate Professor, NIT Sikkim' },
    { name: 'Dr. Biswajit Roy', institution: 'Assistant Professor, NIT Sikkim' },
    { name: 'Dr. Debajit Saha', institution: 'Assistant Professor, NIT Sikkim' },
    { name: 'Prof. (Dr.) Ranjay Hazra', institution: 'Associate Professor, Department of ECE, NIT, Silchar' },
    { name: 'Prof. (Dr.) Prabir Banerjee', institution: 'Professor & Head, Department of Electronics and Communication Engineering, Heritage Institute of Technology, Kolkata' },
    { name: 'Dr. Arpan Kumar Pradhan', institution: 'Assistant Professor, Department of Electrical Engineering, Jadavpur University, Kolkata' },
    { name: 'Prof. (Dr.) Anindita Kundu', institution: 'Associate Professor, Software Systems, Vellore Institute of Technology, Vellore' },
    { name: 'Prof. (Dr.) Sandip Bhattacharya', institution: 'Professor & Head of ECE Department, SR University, Telengana' },
    { name: 'Dr. Bikas Santra', institution: 'Assistant Professor, School of AI and Data Science, IIT Jodhpur' },
    { name: 'Prof (Dr.) Abhijit Bhowmick', institution: 'Professor Grade 1, Communication Engineering, Vellore Institute of Technology, Vellore' },
    { name: 'Dr. Jitendra Nath Bera', institution: 'Professor, Electrical Engineering, Department of Applied Physics, University of Calcutta' },
    { name: 'Dr. Kaushik Das Sharma', institution: 'Professor, Electrical Engineering, Department of Applied Physics, University of Calcutta' },
    { name: 'Prof. (Dr.) Diptendu Sinha Roy', institution: 'Professor, Dean (R&C), National Institute of Technology Meghalaya' },
    { name: 'Dr. Dilip Kumar Shaw', institution: 'Associate Professor, National Institute of Technology Jamshedpur' },
    { name: 'Dr. K. Hemant Kumar Reddy', institution: 'Professor, Vellore Institute of Technology AP' },
    { name: 'Dr. Sanjoy Choudhury', institution: 'Scientist D, S. N. Bose National Centre for Basic Sciences' },
    { name: 'Dr. Rabindra Kumar Barik', institution: 'Associate Professor, KIIT University' },
    { name: 'Dr. Ahin Banerjee', institution: 'Lead Engineer, Mahindra & Mahindra, MRV Chennai' },
    { name: 'Dr. Prosun Mandal', institution: 'Assistant Professor, NIT Silchar' },
    { name: 'Dr. Gourhari Ghosh', institution: 'Assistant Professor, Department of Mechanical Engineering, IIT Jodhpur' },
    { name: 'Dr. Ranjan Kumar Ghadai', institution: 'Manipal Institute of Technology, Manipal Academy of Higher Education, Manipal' },
    { name: 'Dr. Subhas Chandra Mondal', institution: 'Professor & Head, Department of Mechanical Engineering, IIEST Shibpur' },
    { name: 'Dr. Bijan Kumar Mandal', institution: 'Professor, Mechanical Engineering, IIEST Shibpur' },
    { name: 'Dr. Sudip Ghosh', institution: 'Associate Professor, Mechanical Engineering, IIEST Shibpur' },
    { name: 'Dr. Apurba Das', institution: 'Assistant Professor, Mechanical Engineering, IIEST Shibpur' },
    { name: 'Dr. Kaustav Pradhan', institution: 'Assistant Professor, Mechanical Engineering, IIEST Shibpur' },
    { name: 'Dr. Arpan Kumar Mondal', institution: 'Assistant Professor, Mechanical Engineering, NITTR Kolkata' },
    { name: 'Dr. Nirmal Kumar Mandal', institution: 'NITTR Kolkata' },
    { name: 'Dr. Subrata Mondal', institution: 'Associate Professor, Mechanical Engineering, NITTR Kolkata' },
    { name: 'Dr. Uday S. Dixit', institution: 'Professor, IIT Guwahati' },
    { name: 'Dr. Abhinaba Chatterjee', institution: 'Assistant Professor, BITS Pilani, K K Birla Goa Campus' },
    { name: 'Dr. Pratik Chattopadhyay', institution: 'Assistant Professor, Department of Computer Science and Engineering, IIT(BHU), Varanasi' },
    { name: 'Dr. Soumen Moulik', institution: 'Assistant Professor, Department of Computer Science and Engineering, NIT Meghalaya' },
    { name: 'Prof. (Dr.) Partha Pratim Ray', institution: 'Professor, Department of Physics, Jadavpur University' },
    { name: 'Prof. (Dr.) Debasish Biswas', institution: 'Professor, Department of Physics, Jadavpur University' },
    { name: 'Prof. (Dr.) Puspendu Sahu', institution: 'Professor, Department of Physics, Jadavpur University' },
    { name: 'Prof. (Dr.) Kaustuv Das', institution: 'Associate Professor, Department of Physics, Jadavpur University' },
    { name: 'Prof. (Dr.) Saikat Kumar Seth', institution: 'Associate Professor, Department of Physics, Jadavpur University' },
    { name: 'Prof. (Dr.) Animesh Layek', institution: 'Assistant Professor, Department of Physics, Jadavpur University' },
    { name: 'Prof. (Dr.) Rituparna Mondal', institution: 'Assistant Professor, Department of Physics, Jadavpur University' }
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
          <h1 className="text-4xl lg:text-5xl font-bold text-blue-600 mb-3">National Advisory Committee</h1>
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

export default NationalAdvisoryCommittee;
