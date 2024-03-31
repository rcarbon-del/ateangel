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
      <h1 className="font-petit text-tertiary lg:text-[65px] sm:text-[45px] xs:text-[35px] text-[35px] lg:leading-[80px] mt-2">With the Grace of God & with the blessings of our parents</h1>
      <h2 className={`${styles.padding} text-secondary font-pinyon sm:text-[60px] lg:text-[73px] text-[60px] lg:px-10 justify-center text-center mt-10 lg:mt-0`}>Neil Ian Hidalgo <br className="lg:hidden"></br>& <br className="lg:hidden"></br>Angelica Carbonel</h2>
    </div>
    <div className='flex flex-wrap justify-center items-center xl:mb-10 gap-3 mt-10 lg:mt-0'>
    <div>
        <Tilt className="transition-all">
          <motion.img src={pic3} variants={textVariant} className='w-[390px] justify-center items-center gold-green-gradient p-[1px] rounded-[20px]' />
        </Tilt>
      </div>

      <div className="lg:w-full">
        <div className="flex justify-center items-center gap-2 lg:flex-nowrap flex-wrap mb-10">
          <img src={pic1} className="w-[390px] rounded-[20px] gold-green-gradient p-[1px] transition-transform duration-300 transform lg:hover:scale-150 hover:z-10" alt="" />
          <img src={properpic} className="w-[390px] rounded-[20px] gold-green-gradient p-[1px] transition-transform duration-300 transform lg:hover:scale-150 hover:z-10" alt="" />
        </div>
      </div>
    </div>
      <div className="justify-center items-center text-center ">
        <h1 className="font-petit text-tertiary text lg:text-[65px] sm:text-[45px] xs:text-[35px] text-[35px] lg:leading-[80px] mt-20 lg:mt-2">Cordially invites you to our wedding.</h1>
        <h1 className="font-petit text-tertiary lg:text-[60px] sm:text-[40px] xs:text-[30px] text-[30px] lg:leading-[80px] mt-14 lg:mt-5">We humbly request your presence</h1>
        <h1 className="font-petit text-tertiary lg:text-[60px] sm:text-[40px] xs:text-[30px] text-[30px] lg:leading-[80px] mt-2">on May 25, 2024</h1>
        <h1 className="font-petit text-tertiary lg:text-[60px] sm:text-[40px] xs:text-[30px] text-[30px] lg:leading-[80px] mt-2">Saturday</h1>
        <h1 className="font-petit text-tertiary lg:text-[60px] sm:text-[40px] xs:text-[30px] text-[30px] lg:leading-[80px] mt-2">at 10 o' clock in the morning</h1>
        <h1 className="font-black text-transparent bg-clip-text bg-gradient-to-br from-secondary to-tertiary lg:text-[60px] sm:text-[40px] xs:text-[30px] text-[30px] lg:leading-[80px] mt-14 mb-24 lg:mt:2">#IANfoundhisANGEL</h1>
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")
