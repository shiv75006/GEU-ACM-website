import React from "react";
import "./upcomingevent.css";
import FDPimg from "./Fpdimg.jpeg";
const UpcomingEventCard = () => {
  return (
    <div>
     <div className="upcarddiv">
      <div className="upeventcard">
        <img src={FDPimg} className="upcardimg"></img>
        <h1 className="eventcardtext">Upcoming Event</h1>
        <h1 className="eventcardtext1">Faculty Development <br></br>Program on<br></br>  Quantum Computing</h1>
        <p className="eventcardtext2">
          contact : 7010585059<br></br>
          Regestration Fee : 300Rs <br></br>
          Registrartion Link : <a>vdsucygucvjsvcuyfcvdgjvcuy</a>
        </p>
      </div>
     </div>
    </div>
  );
};

export default UpcomingEventCard;
