import React from "react";
import { Tilt } from "react-tilt";
import {motion} from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faFacebook, faInstagram, faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { properpic, aboutme, pic1, pic2, pic3 } from "../assets";
import { faEarth, faMailBulk, faMap, faPhone } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <>
    <div className="justify-center items-center text-center ">
      <h1 className="font-petit text-tertiary lg:text-[60px] sm:text-[40px] xs:text-[30px] text-[30px] lg:leading-[80px] mt-2">You are invited to the union of</h1>
      <h2 className={`${styles.padding} text-secondary font-pinyon sm:text-[60px] lg:text-[70px] text-[60px] lg:px-10 justify-center text-center`}>Neil Ian Hidalgo <br className="lg:hidden"></br>& <br className="lg:hidden"></br>Angelica Carbonel</h2>
    </div>
    <div className='flex flex-wrap justify-center items-center xl:mb-10 gap-3'>
    <div>
        <Tilt className="transition-all">
          <motion.img src={pic3} variants={textVariant} className='w-[390px] justify-center items-center gold-green-gradient p-[1px] rounded-[20px] shadow-card' />
        </Tilt>
      </div>

      <div className="lg:w-full">
        <div className="flex justify-center items-center gap-2 lg:flex-nowrap flex-wrap mb-10">
          <img src={pic1} className="w-[390px] rounded-[20px] gold-green-gradient p-[1px] transition-transform duration-300 transform hover:scale-150 hover:z-10" alt="" />
          <img src={properpic} className="w-[390px] rounded-[20px] gold-green-gradient p-[1px] transition-transform duration-300 transform hover:scale-150 hover:z-10" alt="" />
        </div>
      </div>
    </div>
      <div className="justify-center items-center text-center ">
        <h1 className="font-petit text-tertiary lg:text-[60px] sm:text-[40px] xs:text-[30px] text-[30px] lg:leading-[80px] mt-2">We humbly request your presence</h1>
        <h1 className="font-petit text-tertiary lg:text-[60px] sm:text-[40px] xs:text-[30px] text-[30px] lg:leading-[80px] mt-2">on May 25, 2024</h1>
        <h1 className="font-petit text-tertiary lg:text-[60px] sm:text-[40px] xs:text-[30px] text-[30px] lg:leading-[80px] mt-2">Saturday</h1>
        <h1 className="font-petit text-tertiary lg:text-[60px] sm:text-[40px] xs:text-[30px] text-[30px] lg:leading-[80px] mt-2">at 10 o' clock in the morning</h1>
      </div>
      <img src={aboutme} className="flex w-[300px] justify-center items-center center mx-auto" alt="" />
    </>
  )
}

export default SectionWrapper(About, "about")
