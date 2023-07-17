import React from 'react'
import { useState } from 'react'
import './review.css'
import Navbar from '../navbar/Navbar'
const Review = () => {
  const [data, setData]=useState({
    name:"",
    email:"",
    review:"",
  })

  const{name,email,review}=data;


  const handleChange = (e) =>
    setData({...data, [e.target.name]: e.target.value})


  const handleSubmit = async e => {
    e.preventDefault();

    try{
         const response = await fetch('https://v1.nocodeapi.com/shivyanshu/google_sheets/NeXJKIVriqGTbdkJ?tabId=Sheet1',{method: "POST",
        headers:{"Content-Type":"application/json"},body: JSON.stringify([[name, email, review, new Date().toLocaleString()]]),})

        await response.json();
        setData({...data, name:"",email:"",review:""});
    }


    catch(err)
    {
      console.log(err);
    }

  };

  return (
    <div>
        <div><Navbar></Navbar></div>
        <div className="parentdiv2">
          <div className="reviewform">
            <h1 className="reviewformhead">Review</h1>
            <form onSubmit={handleSubmit} autocomplete="off">
              <div>
                <h6 htmlFor="name" className="reviewname">Name</h6>
                <input className="nameinputr"type="text" name="name"  value={name} onChange={handleChange}></input>
              </div>

              <div>
                <h6 htmlFor="email" className="reviewmail">Email</h6>
                <input className="emailinputr" type="email" 
               name="email" value={email} onChange={handleChange}></input>
              </div>
              <div>
                <h6 htmlFor="review" className="review">Review</h6>
                <textarea className="reviewinputr" name="review" type="text" value={review} onChange={handleChange}></textarea>
              </div>
              <div>
                <button className="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
    </div>
  )
}

export default Review