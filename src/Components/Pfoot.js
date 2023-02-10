import React from 'react'
import logo2 from './images/logo-2.svg'
import website from './images/website.svg'
import facebook from './images/facebook.svg'
import twitter from './images/twitter.svg'
import instagram from './images/instagram.svg'
import pintrest from './images/pintrest.svg'
export default function pfoot() {
  return (
    <div className='footer'>
      <img className='footer-logo' src={logo2} alt="" />
      <div className="footer-socials">
        <a href=""><img src={website} alt="" /></a>
        <a href=""><img src={facebook} alt="" /></a>
        <a href=""><img src={twitter} alt="" /></a>
        <a href=""><img src={pintrest} alt="" /></a>
        <a href=""><img src={instagram} alt="" /></a>
      </div>
      <div className='copyright'>
        <p>Copyright 2019 © Name PSD Templeates. All Right Reserved.</p>
      </div>
    </div>
  )
}
