import { Link } from 'react-router-dom';

const SubmissionGuidelines = () => {
  return (
    <div className="min-h-screen bg-cover bg-center bg-fixed mt-8 lg:mt-20 pb-20" style={{ backgroundImage: "url('../assets/AboutBg.png')" }}>
      <div className="max-w-5xl mx-auto px-3 sm:px-4 py-6 sm:py-8 lg:py-12">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-14">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-600 mb-2 sm:mb-3 leading-tight">
            Guidelines for Submission of Manuscripts
          </h1>
          <div className="h-1 w-20 sm:w-24 md:w-32 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Main Content */}
        <div className="bg-white bg-opacity-95 rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 lg:p-10 space-y-4 sm:space-y-6">
          {/* Introduction */}
          <div>
            <p className="text-xs sm:text-sm md:text-base lg:text-base text-gray-700 leading-relaxed mb-3 sm:mb-4">
              Prospective authors are invited to submit original technical papers for publication in the AICARE 2025 Conference Proceedings and for presentation at the Conference.
            </p>
            
            <p className="text-xs sm:text-sm md:text-base lg:text-base text-gray-700 leading-relaxed mb-3 sm:mb-4">
              Authors must submit their manuscripts using <a href="https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2FAICARE2025" className="text-blue-600 font-semibold hover:underline">CMT (Conference Management Toolkit)</a> link on or before <span className="font-bold text-red-600">January 20, 2025 23:59 hrs AoE</span> (Anywhere on Earth). All manuscripts will be double-blind reviewed for technical content and scope by a technical program committee.
            </p>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-600 p-3 sm:p-4 rounded-lg mb-3 sm:mb-4">
              <p className="text-blue-900 font-semibold text-xs sm:text-sm md:text-base lg:text-lg">
                ➤ <a href="https://cmt3.research.microsoft.com/AICARE2025" className="text-blue-600 hover:underline">Link for PAPER SUBMISSION</a>
              </p>
            </div>

            <p className="text-gray-700 leading-relaxed italic text-xs sm:text-xs md:text-sm lg:text-sm text-gray-600">
              Please note that AICARE 2025 will follow a <span className="font-bold">double-blind review</span> process. Papers that do not conform with our double-blind submission policies will be rejected without review.
            </p>
          </div>

          {/* Section 1 */}
          <div className="border-t-2 border-gray-200 pt-4 sm:pt-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-blue-600 mb-3 sm:mb-4">
              Guidelines for Preserving Anonymity with Double-Blind Submission
            </h2>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm md:text-base lg:text-base text-gray-700">
              {[
                "Remove the names and affiliations of authors from the title page of the PDF file. This information needs to be included in the final camera ready manuscript if your paper gets accepted. During the review manuscript submission, include all author details only at the CMT portal. The PDF file of the review manuscript should not have author information.",
                "Remove acknowledgments of identifying names and funding sources from the PDF file that you will submit for review. This information can be included in the final camera ready manuscript if your paper gets accepted.",
                "Remove project titles or names that can be used to trace back to the authors via a web search engine.",
                "Use care in naming your files. Source file names (e.g., 'Alice-n-Bob.dvi') are often embedded in the final output as accessible comments.",
                "Use care in referring to your previous works as related works. Instead of 'In a previous work [10], we have presented...', use 'In a previous work [10], the authors have presented...' or 'XYZ et al. [10] have presented...'",
                "Papers with the same title and abstract should not be posted on a public website, such as arxiv.org, or transmitted via public mailing lists."
              ].map((item, idx) => (
                <li key={idx} className="flex gap-3">
                  <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 2 */}
          <div className="border-t-2 border-gray-200 pt-4 sm:pt-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-blue-600 mb-3 sm:mb-4">
              Your Paper Must Comply With The Following
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
              {[
                { label: "Paper Length", value: "Maximum 6 pages" },
                { label: "Paper Size", value: "US Letter (8.5\" x 11\")" },
                { label: "Fonts", value: "Embed ALL fonts in PDF. Avoid Type 3 fonts" },
                { label: "File Format", value: "Adobe PDF (.pdf)" },
                { label: "Allowed File Size", value: "2.0 MB" },
                { label: "Page Numbering", value: "Do NOT page number your paper" }
              ].map((item, idx) => (
                <div key={idx} className="bg-gradient-to-r from-blue-50 to-blue-100 p-3 sm:p-4 rounded-lg border-l-4 border-blue-500">
                  <p className="font-bold text-blue-900 text-xs sm:text-sm md:text-base">{item.label}</p>
                  <p className="text-gray-700 text-xs sm:text-sm md:text-base mt-1">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3 */}
          <div className="border-t-2 border-gray-200 pt-4 sm:pt-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-blue-600 mb-3 sm:mb-4">
              Templates Can Be Downloaded From The Following Links
            </h2>
            
            {/* Microsoft Word */}
            <div className="mb-4 sm:mb-6">
              <h3 className="text-sm sm:text-base md:text-lg font-bold text-blue-700 mb-2 sm:mb-3">
                Microsoft Word
              </h3>
              <ul className="space-y-1.5 sm:space-y-2 ml-4 text-xs sm:text-sm md:text-base">
                <li>
                  <a href="https://www.ieee.org/content/dam/ieee-org/ieee/web/org/conferences/conference-template-letter.docx" className="text-blue-600 hover:underline font-semibold">↓ US Letter</a>
                  <span className="text-gray-600 text-xs sm:text-xs ml-2">(DOC, 30 KB) Updated 2024</span>
                </li>
                <li>
                  <a href="https://www.ieee.org/content/dam/ieee-org/ieee/web/org/conferences/conference-template-a4.docx" className="text-blue-600 hover:underline font-semibold">↓ A4</a>
                  <span className="text-gray-600 text-xs sm:text-xs ml-2">(DOC, 30 KB) Updated 2024</span>
                </li>
              </ul>
            </div>

            {/* LaTeX */}
            <div className="mb-4 sm:mb-6">
              <h3 className="text-sm sm:text-base md:text-lg font-bold text-blue-700 mb-2 sm:mb-3">
                LaTeX
              </h3>
              <ul className="space-y-1.5 sm:space-y-2 ml-4 text-xs sm:text-sm md:text-base">
                <li>
                  <a href="https://www.ieee.org/content/dam/ieee-org/ieee/web/org/conferences/conference-latex-template.zip" className="text-blue-600 hover:underline font-semibold">↓ Template</a>
                  <span className="text-gray-600 text-xs sm:text-xs ml-2">(ZIP, 700 KB) Updated 2024</span>
                </li>
                <li>
                  <a href="https://www.ieee.org/content/dam/ieee-org/ieee/web/org/conferences/IEEEtranBST2.zip" className="text-blue-600 hover:underline font-semibold">↓ LaTeX Bibliography Files</a>
                  <span className="text-gray-600 text-xs sm:text-xs ml-2">(ZIP, 309 KB)</span>
                </li>
              </ul>
            </div>

            {/* Overleaf */}
            <div>
              <h3 className="text-sm sm:text-base md:text-lg font-bold text-blue-700 mb-2 sm:mb-3">
                Overleaf
              </h3>
              <p className="ml-4 text-gray-700 text-xs sm:text-sm md:text-base">
                When working in Overleaf, the template is available at <a href="https://www.overleaf.com/gallery/tagged/ieee-official" className="text-blue-600 hover:underline font-semibold">https://www.overleaf.com/gallery/tagged/ieee-official</a>
              </p>
            </div>
          </div>

          {/* Section 4 */}
          <div className="border-t-2 border-gray-200 pt-4 sm:pt-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-red-600 mb-3 sm:mb-4">
              Important Notes
            </h2>
            <div className="space-y-3 sm:space-y-4">
              <div className="bg-amber-50 border-l-4 border-amber-500 p-3 sm:p-4 rounded-lg">
                <p className="text-amber-900 font-semibold mb-1 sm:mb-2 text-xs sm:text-sm md:text-base">CMT Registration Requirements:</p>
                <p className="text-amber-800 text-xs sm:text-xs md:text-sm">During the initial manuscript submission process via CMT, it is the authors' responsibility to ensure that all the authors' names are included in the CMT submission page, and NOT in the PDF file. The CMT registration page must include all co-authors. Failure to comply with this rule might result in your paper being withdrawn from the review process. The author list of an accepted paper cannot be changed in the final manuscript.</p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-3 sm:p-4 rounded-lg">
                <p className="text-blue-900 font-semibold mb-1 sm:mb-2 text-xs sm:text-sm md:text-base">Submission Requirements:</p>
                <p className="text-blue-800 text-xs sm:text-xs md:text-sm">All submissions should be written in English with a maximum page length of SIX (6) printed pages for the regular paper track. Papers should be in PDF format, two columns, (minimum 10-point font) or greater and compliant with other AICARE 2025 manuscript guidelines. Standard IEEE conference templates for LaTeX and Microsoft Word formats can be used.</p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-3 sm:p-4 rounded-lg">
                <p className="text-red-900 font-semibold mb-1 sm:mb-2 text-xs sm:text-sm md:text-base">Archival Policy:</p>
                <p className="text-red-800 text-xs sm:text-xs md:text-sm">All accepted and presented papers will be included in <span className="font-bold">AICARE 2025 Conference Proceedings and digitally archived through IEEE Xplore</span>. The IEEE reserves the right to exclude a paper from distribution after the conference (including its removal from IEEE Xplore) if the paper is not presented at the conference.</p>
              </div>
            </div>
          </div>

          {/* IEEE Policies */}
          <div className="border-t-2 border-gray-200 pt-4 sm:pt-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-red-600 mb-3 sm:mb-4">
              Important IEEE Policy Announcement
            </h2>
            <p className="text-gray-700 leading-relaxed mb-3 sm:mb-4 text-xs sm:text-sm md:text-base">
              Papers are reviewed on the basis that they do not contain plagiarized material and have not been submitted to any other conference at the same time (double submission). These matters are taken very seriously and the IEEE Communications society will take action against any author who engages in either practice.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a href="https://www.ieee.org/publications/rights/plagiarism/plagiarism.html" className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 sm:py-3 px-3 sm:px-4 rounded-lg transition text-center text-xs sm:text-sm md:text-base">
                IEEE Policy on Plagiarism →
              </a>
              <a href="https://www.ieee.org/publications/rights/multi-sub-guidelines-intro.html" className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 sm:py-3 px-3 sm:px-4 rounded-lg transition text-center text-xs sm:text-sm md:text-base">
                IEEE Policy on Double Submission →
              </a>
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

export default SubmissionGuidelines;
