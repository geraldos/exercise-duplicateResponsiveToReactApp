import React from 'react'

import '../styles/Header.css'

function Header() {
    return(
        <div className='header'>
            <section className='nav'>
                <h1>Movie Dulu</h1>

                <div className='item'>
                    {/* <ul> */}
                    <a href="/">Menu</a>
                    <a href="/">Menu</a>
                    <a href="/">Menu</a>
                    <a href="/">Menu</a>
                    {/* </ul> */}
                </div>
            </section>

            <section className='slogan'>
                <h2>Movie Dulu</h2>
                <p>Movie Dulu dengan nonton movie original!!</p>
                <p>Hanya disini yang original, Check it out!!</p>
            </section>
        </div>
    )
}
export default Header
