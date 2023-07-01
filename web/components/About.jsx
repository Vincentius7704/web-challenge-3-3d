import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '@/app/style'
import Wrapper from "../HOC/Wrapper"
import { textVariant  , fadeIn } from './flow'
import { services } from '@/constants'
import Image from 'next/image'

function ServiceTilt({index , title , icon}){
  return(
    
     <Tilt className = 'w-full rounded-full xs:w-[250px]'>
       
        <motion.div 
        variants={fadeIn("right" , "spring" , 0.5 *index , 0.75)}
        initial = 'hidden'
        whileInView='show'
        className='w-full green-pink-gradient p-[1px] rounded-[20px]' >
          <div className='bg-tertiary p-[1px] rounded-[20px] flex flex-col items-center justify-evenly min-h-[280px]'>
            <Image src = {icon} alt = "image not loaded" className='w-20 h-20'></Image>
            <p className='text-white'>{title}</p>
          </div>
        </motion.div>
     </Tilt>
    
  )
}



const About = () => {
  return (
   <div className='relative items-center justify-center w-screen pt-10'>
    <div className='flex flex-col items-center justify-center w-full '>
      <motion.div
      className='flex flex-col items-center justify-center mb-7s'
      whileInView={{scale : 1.5}}
      whileHover={{scale : 1.9}}
      transition={{type:'spring' , stiffness:300}}
      >
       <h2 className={styles.sectionSubText}>Intoduction</h2>
       <h1 className={styles.sectionHeadText}>Overview</h1>
      </motion.div>
       <p className={`mt-16 w-full leading-[30px] text-secondary text-justify mx-5 max ${styles.paddingX} md:max-w-3xl`}>So in this page im learning about web development , data science , machine learning , deep learning and many more . though i dont have that much experience i enjoy this thing as a hobbies , so well yeah the next parapgraph will coming from chat gpt. <br /> <br />
 

        Web Development: Web development refers to the process of creating websites and web applications that are accessible through the internet. It involves the combination of various technologies and programming languages, such as HTML, CSS, and JavaScript, to design and develop the visual interface, functionality, and interactivity of a website. Web developers work on both the client-side (frontend) and server-side (backend) components of a website, ensuring that it is responsive, user-friendly, and performs the desired tasks. They may also integrate databases, APIs, and other tools to enhance the functionality of a website. Web development plays a crucial role in establishing an online presence, enabling businesses and individuals to showcase their products, services, and ideas to a global audience. 

        </p>

        
        {/* This will be div that map services into tilt  */}
        <div className = {`flex flex-wrap gap-10 mt-20 w-full ${styles.paddingX} justify-center`}>
           {services.map((service , index) => 
           <ServiceTilt key = {service.title} index = {index} {...service} ></ServiceTilt>
           )}
        </div>
    
    
    </div>
  </div>
  )
}


export default About