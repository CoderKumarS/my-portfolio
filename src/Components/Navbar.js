import React, { useState, useEffect } from 'react'
import logo from './images/logo.svg'
import {NavLink} from 'react-router-dom'
// import man from './images/man.png'
// import hamberger from './images/hamberger.svg'
// import times from './images/times.svg'
export default function Navbar() {
  // $(document).ready(function () {
  //   $('.slider').slick({
  //     arrows: false,
  //     dots: true,
  //     appendDots: '.slider-dots',
  //     dotsClass: 'dots'
  //   });


  //   let hambergerO = document.querySelector('.hamberger');
  //   let timesO = document.querySelector('.times');
  //   let mobileNavO = document.querySelector('.mobile-nav');

  //   hambergerO.addEventListener('click', function () {
  //     mobileNavO.classList.add('open');
  //   });

  //   timesO.addEventListener('click', function () {
  //     mobileNavO.classList.remove('open');
  //   });

  // });
  // function onClickMenu {
  //   document.getElementById("menu").classList.toggle("icon");
  //   document.getElementById("nav").classList.toggle("change");
  // };

  //for hamberger to desktop menu
  const [showMediaIcons, setshowMediaIcons] = useState(false);

  // for sticky nav-bar
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 200);
      console.log(window.scrollY);
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  });
  return (
    <>
      <div className="site-main-wrapper">
        <div className='hamberger' onClick={() => setshowMediaIcons(!showMediaIcons)}>
          {/* <img src={hamberger} alt="" /> */}
          <div id="menu" className={showMediaIcons ? "icon" : " "}>
            <div id="bar1" class="bar"></div>
            <div id="bar2" class="bar"></div>
            <div id="bar3" class="bar"></div>
          </div>
        </div>
        <div className={showMediaIcons ? "mobile-nav open" : "mobile-nav"}>
          {/* <button className='times' onClick={()=> setshowMediaIcons(showMediaIcons)}>
          <img src={times} alt="" />
        </button> */}

          <ul id='nav' className={showMediaIcons ? "nav change" : "nav"}>
            <li><a href="..." className='element' >Home</a></li>
            <li><a href="..." className='element' >About</a></li>
            <li><a href="..." className='element' >Services</a></li>
            <li><a href="..." className='element' >Work</a></li>
            <li><a href="..." className='element' >Blog</a></li>
          </ul>
        </div>
        <div className="Header">
          <div className={sticky ? 'container sticky' : 'container'}>
            <nav id='main-nav' className='flex  items-center justify-between'>
              <div className="left flex items-center itemss-between">
                <div className="branding">
                  <img id="logo" src={logo} alt="logo" />
                </div>
                <div>
                  <NavLink to="/">Home</NavLink>
                  <NavLink to={"/about"}>About</NavLink>
                  <NavLink to={"/service"}>Services</NavLink>
                  <NavLink to={"work"}>Work</NavLink>
                  <NavLink to={"blog"}>Blog</NavLink>
                </div>
              </div>
              <div className="right ">
                <NavLink className='btn btn-primary' to={"/contact"}>Contact</NavLink>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}
