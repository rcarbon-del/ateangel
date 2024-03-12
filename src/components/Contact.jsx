import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faFacebook, faInstagram, faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEarth, faMailBulk, faMap, faPhone } from "@fortawesome/free-solid-svg-icons";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import FormfacadeEmbed from "@formfacade/embed-react";

const Contact = () => {
  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-tertiary p-8 rounded-2xl'
      >
        <h2 className={`${styles.sectionHeadText} `}>Contact</h2>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScrF7mZrWHNks2K_H6Bms9xKNBGRdkWjypTiGcY9c-2ORJBjQ/viewform?embedded=true" width="100%" height="1000" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
