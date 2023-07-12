import React from "react";
import { motion } from "framer-motion";
import { works } from "../constants";
import styles from "../styles";
import Footer from "../components/Footer";
import { AiFillGithub } from "react-icons/ai";

const Projects = () => {
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
    <section className=" mt-8 sm:py-16 py-20 snap-start h-screen">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        className="lg:px-10 px-2 pb-8 text-center"
      >
        <motion.h3
          variants={itemVariants}
          className={`${styles.heading} py-2 text-gray-600 dark:text-gray-300`}
        >
          Portfolio
        </motion.h3>
        <motion.p
          variants={itemVariants}
          className={`${styles.paragraph} text-gray-600 dark:text-gray-400 mt-2`}
        >
          All the projects that I made in Development and Design
        </motion.p>

        <motion.div className="flex flex-col gap-10 sm:px-10 px-4 lg:flex-row lg:flex-wrap mt-12">
          {works
            .sort((a, b) => b.id - a.id)
            .map((work) => (
              <motion.a
                variants={itemVariants}
                href={work.link}
                className="lg:basis-1/3 sm:flex flex-col flex-1 relative inset-0 justify-center items-center"
                key={work.id}
              >
                <div className="w-full sm:h-[450px] min-h-[300px] relative overflow-hidden rounded-lg">
                  <div
                    className="absolute top-0 w-full h-full bg-cover"
                    style={{
                      backgroundImage: `url(${work.image})`,
                      backgroundPosition: "top",
                    }}
                  ></div>
                </div>

                <div className="sm:absolute w-full h-full flex flex-col sm:items-start items-center justify-end sm:text-left font-raleway py-8 sm:px-8 sm:bg-gradient-to-tr sm:from-gray-900 sm:opacity-0 sm:hover:opacity-100 sm:text-white rounded-lg ">
                  <h3 className="sm:text-[2rem] text-[1.3rem] sm:font-semibold">
                    {work.title}
                  </h3>
                  <p className="leading-8 sm:text-[1rem] text-[0.95rem]">
                    {work.description}
                  </p>

                  <hr className="w-48 h-[1px] bg-gray-200 border-0 rounded my-2 dark:bg-gray-100"></hr>
                  <ul className="flex sm:justify-start justify-center gap-4 mt-2 flex-wrap">
                    {work.technologies.map((technology, index) => (
                      <li
                        className="px-2 text-sm bg-gray-400/30 dark:bg-gray-400/30 rounded"
                        key={index}
                      >
                        {technology}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.a>
            ))}
        </motion.div>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className={`${styles.paragraph} mt-8 text-sm opacity-40`}
      >
        <Footer />
      </motion.div>
    </section>
  );
};

export default Projects;
