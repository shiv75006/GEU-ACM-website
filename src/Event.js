import React from 'react'
import './event.css'
import Logo from './components/navbar/acmlogo.png'
import {Navbar,Footer} from './components'
import {Eventcard,UpcomingEventCard} from './evencomponents'
import { Link } from "react-router-dom";
const Event = () => {
  return (
    
    <div class="eventdiv">
    <div class="bghide"></div>
   
  <Navbar></Navbar>
  {/* <Footer></Footer> */}
  <UpcomingEventCard></UpcomingEventCard>
  <Eventcard></Eventcard>

    </div>
  )
}

export default Event