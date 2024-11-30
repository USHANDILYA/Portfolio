import React from 'react';
import { motion } from 'framer-motion';

const achievementsData = [
  {
    title: '7 time Scholastic and All-round achiever',
    link: 'https://drive.google.com/drive/folders/1rt62w7BdnhV5zd0dfmg8XCzweuTCMP7i',
  },
  {
    title: '5 time 100% Attendance awardee',
    link: 'https://drive.google.com/drive/folders/1rOy2VzMx7QjeZAVOl7gk9K6_0LooR0lA',
  },
  {
    title: 'National Science Olympiad Gold medalist',
    link: 'https://drive.google.com/drive/folders/1s_-FvdPz4Z7sfs5qcHhRTO322ziOLUts',
  },
  {
    title: 'Basketball',
    link: 'https://drive.google.com/drive/folders/1sD0LhtKIrLD5pHPrpF0KXfFVR_kzHy2d',
  },
  {
    title: 'Creative writing',
    link: 'https://drive.google.com/drive/folders/1shIqYGKiGqD72l1UA33B7hEiLG0ew1b_',
  },
  {
    title: 'Debate Finalist-Battle of words',
    link: 'https://drive.google.com/file/d/1mCllApoxVaWTwG6QNljGMlGomuwzSPi5/view',
  },
  {
    title: 'Skill India Info Technology',
    link: 'https://drive.google.com/drive/folders/1sy8H0Myb7ymlIrGf0Ugt3Z2ul1vJVcnM',
  },
];

const Achievements = () => {
  return (
    <div className="p-6 bg-gray-100 rounded-lg">
      <h2 className="text-3xl font-bold mb-6 text-center">Achievements</h2>
      
      <div className="flex flex-wrap justify-center gap-6">
        {achievementsData.map((achievement, index) => (
          <motion.div
            key={index}
            className="relative flex justify-center items-center"
            whileHover={{
              scale: 1.1,
              backgroundColor: "#3498db",
              color: '#fff',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <a
              href={achievement.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-[80px] h-[80px] flex justify-center items-center bg-white rounded-full shadow-lg hover:shadow-xl text-center text-primary font-medium transition-all duration-300"
            >
              {achievement.title}
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
