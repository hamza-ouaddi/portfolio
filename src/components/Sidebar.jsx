import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const Sidebar = () => {
  const sections = ["home", "skills", "services", "portfolio", "contact"];
  const [activeSection, setActiveSection] = useState(sections[0]);
  const observerRef = useRef(null);

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  //To observe each section on the page.
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        observerRef.current.observe(element);
      }
    });

    return () => {
      observerRef.current.disconnect();
    };
  }, [sections]);

  //Animation
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
      x: -100,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        ease: [0.6, 0.01, 0.05, 0.95],
        duration: 1,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="fixed lg:flex hidden items-center left-0 top-0 z-100 h-full sidebar"
    >
      <motion.ul
        variants={itemVariants}
        className="flex flex-col m-8 gap-2 font-raleway text-gray-600"
      >
        {sections.map((section, index) => (
          <li
            key={index}
            className={section === activeSection ? "active" : ""}
            onClick={() => handleSectionClick(section)}
          >
            <a href={`#${section}`} className="hover:text-cyan-500 p-2">
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          </li>
        ))}
      </motion.ul>
    </motion.div>
  );
};

export default Sidebar;
