import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  logoDark,
  logoWhite,
  menuIcon,
  menuIconDark,
  closeIcon,
  closeIconDark,
} from "../constants";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import Resume from "/Resume.pdf";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [toggle, setToggle] = useState(false);

  const containerVariants = {
    show: {
      transition: {
        staggerChildren: 0,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: -100,
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

  const listVariant = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.6, 0.01, 0.05, 0.95],
        duration: 0.6,
      },
    },
  };
  return (
    <>
      <motion.nav
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        className="flex sm:justify-between py-10 snap-start  absolute w-full"
      >
        <Link to="/">
          <motion.img
            variants={itemVariants}
            src={darkMode ? logoWhite : logoDark}
            alt="Logo"
            className="w-32 "
          />
        </Link>

        <motion.ul
          variants={itemVariants}
          className="sm:flex hidden items-center"
        >
          <li>
            <button
              onClick={toggleDarkMode}
              className="flex items-center  text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              {darkMode ? (
                <BsFillSunFill className="text-2xl cursor-pointer mr-8" />
              ) : (
                <BsFillMoonFill className="text-2xl cursor-pointer mr-8" />
              )}
            </button>
          </li>

          <li className="flex gap-8">
            <Link
              to="/projects"
              className=" text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white  py-3 rounded-md font-raleway "
            >
              Projects
            </Link>
            <a
              href={Resume}
              target="_blank"
              className="bg-gradient-to-r from-cyan-500 to-cyan-300 text-white px-6 py-3 rounded-md font-raleway hover:shadow-cyan-100 hover:shadow-lg  dark:hover:shadow-cyan-500/25"
            >
              Resume
            </a>
          </li>
        </motion.ul>

        <motion.div
          variants={itemVariants}
          className="sm:hidden flex flex-1 justify-end items-center"
        >
          <button
            onClick={toggleDarkMode}
            className="flex items-center  text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white mr-8"
          >
            {darkMode ? (
              <BsFillSunFill className="text-2xl cursor-pointer" />
            ) : (
              <BsFillMoonFill className="text-2xl cursor-pointer" />
            )}
          </button>
          <motion.img
            src={
              toggle
                ? darkMode
                  ? closeIcon
                  : closeIconDark
                : darkMode
                ? menuIcon
                : menuIconDark
            }
            alt="Menu"
            className="w-[32px] h-[32px] object-contain cursor-pointer"
            onClick={() => setToggle((prev) => !prev)}
          />

          <AnimatePresence>
            {toggle && (
              <motion.div
                variants={listVariant}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className={`${
                  toggle ? "flex" : "hidden"
                } bg-gradient-to-tr from-cyan-600 to-cyan-200 p-6 absolute top-20 right-0 mx-6 my-6 min-w-[140px] rounded-xl`}
              >
                <ul className="list-none flex flex-col items-center flex-1 gap-4">
                  <li>
                    <a
                      href={Resume}
                      target="_blank"
                      className=" text-white text-[1.2rem] font-raleway hover:text-gray-600"
                    >
                      Resume
                    </a>
                  </li>

                  <li>
                    <Link
                      to="/projects"
                      className=" text-white text-[1.2rem] font-raleway hover:text-gray-600"
                    >
                      Projects
                    </Link>
                  </li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.nav>
    </>
  );
};

export default Navbar;
