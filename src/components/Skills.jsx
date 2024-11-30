// import React from "react";

// const skillsData = {
//   technical: [
//     "Python",
//     "SQL",
//     "MySQL,",
//     "R Language",
//     "Machine Learning",
//     "Data Visualization",
//     "Tableau",
//     "Power BI",
//     "Deep Learning",
//     "NLP, CNN",
//     "Computer Vision",
//     "TensorFlow",
//     "PyTorch",
//     "Microsoft Excel",
//     "UI/UX Design",
//     "Figma, Adobe XD",
//     "AWS (S3, EC2)",
//   ],
//   nonTechnical: [
//     "Effective Communication", 
//     "Collaborative Teamwork", 
//     "Strategic Leadership", 
//     "Advanced Problem-Solving", 
//     "Human-Centered Design Thinking", 
//     "Comprehensive User Research", 
//     "Agile Project Management", 
//     "Data-Driven Decision Making"
//   ],
// };

// const technicalRatings = {
//   'Python': 4,
//   "SQL (MySQL, PostgreSQL)": 4,
//   "Machine Learning": 4,
//   "Data Visualization (Tableau, Power BI)": 4,
//   "Deep Learning (NLP, Computer Vision)": 3,
//   "TensorFlow & PyTorch": 4,
//   "Microsoft Excel": 4,
//   "UI/UX Design (Figma, Adobe XD)": 4,
//   "AWS (S3, EC2)": 2,
// }

// function SkillContainer({ rating, children }) {
//   const width = (rating / 5.0) * 100;

//   return (
//     <div className="bg-timber-green-100 rounded-lg text-timber-green-950 overflow-hidden shadow-lg flex flex-col justify-between h-full">
//       <div className="py-2 px-3 font-semibold">{children}</div>
//       <div
//         className="h-1 bg-timber-green-600"
//         style={{ width: `${width}%` }}
//         aria-label={`${children} skill level: ${rating} out of 5`}
//       ></div>
//     </div>
//   );
// }

// const Skills = () => {
//   return (
//     <section className="w-full bg-white p-8" id="skills">
//       <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">My Skills</h1>
//       <div className="container mx-auto grid gap-8 grid-cols-1 md:grid-cols-2">
//         {/* Technical Skills */}
//         <div className="flex flex-col gap-4">
//           <h2 className="text-2xl font-semibold text-gray-800">Technical Skills</h2>
//           <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
//             {
//               skillsData.technical.map((skill, idx) => (
//                 <SkillContainer key={idx} rating={technicalRatings[skill]}>
//                   {skill}
//                 </SkillContainer>
//               ))
//             }
//           </div>
//         </div>

//         {/* Non-Technical Skills */}
//         <div className="flex flex-col gap-4">
//           <h2 className="text-2xl font-semibold text-gray-800">Non-Technical Skills</h2>
//           <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
//             {
//               skillsData.nonTechnical.map((skill, idx) => (
//                 <SkillContainer key={idx} rating={4}>
//                   {skill}
//                 </SkillContainer>
//               ))
//             }
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;
import React from "react";
import { motion } from "framer-motion";

// Data for skills
const skillsData = [
  {
    category: "Programming Languages and Libraries",
    skills: [
      { name: "Python", proficiency: 5 },
      { name: "SQL", proficiency: 5 },
      { name: "C++", proficiency: 3 },
      { name: "C", proficiency: 3 },
      { name: "R", proficiency: 4 },
      { name: "Tensorflow", proficiency: 3 },
      { name: "Scikit-Learn", proficiency: 4 },
      { name: "Streamlit", proficiency: 3 },
      { name: "Pandas", proficiency: 5 },
      { name: "Numpy", proficiency: 5 },
      { name: "Scipy", proficiency: 2 },
    ],
  },
  {
    category: "Technical Skills",
    skills: [
      { name: "HTML5", proficiency: 1 },
      { name: "CSS3", proficiency: 1 },
      { name: "JS", proficiency: 1 },
      { name: "Flask", proficiency: 2 },
      { name: "MySQL", proficiency: 5 },
      { name: "Problem Solving", proficiency: 5 },
      { name: "Data Structures and Algorithms", proficiency: 3 },
      { name: "Exploratory Data Analysis", proficiency: 5 },
      { name: "Data Science and Machine Learning", proficiency: 5 },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", proficiency: 4 },
      { name: "Github", proficiency: 4 },
      { name: "Microsoft Office", proficiency: 5 },
      { name: "Google Cloud Platform (GCP)", proficiency: 3 },
      { name: "Excel", proficiency: 5 },
      { name: "PowerBI", proficiency: 5 },
      { name: "Tableau", proficiency: 3 },
    ],
  },
  {
    category: "Soft Skills",
    skills: [
      { name: "Presentation", proficiency: 5 },
      { name: "Critical Thinking", proficiency: 5 },
      { name: "Consistent", proficiency: 5 },
      { name: "Verbal and Written Communication", proficiency: 5 },
      { name: "Collaborative", proficiency: 5 },
      { name: "Creative", proficiency: 5 },
      { name: "Focused", proficiency: 5 },
    ],
  },
];

// Skill component
const Skills = () => {
  // Function to generate proficiency boxes
  const renderProficiencyBoxes = (level) => {
    const boxes = [];
    for (let i = 0; i < 5; i++) {
      boxes.push(
        <div
          key={i}
          className={`w-3 h-3 rounded-full ${i < level ? 'bg-green-500' : 'bg-gray-300'} `}
        />
      );
    }
    return boxes;
  };

  return (
    <section id="skills" className="py-16 bg-gray-50">
    <div className="p-6 bg-gray-100 rounded-lg">
      <h2 className="text-3xl font-bold mb-6 text-center">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillsData.map((category, index) => (
          <div key={index} className="bg-white p-4 shadow-md rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-primary">
              {category.category}
            </h3>
            <ul className="space-y-2">
              {category.skills.map((skill, idx) => (
                <motion.li
                  key={idx}
                  className="relative p-2 bg-gray-200 rounded-md hover:bg-primary hover:text-white cursor-pointer"
                  whileHover={{
                    scale: 1.1,
                    opacity: 1,
                  }}
                  initial={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {skill.name}
                  <div className="flex gap-1 mt-2">
                    {renderProficiencyBoxes(skill.proficiency)}
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default Skills;
