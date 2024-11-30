// import React, { useRef, useState, useEffect } from "react";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// // Sample data for certificates
// const certificationsData = [
//   {
//     name: "Python for Data Science",
//     institution: "NPTEL / IIT Madras",
//     skills: [
//       "Python Programming",
//       "Supervised & Unsupervised Learning",
//       "Data Preprocessing",
//       "Model Evaluation & Tuning",
//     ],
//     link: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL23CS21S2442070903128852",
//   },
//   {
//     name: "Introduction to Machine Learning",
//     institution: "NPTEL / IIT Madras",
//     skills: [
//       "Data Exploration and Cleaning",
//       "Data Visualization with Matplotlib & Seaborn",
//       "Pandas for Data Manipulation",
//       "Statistical Analysis & Hypothesis Testing",
//     ],
//     link: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL23CS18S5344682704311709",
//   },
//   {
//     name: "Google Cloud Computing Foundations",
//     institution: "NPTEL / IIT Kharagpur",
//     skills: [
//       "Data Science Fundamentals",
//       "Data Analysis Techniques",
//       "Machine Learning Algorithms",
//       "Big Data & Data Engineering",
//     ],
//     link: "https://archive.nptel.ac.in/content/noc/NOC23/SEM2/Ecertificates/106/noc23-cs90/Course/NPTEL23CS90S73431038620427902.pdf",
//   },
//   {
//     name: "Google Data Analytics Professional Certificate",
//     institution: "Coursera",
//     skills: [
//       "Data Cleaning and Visualization",
//       "Using SQL for Data Analysis",
//       "Spreadsheet Analysis",
//       "Data-Driven Decision Making",
//     ],
//     link: "https://www.example.com",
//   },
//   {
//     name: "Advanced R for Business Analytics",
//     institution: "NPTEL / IIT Kanpur",
//     skills: [
//       "Advanced Data Manipulation in R",
//       "Time Series Forecasting",
//       "Predictive Analytics with R",
//       "R Programming for Data Science",
//     ],
//     link: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL24MG113S86570012904371525",
//   },
//   {
//     name: "Microsoft Power BI Desktop for Business Intelligence",
//     institution: "Udemy",
//     skills: [
//       "User-Centered Design Principles",
//       "Wireframing & Prototyping",
//       "UX Research & Usability Testing",
//       "Designing Interactive User Interfaces",
//     ],
//     link: "https://www.example.com",
//   },
//   {
//     name: "Neural Networks and Deep Learning by Andrew Ng",
//     institution: "Coursera",
//     skills: [
//       "User-Centered Design Principles",
//       "Wireframing & Prototyping",
//       "UX Research & Usability Testing",
//       "Designing Interactive User Interfaces",
//     ],
//     link: "https://www.example.com",
//   },
//   {
//     name: "100 Days of Code: The Complete Python Pro Bootcamp for 2023 by Dr. Angela Yu",
//     institution: "Udemy",
//     skills: [
//       "User-Centered Design Principles",
//       "Wireframing & Prototyping",
//       "UX Research & Usability Testing",
//       "Designing Interactive User Interfaces",
//     ],
//     link: "https://www.example.com",
//   },
// ];

// // Certificate card component
// function CertificateCard({ certificate }) {
//   return (
//     <div className="p-6 w-full sm:w-[350px] md:w-[450px] bg-timber-green-800 border-timber-green-700 border rounded-xl shadow-xl flex-shrink-0 transition-transform transform hover:scale-105 hover:shadow-2xl hover:border-timber-green-800">
//       <h3 className="text-2xl font-semibold text-white mb-2">{certificate.name}</h3>
//       <p className="text-sm text-timber-green-100 mb-2">{certificate.institution}</p>
//       <ul className="text-left text-timber-green-100 list-disc list-inside mb-4">
//         {certificate.skills.map((skill, index) => (
//           <li key={index}>{skill}</li>
//         ))}
//       </ul>
//       {/* Removed the "View Certification" button */}
//     </div>
//   );
// }

// // Scrollable category container
// function CertificateCategory({ id, title, certificates }) {
//   const scrollRef = useRef(null);
//   const [showArrows, setShowArrows] = useState(false);

//   useEffect(() => {
//     const checkOverflow = () => {
//       const scrollWidth = scrollRef.current.scrollWidth;
//       const clientWidth = scrollRef.current.clientWidth;
//       setShowArrows(scrollWidth > clientWidth);
//     };

//     checkOverflow();
//     window.addEventListener("resize", checkOverflow);

//     return () => window.removeEventListener("resize", checkOverflow);
//   }, [certificates]);

//   const scroll = (direction) => {
//     if (scrollRef.current) {
//       const { scrollLeft, clientWidth } = scrollRef.current;
//       const scrollAmount = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
//       scrollRef.current.scrollTo({ left: scrollAmount, behavior: "smooth" });
//     }
//   };

//   return (
//     <section id={id} className="relative w-full mb-16 p-8 bg-timber-green-100 bg-opacity-90 rounded-lg shadow-xl">
//       <h2 className="text-3xl font-semibold text-timber-green-900 mb-6">{title}</h2>
//       {/* Left Arrow */}
//       {showArrows && (
//         <button
//           onClick={() => scroll("left")}
//           className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl p-3 bg-timber-green-700 rounded-full hover:bg-timber-green-800 focus:outline-none focus:ring-2 focus:ring-timber-green-500 z-10 transition-all duration-300 ease-in-out opacity-75 hover:opacity-100"
//           aria-label="Scroll left"
//         >
//           <FaArrowLeft />
//         </button>
//       )}
//       {/* Right Arrow */}
//       {showArrows && (
//         <button
//           onClick={() => scroll("right")}
//           className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl p-3 bg-timber-green-700 rounded-full hover:bg-timber-green-800 focus:outline-none focus:ring-2 focus:ring-timber-green-500 z-10 transition-all duration-300 ease-in-out opacity-75 hover:opacity-100"
//           aria-label="Scroll right"
//         >
//           <FaArrowRight />
//         </button>
//       )}
//       {/* Scrollable container */}
//       <div
//         ref={scrollRef}
//         className="flex overflow-x-auto space-x-8 pb-4 hide-scrollbar"
//       >
//         {certificates.map((certificate, index) => (
//           <CertificateCard certificate={certificate} key={index} />
//         ))}
//       </div>
//     </section>
//   );
// }

// const Certificates = () => {
//   return (
//     <section id="Certificates" className="w-full bg-timber-green-50 p-10">
//       <h1 className="text-5xl font-extrabold text-center mb-12 text-timber-green-900">Certifications</h1>
//       <div className="space-y-16">
//         <CertificateCategory id="certifications" title="Professional Certificates:" certificates={certificationsData} />
//       </div>
//     </section>
//   );
// };

// export default Certificates;
import React, { useRef, useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// Sample data for certificates
const certificationsData = [
  {
    name: "Python for Data Science",
    institution: "NPTEL / IIT Madras",
    skills: [
      "Python Programming",
      "Supervised & Unsupervised Learning",
      "Data Preprocessing",
      "Model Evaluation & Tuning",
    ],
    link: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL23CS21S2442070903128852",
  },
  {
    name: "Introduction to Machine Learning",
    institution: "NPTEL / IIT Madras",
    skills: [
      "Data Exploration and Cleaning",
      "Data Visualization with Matplotlib & Seaborn",
      "Pandas for Data Manipulation",
      "Statistical Analysis & Hypothesis Testing",
    ],
    link: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL23CS18S5344682704311709",
  },
  {
    name: "Google Cloud Computing Foundations",
    institution: "NPTEL / IIT Kharagpur",
    skills: [
      "Data Science Fundamentals",
      "Data Analysis Techniques",
      "Machine Learning Algorithms",
      "Big Data & Data Engineering",
    ],
    link: "https://archive.nptel.ac.in/content/noc/NOC23/SEM2/Ecertificates/106/noc23-cs90/Course/NPTEL23CS90S73431038620427902.pdf",
  },
  {
    name: "Google Data Analytics Professional Certificate",
    institution: "Coursera",
    skills: [
      "Data Cleaning and Visualization",
      "Using SQL for Data Analysis",
      "Spreadsheet Analysis",
      "Data-Driven Decision Making",
    ],
    link: "https://www.example.com",
  },
  {
    name: "Advanced R for Business Analytics",
    institution: "NPTEL / IIT Kanpur",
    skills: [
      "Advanced Data Manipulation in R",
      "Time Series Forecasting",
      "Predictive Analytics with R",
      "R Programming for Data Science",
    ],
    link: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL24MG113S86570012904371525",
  },
  {
    name: "Microsoft Power BI Desktop for Business Intelligence",
    institution: "Udemy",
    skills: [
      "User-Centered Design Principles",
      "Wireframing & Prototyping",
      "UX Research & Usability Testing",
      "Designing Interactive User Interfaces",
    ],
    link: "https://www.example.com",
  },
  {
    name: "Neural Networks and Deep Learning by Andrew Ng",
    institution: "Coursera",
    skills: [
      "User-Centered Design Principles",
      "Wireframing & Prototyping",
      "UX Research & Usability Testing",
      "Designing Interactive User Interfaces",
    ],
    link: "https://www.example.com",
  },
  {
    name: "100 Days of Code: The Complete Python Pro Bootcamp for 2023 by Dr. Angela Yu",
    institution: "Udemy",
    skills: [
      "User-Centered Design Principles",
      "Wireframing & Prototyping",
      "UX Research & Usability Testing",
      "Designing Interactive User Interfaces",
    ],
    link: "https://www.example.com",
  },
  // Other certificates...
];

// Certificate card component
function CertificateCard({ certificate }) {
  const handleClick = () => {
    if (certificate.link) {
      window.open(certificate.link, "_blank");
    }
  };

  return (
    <div
      onClick={handleClick}
      className="p-6 w-full sm:w-[350px] md:w-[450px] bg-timber-green-800 border-timber-green-700 border rounded-xl shadow-xl flex-shrink-0 transition-transform transform hover:scale-105 hover:shadow-2xl hover:border-timber-green-800 relative cursor-pointer"
      title="Click to view certificate"
    >
      <h3 className="text-2xl font-semibold text-white mb-2">{certificate.name}</h3>
      <p className="text-sm text-timber-green-100 mb-2">{certificate.institution}</p>
      <ul className="text-left text-timber-green-100 list-disc list-inside mb-4">
        {certificate.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center text-white opacity-0 hover:opacity-100 transition-opacity duration-200">
        <p className="text-xl">Click to view certificate</p>
      </div>
    </div>
  );
}

// Scrollable category container
function CertificateCategory({ id, title, certificates }) {
  const scrollRef = useRef(null);
  const [showArrows, setShowArrows] = useState(false);

  useEffect(() => {
    const checkOverflow = () => {
      const scrollWidth = scrollRef.current.scrollWidth;
      const clientWidth = scrollRef.current.clientWidth;
      setShowArrows(scrollWidth > clientWidth);
    };

    checkOverflow();
    window.addEventListener("resize", checkOverflow);

    return () => window.removeEventListener("resize", checkOverflow);
  }, [certificates]);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section id={id} className="relative w-full mb-16 p-8 bg-timber-green-100 bg-opacity-90 rounded-lg shadow-xl">
      <h2 className="text-3xl font-semibold text-timber-green-900 mb-6">{title}</h2>
      {/* Left Arrow */}
      {showArrows && (
        <button
          onClick={() => scroll("left")}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl p-3 bg-timber-green-700 rounded-full hover:bg-timber-green-800 focus:outline-none focus:ring-2 focus:ring-timber-green-500 z-10 transition-all duration-300 ease-in-out opacity-75 hover:opacity-100"
          aria-label="Scroll left"
        >
          <FaArrowLeft />
        </button>
      )}
      {/* Right Arrow */}
      {showArrows && (
        <button
          onClick={() => scroll("right")}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl p-3 bg-timber-green-700 rounded-full hover:bg-timber-green-800 focus:outline-none focus:ring-2 focus:ring-timber-green-500 z-10 transition-all duration-300 ease-in-out opacity-75 hover:opacity-100"
          aria-label="Scroll right"
        >
          <FaArrowRight />
        </button>
      )}
      {/* Scrollable container */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto space-x-8 pb-4 hide-scrollbar"
      >
        {certificates.map((certificate, index) => (
          <CertificateCard certificate={certificate} key={index} />
        ))}
      </div>
    </section>
  );
}

const Certificates = () => {
  return (
    <section id="Certificates" className="w-full bg-timber-green-50 p-10">
      <h1 className="text-5xl font-extrabold text-center mb-12 text-timber-green-900">Certifications</h1>
      <div className="space-y-16">
        <CertificateCategory id="certifications" title="Professional Certificates:" certificates={certificationsData} />
      </div>
    </section>
  );
};

export default Certificates;
