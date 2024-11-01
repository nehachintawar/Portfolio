import React from 'react'
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";
import { CiTwitter } from "react-icons/ci";
function Footer() {
  return (
    <div className='footer-container'>
      <div className="social-media">
        <MdEmail    className='icon'/>
        <FaGithub   className='icon'/>
        <FaLinkedin className='icon'/>
        <FaMedium   className='icon'/>
        <CiTwitter  className='icon'/>
      </div>
      <p>@copyright, All rights reserved</p>
    </div>
  )
}

export default Footer