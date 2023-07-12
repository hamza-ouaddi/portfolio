import React from "react";
import styles from "../styles";
import { motion } from "framer-motion";
import { skills } from "../constants/SkillsData";

const Skills = () => {
  const containerVariants = {
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.6, 0.01, 0.05, 0.95],
        duration: 1,
      },
    },
  };

  return (
    <section
      id="skills"
      className="lg:max-w-[1400px] flex sm:p-10 mx-auto sm:px-10 md:px-2 sm:py-16 py-20 justify-center items-center snap-start sm:min-h-[954px]"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        className="sm:px-10 md:px-2 leading-8 text-center flex flex-col items-center"
      >
        <motion.h3
          variants={itemVariants}
          className={`${styles.heading} text-gray-600 py-2 dark:text-gray-300`}
        >
          Skills
        </motion.h3>
        <motion.p
          variants={itemVariants}
          className={`${styles.paragraph} text-[1.5rem] sm:w-[70%]`}
        >
          Specializing in full-stack development and graphic design.
        </motion.p>
        <motion.p
          variants={itemVariants}
          className={`${styles.paragraph} text-gray-600 mt-2 dark:text-gray-300 sm:w-[70%]`}
        >
          My skills cover both front-end and back-end technologies, along with
          expertise in database management. Besides, I bring graphic design
          capabilities into play, allowing me to create visually captivating
          interfaces with a keen focus on user experience (UI/UX), as well as
          branding and 3D,
        </motion.p>

        <motion.div className="flex flex-1 justify-center items-center gap-6 flex-wrap w-full mt-12 text-gray-600 dark:text-gray-100">
          {skills.map((skill) => (
            <motion.div
              key={skill.id}
              variants={itemVariants}
              className="flex  flex-col items-center sm:min-w-[80px] min-w-[80px]"
            >
              <div className="sm:text-[4rem] md:text-[5rem] text-[3.5rem] sm:m-4 m-2 object-contain">
                {skill.icon}
              </div>
              <div className="font-raleway sm:mt-2 ">{skill.title}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
