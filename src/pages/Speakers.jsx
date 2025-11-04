import React from 'react';

const Speakers = () => {
  const speakers = [
    {
      name: 'Prof Dr. Rolf Drechsler',
      designation: 'University of Bremen, Germany',
      image: '/assets/Drechsler.png',
      bio: 'Prof Dr. Rolf Drechsler is a Full Professor and Head of the Group of Computer Architecture, Institute of Computer Science, at the University of Bremen, Germany. In 2011, he additionally became the Director of the Cyber-Physical Systems Group at the German Research Center for Artificial Intelligence (DFKI) in Bremen. His current research interests include the development and design of data structures and algorithms with a focus on circuit and system design. He is an ACM Fellow and an IEEE Fellow.'
    },
    {
      name: 'Prof Dr. Hiranmay Saha',
      designation: 'Chair Professor, IIEST Shibpur',
      image: '/assets/Hiranmay_Saha.png',
      bio: 'Prof. Dr. Hiranmay Saha has over 50 years of teaching and research experience. He was with the Department of Physics, University of Kalyani, Kalyani, India, and also with the Department of Electronics and Telecommunication Engineering, Jadavpur University, Kolkata, India. He is currently a Chair Professor, and also a Coordinator with the Center of Excellence for Green Energy and Sensor Systems, Institute of Engineering Science and Technology, Shibpur, India. Currently, he is working as a Visiting Professor at the School of Advanced Materials, Green Energy, and Sensor Systems, IIEST Shibpur, India.'
    },
    {
      name: 'Prof Dr. Ajit Kembhavi',
      designation: 'Principal Investigator, Pune Knowledge Cluster',
      image: '/assets/kembhavi.png',
      bio: 'Prof. Dr. Ajit Kembhavi is the Principal Investigator of the Pune Knowledge Cluster, along with Professor L. S. Shashidhara. He is a Professor Emeritus and former Raja Ramanna Fellow at the Inter-University Centre for Astronomy and Astrophysics (IUCAA), Pune, and was the Director there until August 2015. Prof. Kembhavi is a distinguished astronomer who works on galaxies, quasars, and other extragalactic objects, along with various areas of high energy astrophysics, including X-ray and radio pulsars. He has been a member of the Space Commission and is currently a member of ISRO\'s Apex Science Board. Prof. Kembhavi is the former Vice-President of the International Astronomical Union and former President of the Astronomical Society of India. He is also the President of Jyotirvidya Parisanstha, Poona, India\'s oldest association of amateur astronomers, established in 1944.'
    },
    {
      name: 'Prof Dr. Asis Kumar Chattopadhyay',
      designation: 'Visiting Professor, Indian Statistical Institute',
      image: '/assets/Asis_Kumar_Chattopadhyay.png',
      bio: 'Prof. Asis Kumar Chattopadhyay was the former Vice-Chancellor (interim), Pro-Vice Chancellor for Academic Affairs and Professor of Statistics at the University of Calcutta. After retiring from Calcutta University on December 31, 2024, he is currently a Visiting Professor at the Indian Statistical Institute, Kolkata. He is also the Coordinator of the IUCAA Centre for Astronomy Research and Development (ICARD), Kolkata. Prof. Chattopadhyay has been a Visiting Associate at the Inter University Centre for Astronomy and Astrophysics (IUCAA), Pune since 2005. His book, jointly written with Professor Tanuka Chattopadhyay, entitled Statistical Methods for Astronomical Data Analysis, Springer Series in Astrostatistics, New York, 2014, was selected under the category of "Outstanding Publication in Astrostatistics-2016" by the International Astrostatistics Association.'
    },
    {
      name: 'Dr. Tanumay Manna',
      designation: 'Senior Research Specialist, Nokia Standards',
      image: '/assets/Manna.png',
      bio: 'Dr. Tanumay Manna is currently working in Nokia Standards, Bangalore as a Senior Research Specialist in 3GPP standardization. He has over 12 years of experience in industry, universities, and research laboratories. He is also a Senior IEEE member of the Bangalore section. He is an inventor of over 60 patents and has authored many peer-reviewed scientific journals (including IEEE Transactions), book chapters, and conference proceedings. An IEEE Senior Member recognized for voluntary services in IEEE through the organization of seminars, distinguished lecturer programs, and student chapter activities.'
    },
    {
      name: 'Prof. Dr. Saptarshi Sengupta',
      designation: 'Assistant Professor, San José State University, USA',
      image: '/assets/Saptarshi.jpg',
      bio: 'Prof. Dr. Saptarshi Sengupta is an Assistant Professor in the Department of Computer Science at San José State University (California State University - San José), USA, and a computational scientist working at the intersection of Cyber-Physical Systems and Machine Learning. He leads the Machine Intelligence and Complex Systems (MICoSys) Lab at SJSU, where his research focuses on integrating machine learning and nature-inspired computing for the analysis of complex systems, with particular emphasis on risk quantification and resilience modeling. Prof. Sengupta actively collaborates with local entities across Silicon Valley and beyond, driving innovation through scalable, real-world applications of intelligent systems. In 2023, Prof. Sengupta was awarded the prestigious EB-1A Extraordinary Ability classification by the USCIS, recognizing his strong contributions to research in CPS, AI, and Optimization. He has been a member of several organizations, including the IEEE, the American Statistical Association – San Francisco Bay Area Chapter, and Sigma Xi.'
    },
    {
      name: 'Prof. Luís Miguel Cardoso',
      designation: 'Professor, Polytechnic Institute of Portalegre, Portugal',
      image: '/assets/placeholder.png',
      bio: 'Luís Miguel Cardoso holds a PhD in Modern Languages and Literatures, in the speciality of Comparative Literature from the University of Coimbra, Portugal. He was Dean of the School of Education and Social Sciences of the Polytechnic Institute of Portalegre, Portugal, between 2010 and 2018 and Deputy Director of the Master in Media and Society. He was President of ARIPESE, Association of Reflection and Intervention in the Educational Policy of Higher Education Schools in Portugal (2015 – 2018). Professor at the Department of Language and Communication Sciences at the School of Education and Social Sciences of the Polytechnic Institute of Portalegre, Portugal, he has been a professor of Higher Education since 1995 and is currently a researcher at the Centre for Comparative Studies at the University of Lisbon and CARE - Research Centre on Health and Social Sciences. His main areas of teaching and research are Sciences of Language and Communication, Pedagogical Innovation, Literacies, Education, Higher Education and Social Responsibility, and Literature and Cinema.'
    }
  ];

  const SpeakerCard = ({ speaker }) => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-blue-200 transition-all duration-300 transform hover:shadow-xl group">
      <div className="flex flex-col md:flex-row items-center gap-3 sm:gap-4 md:gap-5 p-4 sm:p-5 md:p-6 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-blue-700">
        {/* Image Section */}
        <div className="flex-shrink-0 md:w-1/3 flex flex-col items-center">
          <div className="w-28 sm:w-32 md:w-40 h-28 sm:h-32 md:h-40 rounded-full border-3 sm:border-4 border-blue-600 overflow-hidden shadow-lg group-hover:border-white transition-colors">
            {speaker.image ? (
              <img
                src={speaker.image}
                alt={speaker.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-400 flex items-center justify-center text-white text-4xl sm:text-5xl">👤</div>
            )}
          </div>
          <h3 className="text-base sm:text-lg md:text-2xl font-bold text-blue-900 mt-2 sm:mt-3 md:mt-4 text-center group-hover:text-white transition-colors">
            {speaker.name}
          </h3>
          <p className="text-xs sm:text-sm font-semibold text-blue-700 mt-1 sm:mt-2 text-center group-hover:text-blue-100 transition-colors">
            {speaker.designation}
          </p>
        </div>

        {/* Bio Section */}
        <div className="md:w-2/3">
          <p className="text-xs sm:text-sm md:text-base text-gray-700 group-hover:text-white transition-colors leading-relaxed">
            {speaker.bio}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-cover bg-center bg-fixed mt-8 lg:mt-20 pb-20" style={{ backgroundImage: "url('/assets/AboutBg.png')" }}>
      {/* Header */}
      <div className="max-w-6xl mx-auto px-3 sm:px-4 py-6 sm:py-8 lg:py-10">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-600 mb-2">Keynote Speakers</h1>
          <div className="h-1 w-24 sm:w-32 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-gray-700 mt-3 sm:mt-4 text-xs sm:text-sm md:text-base">Meet our distinguished keynote speakers for AICARE 2025</p>
        </div>

        {/* Speakers Grid */}
        <div className="space-y-4 sm:space-y-6">
          {speakers.map((speaker, idx) => (
            <SpeakerCard key={idx} speaker={speaker} />
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

export default Speakers;
