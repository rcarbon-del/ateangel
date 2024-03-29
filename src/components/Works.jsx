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
  title,
  name,
  description,
  image,
  link,
}) => {
  return (
    <div className='bg-tertiary p-5 rounded-2xl sm:w-[550px] w-full transition-all'>
      
      <div className="mt-5">
        <h2 className={`${styles.sectionHeadText} justify-center text-center`}>{title}</h2>
      </div>
      
      <div className='relative w-full h-full'>
        <img
          src={image}
          alt='project_image'
          className=' -full object-cover rounded-2xl mx-auto'
        />
        <h3 className='mt-5 font-black text-secondary lg:text-[60px] sm:text-[40px] xs:text-[30px] text-[20px] lg:leading-[80px] mt-2 justify-center text-center'>{name}</h3>
        <p className='mt-2 text-white font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] justify-center text-center visi'>{description}</p>
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
    </div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.heroHeadText} items-center text-center`}>Location</p>
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
