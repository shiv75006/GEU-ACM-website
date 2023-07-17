import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Events',
    path: '/Event',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'AboutUs',
    path: '/AboutUs',
    icon: <FaIcons.FaPhone />,
    cName: 'nav-text'
  },
  // {
  //   title: 'Alumni',
  //   path: '/Alumnus',
  //   icon: <IoIcons.IoMdPeople />,
  //   cName: 'nav-text'
  // },
  {
    title: 'Review',
    path: '/Review',
    icon: <IoIcons.IoMdPeople/>,
    cName: 'nav-text'
  },
  
];