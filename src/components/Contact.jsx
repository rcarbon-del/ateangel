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
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-tertiary p-8 rounded-2xl'
      >
        <h2 className={`${styles.sectionHeadText} justify-center text-center`}>RSVP</h2>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScrF7mZrWHNks2K_H6Bms9xKNBGRdkWjypTiGcY9c-2ORJBjQ/viewform?embedded=true" width="100%" height="1000" frameborder="0" marginheight="0" marginwidth="0" className="rounded-2xl ">Loading…</iframe>
      </motion.div>
  );
};

export default SectionWrapper(Contact, "rsvp");
