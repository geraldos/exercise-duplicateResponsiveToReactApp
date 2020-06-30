import React from 'react'

import '../styles/Section-2.css'

import image5 from '../../assets/images/5. MT.jpg'
import image6 from '../../assets/images/6. MZ.jpg'
import image7 from '../../assets/images/7. US.jpg'
import image8 from '../../assets/images/8. Replicas.jpg'

function Section2() {
    return(
        <div className='maincolor2'>
            <section>
                <div className='title3'>
                    <h1>Best Movie</h1>
                </div>
            </section>

            <section className='list1'>
                <div>
                    <img src={image5} className='img1' alt='after'></img>
                    
                </div>

                <div>
                    <img src={image6} className='img1' alt='after'></img>
                
                </div>

                <div>
                    <img src={image7} className='img1' alt='after'></img>
                    
                </div>

                <div>
                    <img src={image8} className='img1' alt='after'></img>
                </div>
            </section>
        </div>
    )
}

export default Section2