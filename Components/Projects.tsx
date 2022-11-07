import React from "react";
import { motion } from "framer-motion";

function Projects() {
  const projects = [1, 2, 3, 4, 5];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex flex-col relative text-center mx-auto items-center overflow-hidden md:flex-row max-w-full
    justify-evenly z-0 "
    >
      <h3 className="absolute top-24 tracking-[20px] text-gray-500 uppercase text-2xl font-semibold">
        Projects
      </h3>
      <div className="w-full absolute top-[30%] bg-[#735b26]/30 left-0 h-[500px] -skew-y-12 "></div>

      <div
        className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x 
      snap-mandatory z-20"
      >
        {projects.map((project, i) => (
          <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 justify-center p-20 md:p-44 h-screen">
            <motion.img
              src="/photo_profile.jpg"
              alt="project preview"
              className="max-w-xl mx-auto w-32 h-32"
            />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl mx-auto">
              <h4 className="text-3xl font-semibold text-center">
                <span className=" underline decoration-[#F7AB0A]/50  ">
                  Case Study {i + 1} of {projects.length}:
                </span>
                UPS clone
              </h4>
              <p className=" text-lg text-center ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
                commodi tempora nobis ullam quod quidem voluptatibus
                necessitatibus. Accusamus necessitatibus quos id laudantium,
                illum velit cumque deserunt eaque, nemo, quidem enim?
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default Projects;
