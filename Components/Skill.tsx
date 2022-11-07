import React from "react";
import { motion } from "framer-motion";

type Props = {
  directionLeft?: boolean;
};

function Skill({ directionLeft }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{
          duration: 1.5,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        src="/photo_profile.jpg"
        alt="skill logo"
        className=" rounded-full w-16 h-16 xl:w-32 xl:h-32 object-cover group-hover:grayscale 
              transition duration-300 ease-in-out"
      />
    </div>
  );
}

export default Skill;
