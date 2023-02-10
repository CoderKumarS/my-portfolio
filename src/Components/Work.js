import React from 'react'
import ph1 from './images/ph-1.png'
export default function Work() {
    return (
        <div className="section work">
            <div className="container">
                <h1 className='section-heading'><span>Our</span> Works</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci nobis illo numquam eius totam reprehenderit laborum similique voluptatum iusto nam?</p>
                <div className="card-wrapper">
                    <div className="card">
                        <div className="overlay">
                            <span>Category</span>
                            <a href="#">Web development</a>
                        </div>
                        <img src={ph1} alt="" />
                    </div>
                    <div className="card">
                        <div className="overlay">
                            <span>Category</span>
                            <a href="#">Web development</a>
                        </div>
                        <img src={ph1} alt="" />
                    </div>
                    <div className="card">
                        <div className="overlay">
                            <span>Category</span>
                            <a href="#">Web development</a>
                        </div>
                        <img src={ph1} alt="" />
                    </div>
                    <div className="card">
                        <div className="overlay">
                            <span>Category</span>
                            <a href="#">Web development</a>
                        </div>
                        <img src={ph1} alt="" />
                    </div>
                    <div className="card">
                        <div className="overlay">
                            <span>Category</span>
                            <a href="#">Web development</a>
                        </div>
                        <img src={ph1} alt="" />
                    </div>
                    <div className="card">
                        <div className="overlay">
                            <span>Category</span>
                            <a href="#">Web development</a>
                        </div>
                        <img src={ph1} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
