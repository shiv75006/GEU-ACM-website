import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Event from './Event'
import AboutUs from './AboutUs'
// import Contact from './Contact'
import Alumnus from './Alumnus'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
    },

    {
      path: "/event",
      element: <Event/>,
    },

    {
      path: "/aboutus",
      element: <AboutUs/>,
    },

    // {
    //   path: "/contact",
    //   element: <Contact/>,
    // },

    {
      path: "/Alumnus",
      element: <Alumnus/>,
    },
  ]);
//this app component will be rendered inside a div named as root
ReactDOM.render(<RouterProvider router={router}></RouterProvider>, document.getElementById('root'));