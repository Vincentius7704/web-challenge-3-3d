import { motion } from "framer-motion";

import { styles } from '../app/style'
import { secureHeapUsed } from "crypto";
import { HashLink as Link} from "react-router-hash-link"





const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto bg-primary">
      <div className={"absolute top-[120px] inset-0 mx-auto flex items-start gap-5 max-w-7xl " }>
        <div className="flex flex-col items-center justify-start mx-5 mt-16">

          <div className="w-5 h-5 rounded-full bg-violet-500 "></div>
          <div className="w-1 violet-gradient h-80 "></div>

        </div>
        <div className={"mt-16 " }>
          <h1 className={styles.heroHeadText}>Hi I'm Vincent</h1>
          <p className={styles.heroSubText}>I do Web , DataScience , and other stuff</p>
        </div>
      </div>
      <div className="absolute flex items-center justify-center w-full md:bottom-32 bottom-5">
        
        <motion.div 
        
        whileHover={{ scale : 1.9}}
        transition={{type:'spring' , damping:10 , stiffness:100}}
        className="flex items-center justify-center w-10 h-20 border-4 rounded-full border-secondary">
         
          <motion.div 
          
          className="w-3 h-3 mb-1 rounded-full bg-secondary"
      
          animate = {{y:[ 24 , -24 , 24]}}
          transition = {{
            duration :1.5,
            repeat : Infinity , 
            repeatType : 'loop'     
          }}>
           
          </motion.div>
     
        </motion.div>
      </div>
    
    </section>
  );
};

export default Hero;