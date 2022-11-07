import React from "react";
import { motion } from "framer-motion";

type Props = {};

function About({}: Props) {
  return (
    <div className="h-screen text-center mx-auto items-center max-w-7xl px-10">
      <h3 className="relative top-24 tracking-[20px] text-gray-500 uppercase text-2xl font-semibold">
        about
      </h3>
      <motion.div
        initial={{
          opacity: 0,
          x: 500,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 1.5,
        }}
        viewport={{ once: true }}
        className="relative top-56 space-y-10 px-0  md:px-10"
      >
        <h4 className="text-3xl font-semibold">A little introduction</h4>
        <p className="text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ab
          porro reiciendis modi at ducimus provident vel, suscipit illum
          asperiores vero autem. Tenetur consectetur vitae quibusdam voluptate
          ab officia doloribus, illum alias quaerat veniam cupiditate vero amet
          assumenda ipsam tempore! Repellat ab temporibus qui, doloribus
          consequuntur vero delectus inventore nostrum voluptatum est debitis
          quod, harum quas eum provident dolore quam fugit veritatis, nulla nam
          asperiores? Quasi, nam. Quis voluptas, ratione modi corporis ducimus
          qui non itaque sint? Quibusdam, voluptate. Doloribus id deleniti
          laboriosam soluta eaque, tenetur inventore, quis, repudiandae debitis
          nam voluptatibus obcaecati odit sit maxime odio dolor dicta? Ad.
        </p>
      </motion.div>
    </div>
  );
}

export default About;
