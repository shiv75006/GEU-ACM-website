import React from 'react'
import './officers.css'
import Instalogo from './instagram.svg';
import Linkedinlogo from './linkedin-in.svg';
import Shivam from './ShivamGupta.jpg'
import Amaan from './amaan.png'
import Arnav from './arnav.png'
import Shivyanshu from './shivyanshu.png'
import Shivang from './shivang.png'
const Officers = () => {
  return (
    <div>
        <div class="officersdiv">
            <div class="officersHead">
                <h1>Office Bearers (2023)</h1>
            </div>


            <div class="officerscarousel">
            <section class="container">
      <div class="card">
        <div class="image">
          <img src={Shivam} alt="" />
        </div>
        <h2>Shivam Gupta</h2>
        <p>CHAIR</p>
        <div class="socialmediaoff">
                  <img src={Instalogo} class="scmofficon"></img>
                  <div class="scmvloff"></div>
                  <img src={Linkedinlogo} class="scmofficon"></img>
                </div>
      </div>
      <div class="card">
        <div class="image">
          <img src={Amaan} alt="" />
        </div>
        <h2>Md. Amaanullah</h2>
        <p>VICE-CHAIR</p>
        <div class="socialmediaoff">
                  <img src={Instalogo} class="scmofficon"></img>
                  <div class="scmvloff"></div>
                  <img src={Linkedinlogo} class="scmofficon"></img>
                </div>
      </div>
      <div class="card">
        <div class="image">
          <img src={Shivyanshu} alt="" />
        </div>
        <h2>Shivyanshu</h2>
        <p>WEBMASTER</p>
        <div class="socialmediaoff">
                  <img src={Instalogo} class="scmofficon"></img>
                  <div class="scmvloff"></div>
                  <img src={Linkedinlogo} class="scmofficon"></img>
                </div>
      </div>
      <div class="card">
        <div class="image">
          <img src={Arnav} alt="" />
        </div>
        <h2>Arnav Garg</h2>
        <p>SECRETARY</p>
        <div class="socialmediaoff">
                  <img src={Instalogo} class="scmofficon"></img>
                  <div class="scmvloff"></div>
                  <img src={Linkedinlogo} class="scmofficon"></img>
                </div>
      </div>
      <div class="card">
        <div class="image">
          <img src={Shivang} alt="" />
        </div>
        <h2>Shivang Yadav</h2>
        <h4 class="membch">MEMBERSHIP-CHAIR</h4>
        <div class="socialmediaoff">
                  <img src={Instalogo} class="scmofficon"></img>
                  <div class="scmvloff"></div>
                  <img src={Linkedinlogo} class="scmofficon"></img>
                </div>
      </div>
    </section>
            </div>
        </div>
    </div>
  )
}

export default Officers