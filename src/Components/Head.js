import React from 'react';
import man from './images/man.png';
export default function Head() {
    return (
        <>
            <div className="site-main-wrapper">
                <div className="Header" id='Head'>
                    <div className='hero flex items-center justify-between'>
                        <div className="left flex-1 flex justify-center">
                            <img src={man} alt="" />
                        </div>
                        <div className="right flex-1">
                            <h6>CoderKumarS</h6>
                            <h1>I'm a Creative <span>Programmer</span></h1>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore iure consequatur possimus sed delectus? Voluptatibus illo fugiat, repellendus vitae amet ex. Libero reprehenderit earum enim minus. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi vitae odio assumenda neque unde reiciendis numquam facere, odit aliquid corporis, quod eius voluptatem est aliquam accusantium. </p>
                            <div>
                                <button className='btn btn-secondary'>Download Resumea</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
