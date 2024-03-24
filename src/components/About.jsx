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
    <div className="justify-center items-center text-center ">
      <h1 className="font-petit text-tertiary lg:text-[60px] sm:text-[40px] xs:text-[30px] text-[30px] lg:leading-[80px] mt-2">You are invited to the union of</h1>
    </div>
    <div className='flex flex-wrap justify-center items-center xl:mb-10 xl:mt-10'>
      <div className="lg:w-1/3">
        <h2 className={`${styles.padding} text-secondary font-petit md:text-[60px] sm:text-[50px] xs:text-[40px] text-[40px] lg:px-10 justify-center text-center`}>Neil Ian Hidalgo</h2>
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
        <h2 className={`${styles.padding} text-secondary font-petit md:text-[60px] sm:text-[50px] xs:text-[40px] text-[40px] lg:px-10 justify-center text-center`}>Angelica Carbonel</h2>
      </div>
      </div>
      <div className="justify-center items-center text-center ">
        <h1 className="font-petit text-tertiary lg:text-[60px] sm:text-[40px] xs:text-[30px] text-[30px] lg:leading-[80px] mt-2">on May 25, 2024</h1>
        <h1 className="font-petit text-tertiary lg:text-[60px] sm:text-[40px] xs:text-[30px] text-[30px] lg:leading-[80px] mt-2">Saturday</h1>
        <h1 className="font-petit text-tertiary lg:text-[60px] sm:text-[40px] xs:text-[30px] text-[25px] lg:leading-[80px] mt-2">at 10 in the morning</h1>
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")
