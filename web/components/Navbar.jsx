"use client"
import React from 'react'
import { useEffect , useState} from 'react'
import { Link } from 'react-router-dom'
import { navLinks } from '../constants'
import {logo , menu  , close} from '../app/assets'
import { styles } from '../app/style'
import Image from 'next/image'





const Navbar = () => {
  const [ active , setActive] = useState('')
  const [toggle , setToggle] = useState(false)


  return (
    <nav className={`${styles.paddingX} w-full  items-center py-5 top-0 fixed z-20 bg-primary`}>
       <div className='flex items-center justify-between mx-auto max-w-7xl'>

        <Link 
        to="/"
        className='flex items-center gap-2'
        onClick={()=> 
        { setActive("")
         window.scrollTo(0, 0)  }}
        >
          <Image src={logo} 
          alt='logo' 
          className='object-contain w-9 h-9'></Image>
          <p className='text-white text-[18px] font-bold cursor-pointer flex'>Vincent &nbsp;  
          <span className='hidden sm:block'>|  A learner</span>
          </p>
        </Link>
        <ul className='flex-row hidden gap-10 list-none sm:flex'>
          {navLinks.map((link)=> (
              <li key={link.id} className={`${
                active == link.title ? 'text-white' : 'text-secondary'
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={()=> setActive(link.title)}>
                <a href={link.id}>{link.title}</a>
              </li>

          ) ) }
        </ul>

        <div className='flex items-center justify-end flex-1 sm:hidden'>
          <Image src={toggle ? close : menu } 
          alt = 'menu' className='w-[28px] h-[28px] object-contain cursor-pointer ' onClick={() => setToggle(!toggle)}></Image>
          <div className={`${!toggle? ' hidden ' : ' flex '} p-6 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-md black-gradient`}>

          <ul className='flex flex-col gap-4 list-none'>
          {navLinks.map((link)=> (
              <li key={link.id} className={`${
                active == link.title ? 'text-white' : 'text-secondary'
              } hover:text-white text-[16px] font-medium cursor-pointer`}
              onClick={()=> {
              setActive(link.title)
              setToggle(!toggle)}}>
                <a href={link.id}>{link.title}</a>
              </li>

          ) ) }
        </ul>

          </div>
        </div>


           
       </div>
    </nav>
  )
}

export default Navbar

