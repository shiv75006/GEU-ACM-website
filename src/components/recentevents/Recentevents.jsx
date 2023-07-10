import React from 'react'
import Card1post from './instapostcbs.png'
import Card2post from './adwpost.jpg'
import './recentevents.css'
const Recentevents = () => {
  return (
    <div>
        <div class="recenteventdiv">
            <h1 class="recenthead">Recent Events</h1>
        </div>
        <div class="cards_event">
                    <div class="eventcard">
                        <h1 class="cardhead">Cybersecurity Seminar</h1>
                        <p class="eventparagraph">we recently organised a seminar on How to build a carrer in Cyberssecurity in association with EC-Council, India to enlighten the students on the avavilability of jobs in the field of cybersecurity.<br></br>
                        <h6 class="speakername">Speaker : Pooja Joshi</h6></p>
                        <img src={Card1post} class="card1post" alt=""></img>
                    </div>
              
                    <div class="eventcard2">
                    <h1 class="cardhead">Illustrator Workshop</h1>
                    <p class="eventparagraph">
                      We recently organised a workshop on adobe illustrator to teach the students about how they can create digital assets.The workshop had two levels Advance and Begineer<br></br><h6 class="speakername">Speaker : Harshvardhan Singh Rawat</h6>
                      </p>
                    <img src={Card2post} class="card1post" alt=""></img>
                    </div>
{/* 
                    <div class="vllinediv">
            <div class="eventvl"></div>
            </div> */}
                  
        </div>
    </div>
  )
}

export default Recentevents