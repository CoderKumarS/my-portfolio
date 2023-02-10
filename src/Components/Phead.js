import React from 'react'
import man2 from './images/man-2.png'
import website from './images/website.svg'
import instagram from './images/instagram.svg'
import facebook from './images/facebook.svg'
import twitter from './images/twitter.svg'
export default function Phead() {
  return (
    <div className="about section">
      <div className='container flex items-center about-inner-wrap'>

        <div className='flex-1'>
          <img className='about-me-img' src={man2} alt="" />
        </div>
        <div  className='flex-1 right'>
          <h1>About <span>Me</span></h1>
          <h3>Hello! I'm CoderKumarS</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam odit sit voluptatibus. Dignissimos, aspernatur earum deserunt provident quidem possimus expedita sit veritatis dolor nisi, repellat, consequuntur quaerat? Eligendi, ut sint ipsa accusamus fuga at tempora reiciendis, voluptatum commodi eveniet autem delectus! Distinctio quaerat dolores quasi ipsam, sunt autem veritatis officia!</p>
          <div className='social'>
            <a href="..."><img src={website} alt="" /></a>
            <a href="..."><img src={facebook} alt="" /></a>
            <a href="..."><img src={twitter} alt="" /></a>
            <a href="..."><img src={instagram} alt="" /></a>
          </div>
        </div>
      </div>
    </div>
  )
}
