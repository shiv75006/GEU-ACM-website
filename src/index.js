import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Event from './Event'
import AboutUs from './AboutUs'
import Login from './components/Loginform/Login'

import Review from './components/Reviewform/Review'
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

    {
      path: "/Login",
      element: <Login/>,
    },

   

    {
      path: "/Review",
      element: <Review/>,
    },
  ]);
//this app component will be rendered inside a div named as root
ReactDOM.render(<RouterProvider router={router}></RouterProvider>, document.getElementById('root'));