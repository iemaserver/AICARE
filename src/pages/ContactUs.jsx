import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    street: '',
    city: '',
    postcode: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      fullName: '',
      street: '',
      city: '',
      postcode: '',
      phone: '',
      email: '',
      message: ''
    });
    alert('Thank you for your message! We will get back to you soon.');
  };

  const contactPeople = [
    { name: 'Dr. Sudipta Basu Pal', role: 'Contact Person', email: 'sudipta.basupal@uem.edu.in' },
    { name: 'Dr. Chiradeep Mukherjee', role: 'Contact Person', email: 'chiradeep.mukherjee@uem.edu.in' },
    { name: 'Dr. Anirban Das', role: 'Contact Person', email: 'anirban.das@uem.edu.in' },
    { name: 'Dr. Arnab Ghosh', role: 'Contact Person', email: 'arnab.ghosh@uem.edu.in' }
  ];

  return (
    <div className="min-h-screen bg-cover bg-center bg-fixed mt-8 lg:mt-20 pb-20" style={{ backgroundImage: "url('/assets/AboutBg.png')" }}>
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
            {/* Left Section - Form */}
            <div>
              <h2 className="text-3xl font-extrabold text-gray-800 mb-4">Get In Touch</h2>
              <p className="text-sm text-gray-600 mb-8 leading-relaxed">
                For any queries or further information about AICARE 2025, feel free to reach out to our team. We're here to assist you with conference details, registration, and participation support.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-3 py-3 bg-white text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 outline-none transition-colors"
                  required
                />
                <input
                  type="text"
                  name="street"
                  placeholder="Street"
                  value={formData.street}
                  onChange={handleChange}
                  className="w-full px-3 py-3 bg-white text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 outline-none transition-colors"
                  required
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full px-3 py-3 bg-white text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 outline-none transition-colors"
                    required
                  />
                  <input
                    type="text"
                    name="postcode"
                    placeholder="Postcode"
                    value={formData.postcode}
                    onChange={handleChange}
                    className="w-full px-3 py-3 bg-white text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 outline-none transition-colors"
                    required
                  />
                </div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone No."
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-3 bg-white text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 outline-none transition-colors"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-3 bg-white text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 outline-none transition-colors"
                  required
                />
                <textarea
                  name="message"
                  placeholder="Write Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-3 py-3 bg-white text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 outline-none resize-none transition-colors"
                  required
                ></textarea>
                
                <button
                  type="submit"
                  className="mt-6 w-full flex items-center justify-center text-sm rounded-lg px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16px"
                    height="16px"
                    fill="#fff"
                    className="mr-2"
                    viewBox="0 0 548.244 548.244"
                  >
                    <path
                      fillRule="evenodd"
                      d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Send Message
                </button>
              </form>

              <div className="mt-8 space-y-3">
                <div className="flex items-center text-blue-600 hover:text-blue-700 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 479.058 479.058">
                    <path d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"/>
                  </svg>
                  <a href="mailto:aicare@uem.edu.in" className="text-sm ml-3 hover:underline">
                    <strong>aicare@uem.edu.in</strong>
                  </a>
                </div>
                <div className="flex items-center text-blue-600 hover:text-blue-700 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 482.6 482.6">
                    <path d="M98.339 320.8c47.6 56.9 104.9 101.7 170.3 133.4 24.9 11.8 58.2 25.8 95.3 28.2 2.3.1 4.5.2 6.8.2 24.9 0 44.9-8.6 61.2-26.3.1-.1.3-.3.4-.5 5.8-7 12.4-13.3 19.3-20 4.7-4.5 9.5-9.2 14.1-14 21.3-22.2 21.3-50.4-.2-71.9l-60.1-60.1c-10.2-10.6-22.4-16.2-35.2-16.2-12.8 0-25.1 5.6-35.6 16.1l-35.8 35.8c-3.3-1.9-6.7-3.6-9.9-5.2-4-2-7.7-3.9-11-6-32.6-20.7-62.2-47.7-90.5-82.4-14.3-18.1-23.9-33.3-30.6-48.8 9.4-8.5 18.2-17.4 26.7-26.1 3-3.1 6.1-6.2 9.2-9.3 10.8-10.8 16.6-23.3 16.6-36s-5.7-25.2-16.6-36l-29.8-29.8c-3.5-3.5-6.8-6.9-10.2-10.4-6.6-6.8-13.5-13.8-20.3-21.4-22.2-23.4-50.5-23.4-71.9-.2-4.9 4.9-9.5 9.8-14 14.6-7 6.9-13.3 13.6-20.4 19.4-.2.2-.4.3-.5.4-17.6 16.1-26.2 36.1-26.3 60.9-.2 24.6 8.4 52.3 25.1 82.6 24.5 46.3 59.7 89.2 105.4 128.4z"/>
                  </svg>
                  <a href="tel:08010700500" className="text-sm ml-3 hover:underline">
                    <strong>08010700500</strong>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Section - Contact Info */}
            <div className="space-y-6">
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-1">Prof. Dr. Rajiv Ganguly</h3>
                <p className="text-sm text-gray-600 font-medium mb-4">Conference Chair, AICARE 2025</p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  University Area, Plot No. III – B/5, New Town, Action Area – III,<br />
                  Kolkata, West Bengal 700160
                </p>
              </div>

              <div className="bg-white rounded-lg border-l-4 border-blue-600 p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">For details, you may contact:</h3>
                <div className="space-y-3">
                  {contactPeople.map((person, idx) => (
                    <a key={idx} href={`mailto:${person.email}`} className="flex items-start hover:bg-blue-50 p-2 rounded transition-colors group">
                      <svg className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0 group-hover:text-blue-700" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <div>
                        <p className="text-sm text-gray-800 font-medium group-hover:text-blue-600 transition-colors">{person.name}</p>
                        <p className="text-xs text-blue-600 group-hover:underline">{person.email}</p>
                      </div>
                    </a>
                  ))}
                  <div className="flex items-start pt-2 border-t border-gray-200">
                    <svg className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M3 8a1 1 0 011-1h.01a1 1 0 011 1v.01a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm7 4a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <a href="mailto:aicare@uem.edu.in" className="text-sm text-blue-600 hover:underline font-medium">
                      aicare@uem.edu.in
                    </a>
                  </div>
                </div>
              </div>
            </div>
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

export default ContactUs;
