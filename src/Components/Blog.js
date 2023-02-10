import React from 'react'
import article1 from './images/article-ph-1.png'
export default function Blog() {
  return (
    <div className='section blog'>
      <div className="container">
        <h1 className='section-heading'><span>Our</span> Blog</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error incidunt voluptas, iusto nobis est fuga?</p>
        <div className="card-wrapper">
            <div className="card">
                <div className="img-wrapper">
                    <img src={article1} alt="" />
                </div>
                <div className="card-content">
                    <a href="#"><h1>Lorem, ipsum dolor.</h1></a>
                    <span>May 122, 2017</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus beatae, repellendus, quaerat tempore perferendis aperiam maiores facere, fugit voluptas quibusdam voluptatum ullam nihil vero impedit obcaecati dolorem veniam animi incidunt?</p>
                    <a href="#">Read More</a>
                </div>
            </div>
            <div className="card">
                <div className="img-wrapper">
                    <img src={article1} alt="" />
                </div>
                <div className="card-content">
                    <a href="#"><h1>Lorem, ipsum dolor.</h1></a>
                    <span>May 122, 2017</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus beatae, repellendus, quaerat tempore perferendis aperiam maiores facere, fugit voluptas quibusdam voluptatum ullam nihil vero impedit obcaecati dolorem veniam animi incidunt?</p>
                    <a href="#">Read More</a>
                </div>
            </div>
            <div className="card">
                <div className="img-wrapper">
                    <img src={article1} alt="" />
                </div>
                <div className="card-content">
                    <a href="#"><h1>Lorem, ipsum dolor.</h1></a>
                    <span>May 122, 2017</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus beatae, repellendus, quaerat tempore perferendis aperiam maiores facere, fugit voluptas quibusdam voluptatum ullam nihil vero impedit obcaecati dolorem veniam animi incidunt?</p>
                    <a href="#">Read More</a>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
