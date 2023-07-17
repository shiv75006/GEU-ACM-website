import React from "react";
import "./event.css";
import Logo from "./components/navbar/acmlogo.png";
import { Navbar, Footer } from "./components";
import { Eventcard, UpcomingEventCard } from "./evencomponents";
import { Link } from "react-router-dom";
const Event = () => {
  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <div>
        <UpcomingEventCard></UpcomingEventCard>
      </div>
      <div>
        <Eventcard></Eventcard>
      </div>
    </div>
  );
};

export default Event;