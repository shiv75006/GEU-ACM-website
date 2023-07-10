import React from 'react';
import{ Hero, Navbar,Aboutus,Recentevents,Instructor,Officers,Footer} from './components';

const App = () => {
  return (
    
    <div>
       <div className="appnavbar" ><Navbar></Navbar></div> 
       <div><Hero></Hero></div> 
       <div><Aboutus></Aboutus></div> 
       <div><Recentevents></Recentevents></div> 
       <div> <Instructor></Instructor></div>
        <div><Officers></Officers></div>
        <div><Footer></Footer></div>
      
    </div>
  )
}

export default App