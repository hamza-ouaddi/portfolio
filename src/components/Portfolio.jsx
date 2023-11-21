import React, { useState } from "react";
import { motion } from "framer-motion";
import { works } from "../constants";
import styles from "../styles";
import { Link } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("Development");
  const categories = ["Development", "UI/UX", "Graphic Design"];

  const filterWorks = works.filter(
    (work) => work.category === selectedCategory
  );

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
    <section id="portfolio" className=" mt-8 sm:py-16 pt-20 pb-48 snap-start">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        className="lg:px-10 px-2 pb-16 text-center"
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

        <motion.div variants={itemVariants} className="mt-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 mr-4 rounded ${
                selectedCategory === category
                  ? "bg-gray-800 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-col gap-10 sm:px-10 px-4 lg:flex-row lg:flex-wrap mt-12"
        >
          {filterWorks
            .sort((a, b) => b.id - a.id)
            .slice(0, 6)
            .map((work) => (
              <a
                href={work.link}
                className="lg:basis-1/3 sm:flex flex-col flex-1 relative inset-0 justify-center items-center"
                key={work.id}
              >
                <div className="w-full sm:h-[480px] min-h-[300px] relative overflow-hidden rounded-lg">
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
                  <p className="leading-8  sm:text-[1rem] text-[0.95rem]">
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
              </a>
            ))}
        </motion.div>
        <motion.div className="sm:px-10 px-4 sm:pt-12 pt-8 pb-16">
          <Link
            variants={itemVariants}
            to="/projects"
            className="font-raleway text-[1.3rem] px-6 py-2 rounded-md bg-gradient-to-tr from-cyan-500 to-cyan-300 text-white hover:shadow-cyan-100 hover:shadow-lg  dark:hover:shadow-cyan-500/25"
          >
            See More
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Portfolio;
