import React from 'react'

import '../styles/Section-1.css'

import image1 from '../../assets/images/1. After.jpg'
import image2 from '../../assets/images/2. TDM.jpg'
import image3 from '../../assets/images/3. Archer.jpg'
import image4 from '../../assets/images/4. Joker.jpg'

function Section1() {
    return(
        <div className='maincolor1'>
            <section>
                <div className='title2'>
                    <h1>New Movie</h1>
                </div>
            </section>

            <section className='list'>
                <div className="listphoto">
                    <img src={image1} className='img1' alt='after'></img>
                    <h3 className="title">After</h3>
                </div>

                <div className="listphoto">
                    <img src={image2} className='img1' alt='after'></img>
                    <h3 className="title">The Darkest Minds</h3>
                </div>

                <div className="listphoto">
                    <img src={image3} className='img1' alt='after'></img>
                    <h3 className="title">Archer</h3>
                </div>

                <div className="listphoto">
                    <img src={image4} className='img1' alt='after'></img>
                    <h3 className="title">Joker</h3>
                </div>
            </section>
        </div>
    )
}

export default Section1