import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUEM from './pages/AboutUEM';
import AboutCOERE from './pages/AboutCOERE';
import AboutCOEA from './pages/AboutCOEA';
import TrackOfConference from './pages/TrackOfConference';
import SubmissionGuidelines from './pages/SubmissionGuidelines';
import CallPapers from './pages/CallPapers';
import Registration from './pages/Registration';
import WIE from './pages/WIE';
import Venue from './pages/Venue';
import ContactUs from './pages/ContactUs';
import Speakers from './pages/Speakers';
import OrganizingCommittee from './pages/committee/OrganizingCommittee';
import NationalAdvisoryCommittee from './pages/committee/NationalAdvisoryCommittee';
import InternationalAdvisoryCommittee from './pages/committee/InternationalAdvisoryCommittee';
import TechnicalProgramCommittee from './pages/committee/TechnicalProgramCommittee';
import StudentCommittee from './pages/committee/StudentCommittee';
import './App.css';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="w-full flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about/uem" element={<AboutUEM />} />
              <Route path="/about/coere" element={<AboutCOERE />} />
              <Route path="/about/coea" element={<AboutCOEA />} />
              <Route path="/conference/tracks" element={<TrackOfConference />} />
              <Route path="/conference/submission-guidelines" element={<SubmissionGuidelines />} />
              <Route path="/conference/call-papers" element={<CallPapers />} />
              <Route path="/registration" element={<Registration />} />
              <Route path="/wie" element={<WIE />} />
              <Route path="/venue" element={<Venue />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/speakers" element={<Speakers />} />
              <Route path="/committee/organizing" element={<OrganizingCommittee />} />
              <Route path="/committee/national" element={<NationalAdvisoryCommittee />} />
              <Route path="/committee/international" element={<InternationalAdvisoryCommittee />} />
              <Route path="/committee/technical" element={<TechnicalProgramCommittee />} />
              <Route path="/committee/student" element={<StudentCommittee />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
