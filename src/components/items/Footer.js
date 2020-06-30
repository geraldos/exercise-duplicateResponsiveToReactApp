import React from 'react'

import '../styles/Footer.css'

function Footer() {

    return(
        <div className='main-footer'>
            <footer className='footer'>
                <div className='item1'>
                    <p>Menu</p>
                    <p>Menu</p>
                    <p>Menu</p>
                    <p>Menu</p>
                </div>
            </footer>

            <section className='find-map' id='findmap'>
                <div className='maping'>
                <center>
                        <h3>Find Us</h3>
                    </center>
                    {/* <iframe className='map'
                        src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street%2C%20Dublin%2C%20Ireland+(Main%20kuy)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
                        frameborder="0" scrolling="no"><a
                            href="https://www.maps.ie/draw-radius-circle-map/">Radius map tool</a></iframe> */}
                </div> 
            </section>
        </div>

    )
}

export default Footer
