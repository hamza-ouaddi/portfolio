import React from "react";
import { motion } from "framer-motion";
import { services } from "../constants";
import styles from "../styles";

const Services = () => {
  const containerVariants = {
    show: {
      transition: {
        staggerChildren: 0.25,
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
      id="services"
      className="sm:px-10 my-8 sm:py-16 pt-20 pb-40 snap-start h-screen"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        className="sm:px-10 text-center flex flex-col items-center"
      >
        <motion.h3
          variants={itemVariants}
          className={`${styles.heading}py-2 text-gray-600 dark:text-gray-300`}
        >
          Services
        </motion.h3>
        <motion.p
          variants={itemVariants}
          className={`${styles.paragraph}  text-gray-600 dark:text-gray-400 mt-2 lg:w-[70%]`}
        >
          From development to design, my services encompass coding, UI/UX, and
          graphic design. With expertise in crafting functional web
          applications, designing seamless user experiences, and creating
          impactful visuals.
        </motion.p>
        <motion.p
          variants={itemVariants}
          className={`${styles.paragraph}  text-gray-600 dark:text-gray-400 mt-2 sm:w-[70%] italic font-semibold`}
        >
          "Bringing the ideas to life, and delivering engaging digital
          experiences that stand out."
        </motion.p>

        <motion.div className="lg:flex flex-wrap md:gap-10 mt-12">
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              transition={{ delay: 1.2 }}
              className="flex-1 font-raleway text-center sm:p-10 px-4 py-8 shadow-lg rounded-xl sm:m-10 mx-4 mb-10 bg-gray-100  dark:bg-gray-800 card hover:shadow-gray-200 dark:hover:shadow-gray-500 dark:hover:text-dark"
            >
              <img
                src={service.icon}
                alt="service"
                className="w-[100px] h-[100px] mx-auto  "
              />
              <h3 className="text-lg font-medium pt-8 pb-2">{service.title}</h3>
              <p className="py-2 leading-8 text-gray-400 hover:text-dark ">
                {service.description}
              </p>
              <hr className="w-48 h-0.5 mx-auto my-4 bg-gray-200 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
              <ul className="flex flex-col gap-2 ">
                {service.skills.map((skill, index) => (
                  <li
                    key={index}
                    className="text-gray-600 py-1 dark:text-gray-400 dark:hover:text-dark "
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Services;
