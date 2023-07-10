import React from 'react'
import Geupic from './geupic.png'
import { Link } from 'react-router-dom';
import {Login} from '../Loginform/Login'
import './hero.css'
const Hero = () => {
  return (
    <div class="background">
    <div class="welcometext">
     <h1>Welcome to</h1>
     <h1>GEU ACM</h1>
     <h1>Student Chapter</h1>
  <button class="joinusb"><Link to="/Login">Join us</Link></button>
 </div>
 </div>
  )
}

export default Hero