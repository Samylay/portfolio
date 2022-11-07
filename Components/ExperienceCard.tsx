import React from "react";
import { motion } from "framer-motion";

type Props = {};

function experienceCard({}: Props) {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-7 
    flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929]
     p-10 opacity-40 hover:opacity-100 transition-opacity duration-200 overflow-hidden"
    >
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        src="/photo_profile.jpg"
        alt="Company logo"
        className="object-cover object-center rounded-full w-32 h-32 xl:w-[200px] xl:h-[200px]"
      />

      <div className="px-0 md:px-10">
        <h4 className="text-3xl font-light">Job Title</h4>
        <p className="font-bold text-2xl mt-1">Company's name</p>

        <div className="flex space-x-2 my-2">
          {/* tech used */}
          <img
            src="/photo_profile.jpg"
            alt=""
            className="h-10 w-10 rounded-full"
          />
          <img
            src="/photo_profile.jpg"
            alt=""
            className="h-10 w-10 rounded-full"
          />
          <img
            src="/photo_profile.jpg"
            alt=""
            className="h-10 w-10 rounded-full"
          />
        </div>
        <p className="uppercase py-5 text-gray-300">Started... - Ended...</p>
        <ul className=" list-disc space-y-4 ml-5 text-lg">
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
        </ul>
      </div>
    </article>
  );
}

export default experienceCard;
