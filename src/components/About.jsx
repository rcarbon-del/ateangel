import React from "react";
import { Tilt } from "react-tilt";
import {motion} from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faFacebook, faInstagram, faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { properpic, aboutme } from "../assets";
import { faEarth, faMailBulk, faMap, faPhone } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <>
    <div className='flex flex-wrap justify-center items-center xl:mb-40 xl:mt-20'>
      <div className="lg:w-1/3">
        <h2 className={`${styles.padding} text-secondary font-petit md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] lg:px-10 justify-center text-center`}>Angelica Carbonel</h2>
      </div>
 
      <div className="lg:w-1/3">
        <Tilt className="transition-all">
          <motion.img src={properpic} variants={textVariant} className='w-[390px] justify-center items-center gold-green-gradient p-[1px] rounded-[20px] shadow-card' />
          <div className='w-full flex justify-center items-center absolute inset-y-0 inset-x-0'>
            <img src={aboutme} className=" w-[375px] h-[375px] animate-spin-slow" alt="" />
          </div>
        </Tilt>
      </div>

      <div className="lg:w-1/3 ">
        <h2 className={`${styles.padding} text-secondary font-petit md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] lg:px-10 justify-center text-center`}>Neil Ian Hidalgo</h2>
      </div>
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")
