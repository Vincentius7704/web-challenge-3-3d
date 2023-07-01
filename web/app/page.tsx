"use client"
import Image from 'next/image'
import { BrowserRouter } from 'react-router-dom'

import {About ,  Contact , Experience , Feedbacks , Hero , StarsCanvas , Navbar , Tech , Works } from '../components'













export default function Home() {
  return (
    <BrowserRouter>
        <div className='relative z-0 bg-primary'>
          <div className='bg-center bg-no-repeat bg-cover bg-hero-pattern'>
             <Navbar></Navbar>
             <Hero></Hero>
          </div>
          <About></About>
          <Experience></Experience>
          <Tech></Tech>
          <Works></Works>
          <Feedbacks></Feedbacks>
          <div className='relative z-0'>
            <Contact></Contact>
            <StarsCanvas></StarsCanvas>
          </div>



        </div>
    </BrowserRouter>
  )
}
