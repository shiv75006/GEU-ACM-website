import React from 'react'
import './upcomingevent.css';
import FDPimg from './Fpdimg.jpeg'
const UpcomingEventCard = () => {
  return (
    <div>
        <div class="upeventcarddiv">
        <div class="Upeventcard">
        <div class="imgflex">
        <img src={FDPimg} alt="" class="upeventcardimg"></img>   
        </div>
        <div class="uplinediv">
        <div class="upcardvl"></div> 
        </div>          
            <h1 class="upcomeventhead">Upcoming Event</h1>
            <h1 class="eventname">Quantum Computing <br></br>Faculty Development<br></br>Program</h1>
            <p class="infopara">
                Contact : 7017585059<br></br>
                Email : geuacm@gmail.com <br></br>
                Reg. link : <a href="https://forms.gle/DR3X5FdYAbmbjwABA">https://forms.gle/DR3X5FdYAbmbjwABA</a>
            </p>
        </div>
        </div>
    </div>
  )
}

export default UpcomingEventCard