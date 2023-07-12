import React from "react";
import styles from "../styles";
import { logoSymbolDark } from "../constants";
import { motion } from "framer-motion";

import Footer from "./Footer";

const Contact = () => {
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
    <>
      <section
        id="contact"
        className="lg:max-w-[1400px] flex flex-col justify-center sm:p-10 mx-auto sm:px-10 md:px-2 sm:py-16 py-20 snap-start min-h-[954px]"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          className="flex sm:flex-row flex-col justify-center items-center gap-8 flex-grow"
        >
          <div className="flex justify-end basis-1/3 w-21">
            <motion.img
              variants={itemVariants}
              src={logoSymbolDark}
              alt="Logo-symbol"
              className="w-32 "
            />
          </div>

          <div className="relative flex flex-col sm:items-start items-center justify-center  sm:px-10 md:px-2 leading-8 basis-1/2">
            <motion.h3
              variants={itemVariants}
              className={`${styles.heading} text-gray-600 dark:text-gray-300 inline leading-none`}
            >
              Get In Touch
            </motion.h3>
            <motion.p
              variants={itemVariants}
              className={`${styles.paragraph} text-[1.5rem] sm:text-start text-center sm:w-[70%] pt-4 pb-4 text-gray-600 dark:text-gray-400`}
            >
              Get in touch with me via email to explore project possibilities or
              discuss any opportunities. I'm excited to connect with you and
              create something exceptional. Let's collaborate and make your
              vision come to life!
            </motion.p>

            <motion.a
              variants={itemVariants}
              href="mailto:hamzaouaddi04@gmail.com"
              rel="noopener noreferrer"
              target="_blank"
              className="font-raleway text-[1.3rem] px-6 py-2 rounded-md bg-gradient-to-tr from-cyan-500 to-cyan-300 text-white hover:shadow-cyan-100 hover:shadow-lg  dark:hover:shadow-cyan-500/25"
            >
              Say Hello
            </motion.a>
          </div>
        </motion.div>
        <motion.div
          variants={itemVariants}
          className={`${styles.paragraph} text-sm opacity-40`}
        >
          <Footer />
        </motion.div>
      </section>
    </>
  );
};

export default Contact;
