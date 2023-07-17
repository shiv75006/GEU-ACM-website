import React from 'react'
import Geupic from './geupic.png'
import { Link } from 'react-router-dom';
import Login from '../Loginform/Login'
import './hero.css'
import { Button} from 'react-bootstrap';
const Hero = () => {
  return (
    <div>
    <div className="background">
    <div className="welcometext">
     <h1>Welcome to</h1>
     <h1>GEU ACM</h1>
     <h1>Student Chapter</h1>
     <button className="joinusb"><Link  to="/Login" style={{"fontFamily":"montserrat","color":"white","textDecoration":"none"}}>Join us</Link></button> 
 </div>
 </div>
 </div>
  )
}

export default Hero