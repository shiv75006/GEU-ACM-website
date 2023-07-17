import React from "react";
import "./eventcard.css";
import Cbsimg from "./eventimages/instapostcbs.png";
import ILLimg from "./eventimages/adwpost.jpg";
const Eventcard = () => {
  return (
    <div>
      <div className="cardcontainer">
        <div className="eventcard">
          <img src={Cbsimg} className="eventcardimg"></img>
          <h1 className="cardheading">
            Cybersecurity <br></br>Seminar
          </h1>
          <p className="cardparagraph">
            The seminar featured an expert speaker Ms. Pooja Joshi who is a
            multiple award winning professionals with rich experience of 23
            years in the areas of Academia, Channel Management and Training.She
            highlighted that a cyber attack takes place worldwide in every 39
            seconds resulting in the high demand for cybersecurity professionals
            in industries such as finance, healthcare, government, and
            technology. The importance of acquiring a strong foundation in
            computer science, networking, and programming was emphasized as a
            starting point for a successful career in cybersecurity. The speaker
            stressed the significance of obtaining relevant certifications such
            as Network Defence Essentials (NDE), Ethical Hacking Essentials
            (EHE) and Certified Ethical Hacker (CEH) to enhance one's knowledge
            and credibility in the field.
          </p>
        </div>
      </div>

      <div className="cardcontainer">
        <div className="eventcard">
          <img src={ILLimg} className="eventcardimg"></img>
          <h1 className="cardheading">
            Illustrator <br></br>Workshop
          </h1>
          <p className="cardparagraph">
            A hands-on workshop titled "Adobe Illustrator: Beginners to
            Advanced" was organized by GEU ACM, GEU-ACMW student chapters. The
            workshop was taken by Harsh Vardhan Singh Rawat and organized by
            Anushka Rawat, Taha Ali, Shivang Yadav and Shivyanshu Saini under
            the guidance of Assistant Professor Sarishma Dangi, Dept. of CSE.
            The workshop was organized on 1st April, 2023 at New Lab 1 and New
            Lab 2 at CSIT block, Graphic Era University. The workshop witnessed
            the participation of nearly 80 students who learned the basics of
            adobe illustrator and promised to further develop their skills by
            working on advanced skills and projects. Adobe Illustrator workshop
            is a great way for individuals and organizations to enhance their
            design skills and create professional-grade graphics for various
            purposes.
          </p>
        </div>
      </div>

      
    </div>
  );
};

export default Eventcard;

// A hands-on workshop titled "Adobe Illustrator: Beginners to
// Advanced" was organized by GEU ACM, GEU-ACMW student chapters. The
// workshop was taken by Harsh Vardhan Singh Rawat and organized by
// Anushka Rawat, Taha Ali, Shivang Yadav and Shivyanshu Saini under
// the guidance of Assistant Professor Sarishma Dangi, Dept. of CSE.
// The workshop was organized on 1st April, 2023 at New Lab 1 and New
// Lab 2 at CSIT block, Graphic Era University. The workshop
// witnessed the participation of nearly 80 students who learned the
// basics of adobe illustrator and promised to further develop their
// skills by working on advanced skills and projects. Adobe
// Illustrator workshop is a great way for individuals and
// organizations to enhance their design skills and create
// professional-grade graphics for various purposes.

// The seminar featured an expert speaker Ms. Pooja Joshi who is a
//               multiple award winning professionals with rich experience of 23
//               years in the areas of Academia, Channel Management and
//               Training.She highlighted that a cyber attack takes place worldwide
//               in every 39 seconds resulting in the high demand for cybersecurity
//               professionals in industries such as finance, healthcare,
//               government, and technology. The importance of acquiring a strong
//               foundation in computer science, networking, and programming was
//               emphasized as a starting point for a successful career in
//               cybersecurity. The speaker stressed the significance of obtaining
//               relevant certifications such as Network Defence Essentials (NDE),
//               Ethical Hacking Essentials (EHE) and Certified Ethical Hacker
//               (CEH) to enhance one's knowledge and credibility in the field.
