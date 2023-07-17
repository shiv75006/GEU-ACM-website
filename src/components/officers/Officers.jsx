import React from "react";
import "./officers.css";
import Instalogo from "./instagram.svg";
import Linkedinlogo from "./linkedin-in.svg";
import Shivam from "./ShivamGupta.jpg";
import Amaan from "./amaan.png";
import Arnav from "./arnav.png";
import Shivyanshu from "./shivyanshu.png";
import Shivang from "./shivang.png";
const Officers = () => {
  return (
    <div>
         <div className="officersHead">
          <h1>Office Bearers (2023)</h1>
      </div>
      <div className="officersdiv">
        <div className="officerscarousel">
          <section className="container">
            <div className="card">
              <div className="image">
                <img src={Shivam} alt="" />
              </div>
              <h2>Shivam Gupta</h2>
              <p>CHAIR</p>
              <div className="socialmediaoff">
                <img src={Instalogo} className="scmofficon"></img>
                <div className="scmvloff"></div>
                <img src={Linkedinlogo} className="scmofficon"></img>
              </div>
            </div>
            <div className="card">
              <div className="image">
                <img src={Amaan} alt="" />
              </div>
              <h2>Md. Amaanullah</h2>
              <p>VICE-CHAIR</p>
              <div className="socialmediaoff">
                <img src={Instalogo} className="scmofficon"></img>
                <div className="scmvloff"></div>
                <img src={Linkedinlogo} className="scmofficon"></img>
              </div>
            </div>
            <div className="card">
              <div className="image">
                <img src={Shivyanshu} alt="" />
              </div>
              <h2>Shivyanshu Saini</h2>
              <p>WEBMASTER</p>
              <div className="socialmediaoff">
                <img src={Instalogo} className="scmofficon"></img>
                <div className="scmvloff"></div>
                <img src={Linkedinlogo} className="scmofficon"></img>
              </div>
            </div>
            <div className="card">
              <div className="image">
                <img src={Arnav} alt="" />
              </div>
              <h2>Arnav Garg</h2>
              <p>SECRETARY</p>
              <div className="socialmediaoff">
                <img src={Instalogo} className="scmofficon"></img>
                <div className="scmvloff"></div>
                <img src={Linkedinlogo} className="scmofficon"></img>
              </div>
            </div>
            <div className="card">
              <div className="image">
                <img src={Shivang} alt="" />
              </div>
              <h2>Shivang Yadav</h2>
              <h4 className="membch">MEMBERSHIP-CHAIR</h4>
              <div className="socialmediaoff">
                <img src={Instalogo} className="scmofficon"></img>
                <div className="scmvloff"></div>
                <img src={Linkedinlogo} className="scmofficon"></img>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Officers;
