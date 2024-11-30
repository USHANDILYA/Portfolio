import React from "react";
import { motion } from "framer-motion";
import rpaper1 from '../assets/rpaper1.png';
import rpaper2 from '../assets/rpaper2.png';

// Sample data for publications
const publicationsData = [
  {
    title: "Multi-Pose Human Action Recognition using Deep Learning ConvLSTM",
    journal: "12th European Workshop on Visual Information Processing (EUVIP 2024)",
    image: rpaper1,
  },
  {
    title: "Driver Behavior Analysis using Mediapipe and LSTM",
    journal: "International Journal of Machine Learning and Computing (2024)",
    image: rpaper2,
  },
];

// Research Publication Card Component
function ResearchPublicationCard({ publication }) {
  return (
    <motion.div
      className="relative w-full sm:w-[350px] md:w-[450px] h-[300px] bg-white rounded-xl shadow-lg overflow-hidden"
      style={{ perspective: "1000px" }}
    >
      {/* Card Container */}
      <div className="absolute inset-0">
        {/* Front Side */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center text-center bg-timber-green-800 text-white p-6 z-10"
          style={{
            opacity: 1,
            transition: "opacity 0.4s",
          }}
          whileHover={{ opacity: 0 }} // Hide front side on hover
        >
          <div>
            <h3 className="text-2xl font-semibold">{publication.title}</h3>
            <p className="text-lg">{publication.journal}</p>
          </div>
        </motion.div>

        {/* Back Side (Image) */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            opacity: 1,
            transition: "opacity 0.4s",
          }}
          whileHover={{ opacity: 1 }} // Show image on hover
        >
          <img
            src={publication.image}
            alt={publication.title}
            className="object-cover w-full h-full rounded-xl"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}



// Research Publications Section
const ResearchPublications = () => {
  return (
    <section id="ResearchPublications" className="w-full bg-timber-green-50 p-10">
      <h1 className="text-5xl font-extrabold text-center mb-12 text-timber-green-900">Research Publications</h1>
      <div className="flex flex-wrap gap-8 justify-center">
        {publicationsData.map((publication, index) => (
          <ResearchPublicationCard publication={publication} key={index} />
        ))}
      </div>
    </section>
  );
};

export default ResearchPublications;
