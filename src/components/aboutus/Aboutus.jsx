import React from "react";
import Logo from "./acmlogo.png";

import "./aboutus.css";
const Aboutus = () => {
  return (
    <div>
      <div className="About">
        <div className="aboutusdiv">
          
          <div className="paragraphdiv">
          <img src={Logo} className="acmlogoaboutus"></img>
            <p className="paragraph1">
              ACM brings together computing educators, researchers, and
              professionals to inspire dialogue, share resources, and address
              the field's challenges. As the world’s largest computing society,
              ACM strengthens the profession's collective voice through strong
              leadership, promotion of the highest standards, and recognition of
              technical excellence. ACM supports the professional growth of its
              members by providing opportunities for life‐long learning, career
              development, and professional networking.
            </p>
          </div>
          <div className="vl"></div>
          <div className="aimdiv">
            <p className="aim">
              We aim to enhance the knowledge of our members by organizing
              technical talks, workshops, field trips ,programming contest and
              other exciting events, GEU ACM Student Chapters aims to facilitate
              communication and collaboration within our university’s computer
              science community and with the computing community at large.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
