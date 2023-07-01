import { motion } from 'framer-motion'
import React from 'react'
import { styles } from '@/app/style';


const textVariant = (delay) => {
    return {
      hidden: {
        y: -50,
        opacity: 0,
      },
      show: {
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 1.25,
          delay: delay,
        },
      },
    };
  };
const Wrapper = (Component) => 
  
    function HOC(){
        return(
            
            <motion.div
            variants={textVariant(2)}
            initial  = 'hidden'
            whileInView='show'
            viewport={{once: true  , amount:0.25}}
            className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
            >
              <Component></Component>
            </motion.div>



        )
        }


export default Wrapper