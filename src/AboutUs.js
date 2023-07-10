import React from 'react'
import './aboutuspage.css'
import {Navbar,Footer} from './components'
import logo from './acmlogoblack.png';
import geulogo from './geulogo.png'
import acmlogobl from './acmlogoblack.png'
import geulogocont from './geulogo.png'
const AboutUs = () => {
  return (
    <div>
        <div class="aboutuspgbghide"></div>
        <Navbar></Navbar>
        <div>
          <h1 class="Acmhead">Association for Computing Machinery(ACM)</h1>
          <div class="aboutACM">
            <p class="aboutACMparagraph">
            ACM has established more than 680 student chapters throughout the world that give students opportunities to play active roles in the association and its activities. By organizing technical talks, workshops, field trips and programming contests, ACM Student Chapters facilitate communication and collaboration within a university’s computer science community and with the computing community at large. Through its sponsorship of student chapters, ACM also enhances learning via the exchange of ideas among students, and between students and established professionals.
            <br></br>
            Student chapter members can also take advantage of ACM activities and services. Opportunities include the Distinguished Speakers Program, the International Collegiate Programming Contest, and the Student Research Competition. Student chapters provide a natural setting to develop and demonstrate the leadership capabilities critical to students’ career development. They also help students get involved in the business world with workshops, resume assistance, and career building initiatives.
            </p>
            
          </div>
          <div class="GEUACMdiv">
            <p class="aboutgeuacm">
            ACM brings together computing educators, researchers, and professionals to inspire dialogue, share resources, and address the field's challenges. As the world’s largest computing society, ACM strengthens the profession's collective voice through strong leadership, promotion of the highest standards, and recognition of technical excellence. ACM supports the professional growth of its members by providing opportunities for life‐long learning, career development, and professional networking.
            <br></br>
            We aim to enhance the knowledge of our members by organizing technical talks, workshops, field trips ,programming contest and other exciting events, GEU ACM Student Chapters aims to facilitate communication and collaboration within our university’s computer science community and with the computing community at large.
            </p>
          </div>
          <div class="geuacmlogodiv">
            <img class="geuacmlogo"src={logo}></img>
          </div>
        </div>
        <div class="graphiceradiv">
          <h1>Graphic Era University</h1>
          <p class="graphicerapara">Graphic Era (Deemed to be University) was in existence as Graphic Era Institute of Technology since 1997,
        with the goal of providing world class-education with a clear focus on cutting-edge technologies, professional development of students, critical thinking and quality research. The University has achieved numerous milestones in its glorious past on the basis of its academic rigor, consistently Top Performing Students and Alumni and an immensely strong and qualified teaching fraternity.
<br></br>
          The University has featured in the Top 100 Universities of India, in the coveted National Institutional Ranking Framework established by the Government of India, for the past three years consecutively, with the rankings growing each year across varied domains.
</p>
        </div>
        <div class="geulogodiv">
          <img class="geulogo"src={geulogo}></img>
        </div>


        <div>
        <div class="contdiv">
            <img src={acmlogobl}class="Acmlogocont"></img>
        </div>
        <div class="infodiv">
            <div>
              <ul>
                <li>You can connect with us on whatsapp on 7017585059 from 9am to 5pm</li>
                <li>You can contact us through email at geuacm@gmail.com</li>
                <li>For more, visit our instagram @geuacm</li>
              </ul>
            </div>
        </div>
        <div class="hzline"></div>
        <img src={geulogocont}class="geulogocont"></img>
        <div class="infodiv2">
            <ul>
                <li>You can connect with us on our Toll Free Number 1800 890 6027 from 9am to 5pm</li>
                <li>You can connect with us through email at enquiry@geu.ac.in</li>
                <li>For more, Visit our instagram @geuofficial</li>
              </ul>
        </div>
    </div>
        <footer class="aboutuspagefooter">
        {/* <Footer></Footer> */}
        </footer>
    </div>
  )
}

export default AboutUs