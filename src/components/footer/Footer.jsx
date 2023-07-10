import React from 'react'
import { Link } from "react-router-dom";
import Instalogo from './instagram.svg'
import Linkedinlogo from './linkedin-in.svg'
import './footer.css'
const Footer = () => {
  return (
    <div>
        <div class="footer">
            <div class="footerdiv">
            <Link to="https://www.instagram.com/geuacm/?hl=en"><img src={Instalogo } class="instalogo" alt=""></img></Link>
            <div class="vl3"></div>
            <Link to="https://www.linkedin.com/company/geu-acm/mycompany/"><img src={Linkedinlogo } class="instalogo" alt=""></img></Link>
            </div>
            <div>
                <hr class="hline"></hr>
                <div class="rights">
                    <p>All Rights reserved</p>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Footer