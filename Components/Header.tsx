import React from 'react'
import {SocialIcon} from "react-social-icons";
import { motion } from 'framer-motion';

type Props = {}

function Header({}: Props) {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between z-20 max-w-7xl mx-auto xl:items-center"> 
        
          <motion.div initial={{
              x: -500,
              opacity: 0,
              scale:0.5
          }}
              animate={{
                  x: 0,
                  opacity: 1,
                  scale:1
              }}
              transition={{
                  duration:1.5
              }}
              className='flex flex-row items-center'>
            {/* Social icons */}
            <SocialIcon url='https://www.linkedin.com/in/samy-layaida-b70756222/' fgColor='gray' bgColor='transparent' target={"_blank"}/>
            <SocialIcon url='https://github.com/Samylay' fgColor='gray' bgColor='transparent' target={"_blank"}/>
            <SocialIcon url='https://github.com/Samylay' fgColor='gray' bgColor='transparent' target={"_blank"}/>
        </motion.div>
          
        <motion.div initial={{
              x: 500,
              opacity: 0,
              scale:0.5
          }}
              animate={{
                  x: 0,
                  opacity: 1,
                  scale:1
              }}
              transition={{
                  duration:1.5
              }} className="flex flex-row items-center text-gray-300">
            <a href="#contact">
                <SocialIcon
                className='cursor-pointer'
                network='email'
                fgColor='gray'
                bgColor='transparent'
                />
                        <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Contact me</p>
            </a>
        </motion.div>
        
          
    </header> 
);
}

export default Header