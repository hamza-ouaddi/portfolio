import React, { useRef } from "react";
import { motion } from "framer-motion";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
  AiFillDribbbleCircle,
} from "react-icons/ai";
import Avatar from "./Avatar";
import Typewriter from "typewriter-effect";

const Hero = () => {
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
        id="home"
        className="flex flex-row-reverse justify-center items-center sm:px-10 sm:py-16 py-20 snap-start h-screen"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            className="text-center pt-10 "
          >
            <motion.h2
              variants={itemVariants}
              className="font-raleway text-5xl text-cyan-500 font-medium md:text-6xl"
            >
              Hamza OUADDI
            </motion.h2>

            <motion.h3
              variants={itemVariants}
              className="flex justify-center font-raleway text-2xl py-2 my-4 md:text-3xl"
            >
              D
              <Typewriter
                onInit={(typewriter) => {
                  typewriter

                    .typeString("eveloper")
                    .pauseFor(1000)
                    .deleteChars(8)
                    .typeString("esigner")
                    .pauseFor(1000)
                    .deleteChars(7)
                    .start();
                }}
                options={{
                  loop: true,
                }}
              />
            </motion.h3>
            <motion.p
              variants={itemVariants}
              className="font-raleway text-gray-600 dark:text-gray-400 leading-8 sm:text-xl max-w-xl mx-auto "
            >
              An enthusiastic developer and designer driven by a passion for
              creating captivating experiences. I bring ideas to life through
              digital solutions, by combining technical expertise and a creative
              mindset.
            </motion.p>

            <motion.div className="flex justify-center gap-5 text-5xl py-2 mt-6 text-gray-600 dark:text-gray-500 ">
              <motion.a
                variants={itemVariants}
                href="https://www.linkedin.com/in/hamza-ouaddi/"
              >
                <AiFillLinkedin className="hover:text-cyan-500 cursor-pointer" />
              </motion.a>
              <motion.a
                variants={itemVariants}
                href="https://github.com/hamza-ouaddi"
              >
                <AiFillGithub className="hover:text-cyan-500 cursor-pointer" />
              </motion.a>
              <motion.a
                variants={itemVariants}
                href="https://dribbble.com/hamza_adi"
              >
                <AiFillDribbbleCircle className="hover:text-cyan-500 cursor-pointer" />
              </motion.a>
              <motion.a
                variants={itemVariants}
                href="https://twitter.com/hamzaouaddi4"
              >
                <AiFillTwitterCircle className="hover:text-cyan-500 cursor-pointer" />
              </motion.a>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{
                scale: 0.9,
                rotate: 10,
                transition: { duration: 0.2 },
              }}
            >
              <Avatar />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default Hero;
