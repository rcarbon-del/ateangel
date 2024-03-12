import React from "react";
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { faChurch, faMapPin } from "@fortawesome/free-solid-svg-icons";

const ProjectCard = ({
  index,
  name,
  description,
  image,
  link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 10,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[550px] w-full transition-all'
      >
        <div className='relative w-[full] h-full'>
          <img
            src={image}
            alt='project_image'
            className=' h-full object-cover rounded-2xl mx-auto'
          />
        </div>

        <div className='mt-5'>
          <h3 className='font-black text-secondary lg:text-[60px] sm:text-[40px] xs:text-[30px] text-[20px] lg:leading-[80px] mt-2'>{name}</h3>
          <p className='mt-2 text-white font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]'>{description}</p>
          <iframe 
            src={link} 
            width="100%" 
            height="450" 
            style={{border:0}} 
            allowFullScreen="" 
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className=" rounded-2xl"
          ></iframe>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.heroHeadText} `}>Location</p>
      </motion.div>

      <div className='flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "location");
