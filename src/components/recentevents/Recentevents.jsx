import React from "react";
import Card1post from "./instapostcbs.png";
import Card2post from "./adwpost.jpg";
import "./recentevents.css";
const Recentevents = () => {
  return (
    <div>
      <div>
        <div className="recenteventdiv">
          <h1 className="recenthead">Recent Events</h1>
        </div>
        <div className="cards_event">
          <div className="receventcard">
            <h1 className="reccardhead">Cybersecurity<br></br> Seminar</h1>
            <p className="receventparagraph">
              we recently organised a seminar on How to build a carrer in
              Cyberssecurity in association with EC-Council, India to enlighten
              the students on the avavilability of jobs in the field of
              cybersecurity.<br></br>
              <h6 className="speakername">Speaker : Pooja Joshi</h6>
            </p>
            <img src={Card1post} className="card2post" alt=""></img>
          </div>

          <div className="receventcard2">
            <h1 className="reccardhead">Illustrator<br></br> Workshop</h1>
            <p className="receventparagraph">
              We recently organised a workshop on adobe illustrator to teach the
              students about how they can create digital assets.The workshop had
              two levels Advance and Begineer<br></br>
              <h6 className="speakername">Speaker : Harshvardhan Singh Rawat</h6>
            </p>
            <img src={Card2post} className="card1post" alt=""></img>
          </div>
  
        </div>
      </div>
    </div>
  );
};

export default Recentevents;
