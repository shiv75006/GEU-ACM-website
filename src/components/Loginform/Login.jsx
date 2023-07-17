import React from 'react'
import {useState} from 'react'
import './login.css'
import Navbar from '../navbar/Navbar'
const Login = () => {

    const [data, setData]=useState({
      name:"",
      portfoliolink:"",
      email:"",
      phnum:"",
      stid:"",
    })
  
    const{name,portfoliolink,email,phnum,stid}=data;
  
  
    const handleChange = (e) =>
      setData({...data, [e.target.name]: e.target.value})
  
  
    const handleSubmit = async e => {
      e.preventDefault();
  
      try{
           const response = await fetch('https://v1.nocodeapi.com/shivyanshu/google_sheets/xNqzYcmCQVJDFwnL?tabId=Sheet1',{method: "POST",
          headers:{"Content-Type":"application/json"},body: JSON.stringify([[name,portfoliolink,email,phnum,stid, new Date().toLocaleString()]]),})
  
          await response.json();
          setData({...data, name:"",portfoliolink:"",email:"", phnum:"", stid:""});
      }
  
  
      catch(err)
      {
        console.log(err);
      }
  
    };

  return (
    <div>
      <div><Navbar></Navbar></div>
      <div className="parentdiv">
      <div className="loginformdiv">
        <form onSubmit={handleSubmit} autocomplete="off">
          <h2 className="register">Register</h2>
          <div>
            <h6 className="name">Name</h6>
            <input className="usernameinput"type="text" name="name" value={name} onChange={handleChange}></input>
          </div>

          <div>
            <h6 className="portfolio">Portfolio Link</h6>
            <input className="portfolioinput"type="text" name="portfoliolink" value={portfoliolink} onChange={handleChange}></input>
          </div>

          <div>
            <h6 className="email">Email</h6>
            <input className="Emailinput"type="email" placeholder="emample@gmail.com" name="email" value={email} onChange={handleChange}></input>
          </div>

          <div>
            <h6 className="phn">Phone number</h6>
            <input className="phinput" type="tel" pattern="[0-9]{10}" placeholder="XXXXXXXXXX" name="phnum" value={phnum} onChange={handleChange}></input>
          </div>

          <div>
            <h6 className="stid">Student ID</h6>
            <input className="stidinput"type="text" name="stid" value={stid} onChange={handleChange}></input>
          </div>
          <button className="submitbl">Submit</button>
        </form>
        <div className="instructions">
          <h6 className="inst">Instructions : </h6>
          <p>1. Fill the form carefully.<br></br>2. Make sure the portfolio link is working.</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Login