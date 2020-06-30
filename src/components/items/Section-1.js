import React from 'react'

import '../styles/Section-1.css'

import image1 from '../../assets/images/1. After.jpg'

function Section1() {
    return(
        <div className='maincolor1'>
            
            <div className='title2'>
                <h1>New Movie</h1>
            </div>

                <div className='list'>
                    <div>
                        <img src={image1} className='img1' alt='after'></img>     
                    </div>

                    <div>
                        <img src={image1} className='img1' alt='after'></img>
                    </div>
                    
                    <div>
                        <img src={image1} className='img1' alt='after'></img> 
                    </div>

                    <div>
                        <img src={image1} className='img1' alt='after'></img>
                    </div>
                </div>
                
        </div>
    )
}

export default Section1