import React from 'react'
import {Navbar} from './components'
import './alumnus.css'
import Instalogo from './components/footer/instagram.svg'
import Linkedinlogo from './components/footer/linkedin-in.svg'
import Diksha from './alumimg/Asset 4@4x.png'
// import Gaurangi from './alumimg/Gaurangi.png'
const Alumnus = () => {
  return (
    <div>
        <div class="alumnusbghide"></div>
        <Navbar></Navbar>
        <div>
            <div class="alumcard">
                
                <img src={Diksha} class="alumimg"></img>
                <h1 class="alumname">Diksha Bisht</h1>
                <div class="alumdes">
                <h4>B.Tech. CSE</h4>
                <h4>Session : 2019-23</h4>
                <h4>Morgan Stanley</h4>
                </div>
                <div class="socialmedia">
                  <img src={Instalogo} class="scmicon"></img>
                  <div class="scmvl"></div>
                  <img src={Linkedinlogo} class="scmicon"></img>
                </div>
            </div>


            <div class="alumcard2">
                
                <img src={Diksha} class="alumimg"></img>
                <div class="alumnamegt">
                <h1>Gaurangi Tripathi</h1>
                </div>
                <div class="alumdes">
                <h4>B.Tech. CSE</h4>
                <h4>Session : 2019-23</h4>
                <h4>Morgan Stanley</h4>
                </div>
                <div class="socialmedia">
                  <img src={Instalogo} class="scmicon"></img>
                  <div class="scmvl"></div>
                  <img src={Linkedinlogo} class="scmicon"></img>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Alumnus