import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import avatarImage from "../assets/avatar.png";
import avatar3D from "../assets/3d-avatar.png";
import logoSymbolLight from "../assets/logo-icon-light.png";
const Avatar = () => {
  const [currentAvatar, setCurrentAvatar] = useState(avatar3D);
  const delayTimeoutRef = useRef(null);

  const handleHover = () => {
    clearTimeout(delayTimeoutRef.current);

    delayTimeoutRef.current = setTimeout(() => {
      if (currentAvatar === avatar3D) {
        setCurrentAvatar(avatarImage);
      } else if (currentAvatar === avatarImage) {
        setCurrentAvatar(logoSymbolLight);
      } else {
        setCurrentAvatar(avatar3D);
      }
    }, 100);
  };

  return (
    <motion.div>
      <motion.div
        className={`cursor-pointer relative rounded-full w-64 h-64 mx-auto mt-8 overflow-hidden md:h-96 md:w-96 avatar-container ${
          currentAvatar !== avatarImage ? "bg-gradient-to-b from-cyan-500" : ""
        } `}
        onClick={handleHover}
      >
        <motion.img
          src={currentAvatar}
          alt="Avatar"
          className="object-cover w-full h-full"
        />
      </motion.div>
    </motion.div>
  );
};

export default Avatar;
