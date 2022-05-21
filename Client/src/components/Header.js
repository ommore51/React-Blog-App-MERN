import React from 'react';
import '../components/Home/styles/header.css'
import { FaTh } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { useState } from "react";
import Mobilenavigation from './Mobilenavigation';
import Navigation from './Navigation';
import { Link } from 'react-router-dom';

const Header = () => {

  const [open, setopen] = useState(false);

  const hamburgerIcon = <FaTh className='hamburger' onClick={() => {
    setopen(!open)
  }} />
  const closeIcon = <ImCross className='hamburger' onClick={() => {
    setopen(!open)
  }} />

  return <div>
    <div className='header_1'>

      <Link to="/"><div className='header'><span>The</span><h1> Siren </h1>  </div></Link>

      <div className='icon' >
        {open ? closeIcon : hamburgerIcon}
      </div>

    </div>
    <Navigation />
    {open && <div onClick={() => {
      setopen(!open)
    }}><Mobilenavigation /></div>}



  </div>;
};
export default Header;







