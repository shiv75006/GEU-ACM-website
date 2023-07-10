import React from 'react'
import './instructor.css'
import instimg from './sarishmamaam.png'
import hodimg from './hodsir.png'
const Instructor = () => {
  return (
    <div>
      <div class="maindiv">
        <div class="instructordiv">
            <div class="ourinst"><h1>Our Instructor</h1>
            <div class="instimgdiv">
              <img class="instimg"src={instimg}></img>
            </div>
            <h3 class="instname">Ms. Sarishma Dangi</h3>
            <h4 class="instdesg">Assistant Professor</h4>
            <h4 class="instdesg">Dept. of CSE</h4>
            </div>
        </div>

        <div class="vl2"></div>

        <div class="advisordiv">
            <div class="ourinst"><h1>Our Advisor</h1>
            <div class="instimgdiv">
              <img class="hodimg" src={hodimg}></img>
            </div>
            <h3 class="instname">Dr. Devesh Pratap Singh</h3>
            <h4 class="instdesg">Head of Department</h4>
            <h4 class="instdesg">Dept. of CSE</h4>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Instructor