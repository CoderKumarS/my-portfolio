import React from 'react'
import phone from './images/phone-2.svg'
import msg from './images/msg.svg'
import map from './images/map.svg'
export default function Contact() {
    return (
        <div className='section contact'>
            <div className="container">
                <h1 className="section-heading">Contact <span>Us</span></h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quas expedita assumenda quam commodi minus?</p>
                <div className="card-wrapper">
                    <div className="card">
                        <img src={phone} alt="" />
                        <h2>Call Us On</h2>
                        <h6>+91 9466494318</h6>
                    </div>
                    <div className="card">
                        <img src={msg} alt="" />
                        <h2>Email Us At</h2>
                        <h6>xyz124@gmail.com</h6>
                    </div>
                    <div className="card">
                        <img src={map} alt="" />
                        <h2>Visit Office</h2>
                        <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h6>
                    </div>
                </div>
                <form action="">
                <div className="input-wrap">
                    <input type="text" placeholder='Your Name' />
                    <input type="email" placeholder='Your Email' />
                </div>
                <div className="input-wrap-2">
                    <input type="text" placeholder='Your Subject...' />
                    <textarea name="" id="" cols="30" rows="10" placeholder='Your Message...'></textarea>
                </div>
                <div className='btn-wrapper'>
                    <button className='btn btn-primary'>Send Message</button>
                </div>
                </form>
            </div>
        </div>
    )
}
