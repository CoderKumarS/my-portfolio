import React from 'react'
import lady from './images/lady.png'
export default function Client() {
  return (
    <div className='section reviews'>
      <div className="container">
        <h1 className='section-heading'><span>Our</span> Client</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque culpa sint provident magni amet incidunt?</p>
        <div className="slider">
          <div className="slide">
            <img src={lady} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta numquam asperiores minus aut fugiat, animi modi adipisci. Tempora et optio enim animi placeat commodi molestias officia necessitatibus, expedita harum laudantium?</p>
            <span>Lorem ipsum dolor sit amet.</span>
          </div>
        </div>
      </div>
    </div>
  )
}
