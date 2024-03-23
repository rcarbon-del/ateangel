import {motion} from "framer-motion";

import ReactTyped from "react-typed";
import {styles} from "../styles";
import {ComputersCanvas} from "./canvas";
import { silhouette } from "../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faFacebook, faInstagram, faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto flex justify-center items-center `}>
      <div
        className={`grid grid-cols-1 justify-items-center max-w-7xl mx-auto ${styles.paddingX} `}
      >
        <div>
          <h1 className='sm: text-7xl lg:text-8xl xl:text-[9rem] text-gold font-petit text-center '>Neil Ian
          </h1>
          <h1 className='sm: text-5xl lg:text-6xl text-gold font-petit text-center'>&
          </h1>
          <h1 className='sm: text-7xl lg:text-8xl xl:text-[9rem] text-gold font-petit text-center '>Angelica
          </h1>
        </div>
      </div>

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-gold flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-gold mb-1'
            />
          </div>
        </a>
      </div>
    </section>
    
  );
};

export default Hero;
