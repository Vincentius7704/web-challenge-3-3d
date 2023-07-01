"use client"
import React from 'react'
import {Suspense , useEffect , useState} from 'react'
import { Canvas } from '@react-three/fiber';
import { CanvasLoader } from '../Loader';
import { OrbitControls , Preload , useGLTF} from '@react-three/drei'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const ComputersCanvas = () => {
  const loader = new GLTFLoader()
  
  return(
    <div>computer</div>
  )
};

export default ComputersCanvas;
