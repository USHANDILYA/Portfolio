import React from "react";

// const experienceData = [
//   {
//     role: "Research Intern",
//     company: "NIT Kurukshetra",
//     duration: "July 2024 – August 2024",
//     responsibilities: [
//       "Designed and implemented cross-domain, session-based & Gen-AI recommendation systems.",
//       "Improved recommendation accuracy by 15%, enhancing personalized user experiences.",
//       "Conducted in-depth data analysis and model evaluations to refine AI recommendation models.",
//     ],
//   },
//   {
//     role: "Data Analyst Intern",
//     company: "ECom Express Limited",
//     duration: "July 2023 – August 2023",
//     responsibilities: [
//       "Analyzed 1,000+ data points using Financial Modelling and Exploratory Data Analysis with Python.",
//       "Identified trends & created visualizations that improved decision-making efficiency by 20%.",
//       "Utilized Scikit-Learn, PyTorch, and TensorFlow to train Classification and Regression Models.",
//     ],
//   },
//   {
//     role: "Marketing Associate",
//     company: "StockGro",
//     duration: "Aug 2023 – Oct 2023",
//     responsibilities: [
//       "Gained expertise in social investing by leveraging online platforms to analyze and interpret market sentiments.",
//       "Applied investment strategies to maximize returns with minimum risk.",
//       "Utilized sentiment analysis to make informed investment decisions, aligning with market trends.",
//     ],
//   },
//   {
//     role: "Data Science Intern",
//     company: "Aican Automate LLP",
//     duration: "July 2022 – August 2022",
//     responsibilities: [
//       "Utilized Tableau and Power BI for visualization, improving data processing efficiency by 25%.",
//       "Collaborated with the data science team to analyze 10,000+ data points and generate actionable insights.",
//       "Contributed to data mining, SQL, and Microsoft Excel-based analytics for enhanced business decision-making.",
//     ],
//   },
//   {
//     role: "Freelance Data Analyst",
//     company: "Self-Employed",
//     duration: "August 2023 – February 2024",
//     responsibilities: [
//       "Utilized Excel and SQL to manipulate and analyze large datasets, improving data processing efficiency by 20%.",
//       "Developed dynamic dashboards in Power BI, enabling stakeholders to visualize complex data and make informed decisions.",
//       "Automated reporting processes, reducing manual effort by 25% and streamlining overall workflow.",
//     ],
//   },
// ];

// function ExperienceCard({ experience }) {
//   return (
//     <div className="p-6 w-full sm:w-[350px] lg:w-[400px] bg-timber-green-800 border-timber-green-700 border rounded-xl shadow-lg flex-shrink-0 transition-transform transform hover:scale-105 hover:shadow-xl hover:border-timber-green-600">
//       <h3 className="text-xl font-bold text-white mb-2">{experience.role}</h3>
//       <p className="text-sm text-timber-green-100 mb-1">{experience.company}</p>
//       <p className="text-xs text-gray-300 mb-4">{experience.duration}</p>
//       <ul className="text-left text-timber-green-100 list-disc list-inside space-y-2">
//         {experience.responsibilities.map((task, index) => (
//           <li key={index} className="text-sm">{task}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// const Experience = () => {
//   return (
//     <section id="Experience" className="w-full bg-timber-green-50 p-10">
//       <h1 className="text-5xl font-extrabold text-center mb-12 text-timber-green-900">Experience</h1>
//       <div className="flex flex-wrap justify-center gap-8">
//         {experienceData.map((experience, index) => (
//           <ExperienceCard experience={experience} key={index} />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Experience;
export default function Experience() {
  return (
    <section id="experience" className="py-16 bg-gray-50">
      <h2 className="text-4xl font-bold text-center text-primary mb-10">Experience</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="bg-white p-6 rounded-lg shadow-xl transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:translate-y-2 opacity-0 motion-safe:animate-fadeIn">
          <h3 className="text-2xl font-semibold text-primary mb-3">Avian We., Delhi, India – Junior Data Analyst (Hybrid)</h3>
          <p className="text-sm text-gray-500 mb-4">01/2025-Present</p>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Managed end-to-end data reporting, dashboard creation (Power BI), and brand monitoring across multiple clients
using Power Query, Talkwalker, and custom tools.Developed predictive models (eg.XGBoost), automated data
pipelines, and delivered regular insights through visual reports and stakeholder presentations.</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-xl transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:translate-y-2 opacity-0 motion-safe:animate-fadeIn">
          <h3 className="text-2xl font-semibold text-primary mb-3">Norwegian University of Science and Technology, Gjøvik, Norway – Research Intern (Remote)</h3>
          <p className="text-sm text-gray-500 mb-4">05/2024-10/2024</p>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Developed a Human Activity Recognizer using CNN and LSTM under the Intelligent Systems and Analytics group using TensorFlow and OpenPose.</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-xl transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:translate-y-2 opacity-0 motion-safe:animate-fadeIn">
          <h3 className="text-2xl font-semibold text-primary mb-3">Bokaro Steel Limited, SAIL, Bokaro Steel City - Project Trainee (On-site)</h3>
          <p className="text-sm text-gray-500 mb-4">07/2023 – 08/2023</p>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Developed a "Face Recognition and Attendance System" using Flask, scikit-learn, matplotlib, pandas, numpy, OpenCV, and TensorFlow, achieving 95% accuracy in face recognition and reducing manual efforts by 60% through automated attendance tracking.</li>
            <li>Integrated user-friendly web interfaces, resulting in a 70% increase in user engagement, while ensuring compliance with privacy regulations through robust data protection.</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-xl transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:translate-y-2 opacity-0 motion-safe:animate-fadeIn">
          <h3 className="text-2xl font-semibold text-primary mb-3">AICAN Private Limited - Data Analyst Intern</h3>
          <p className="text-sm text-gray-500 mb-4">07/2022 – 08/2022</p>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Performed thorough exploratory data analysis (EDA), uncovering key insights from diverse datasets, reflected in a 30% increase in data-driven decision-making efficiency within the team.</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-xl transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:translate-y-2 opacity-0 motion-safe:animate-fadeIn">
          <h3 className="text-2xl font-semibold text-primary mb-3">Red Dot Foundation-Safecity – Volunteer</h3>
          <p className="text-sm text-gray-500 mb-4">12/2021 - 01/2022</p>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Engaged in workshops and public speaking events, created reports to review data, and developed strategies to improve safety awareness.</li>
            <li>Increased community awareness by 40% and participation rates in safety workshops by 25%.</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-xl transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:translate-y-2 opacity-0 motion-safe:animate-fadeIn">
          <h3 className="text-2xl font-semibold text-primary mb-3">Freelance Data Analyst - Self Employed</h3>
          <p className="text-sm text-gray-500 mb-4">08/2023 – 02/2024</p>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Provided data analysis and consulting services, helping clients improve their data-driven decision-making processes.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

