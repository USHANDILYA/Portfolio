import React from "react";
import { motion } from "framer-motion";

const volunteeringData = [
  {
    title: "Sanchar Mitra (Department of Telecommunication)",
    link: "https://drive.google.com/file/d/1zWlprE2Hf9XmRyyAcw222pebZUdzEJ2E/view?usp=sharing", // Replace with actual link
  },
  {
    title: "Google Developer Group - AI-ML Lead",
    link: "https://developers.google.com/community/gdg", // Replace with actual link
  },
];

function VolunteeringCard({ data }) {
  return (
    <motion.div
      className="relative w-full sm:w-[300px] md:w-[400px] bg-timber-green-800 p-6 rounded-xl shadow-md cursor-pointer overflow-hidden"
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.4 },
      }}
      onClick={() => window.open(data.link, "_blank")}
    >
      {/* Running Line Animation */}
      <motion.div
        className="absolute inset-0 border-2 border-transparent rounded-xl pointer-events-none"
        style={{
          background: `
            linear-gradient(90deg, transparent, transparent 40%, #4CAF50 50%, transparent 60%, transparent)
          `,
          backgroundSize: "200% 100%",
        }}
        animate={{
          backgroundPosition: ["0% 0%", "200% 0%"],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <h3 className="relative text-lg font-semibold text-center text-white z-10">
        {data.title}
      </h3>
    </motion.div>
  );
}

const Volunteering = () => {
  return (
    <section id="Volunteering" className="w-full bg-timber-green-50 p-10">
      <h1 className="text-5xl font-extrabold text-center mb-12 text-timber-green-900">
        Volunteering
      </h1>
      <div className="flex flex-wrap gap-8 justify-center">
        {volunteeringData.map((item, index) => (
          <VolunteeringCard data={item} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Volunteering;
