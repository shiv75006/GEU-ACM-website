import React from 'react'
import Logo from './acmlogo.png'

import './aboutus.css'
const Aboutus = () => {
  return (
    <div class="About">
        <div class="aboutusdiv">
            <div class="acmlogodiv"> <img src={Logo} class="acmlogoaboutus"></img></div>
          
           <div class="paragraphdiv">
           <p class="paragraph1">ACM brings together computing educators, researchers, and professionals to inspire dialogue, share resources, and address the field's challenges. As the world’s largest computing society, ACM strengthens the profession's collective voice through strong leadership, promotion of the highest standards, and recognition of technical excellence. ACM supports the professional growth of its members by providing opportunities for life‐long learning, career development, and professional networking.</p>
           </div>
           <div class="vl"></div>
           <div class="aimdiv">
            <p class="aim">We aim to enhance the knowledge of our members by organizing technical talks, workshops, field trips ,programming contest and other exciting events, GEU ACM Student Chapters aims to facilitate communication and collaboration within our university’s computer science community and with the computing community at large.</p>
           </div>
        </div>
    </div>
  )
}

export default Aboutus