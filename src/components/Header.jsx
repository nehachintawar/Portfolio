import React from 'react'
import { Link } from 'react-scroll';

function Header() {
    return (
        <div className='header'>
            <Link to='home' smooth={true} duration={500}>
                <span>Home</span>
            </Link>

            <Link to='about' smooth={true} duration={500}>
                <span>About</span>
            </Link>

            <Link to='portfolio' smooth={true} duration={500}>
                <span>Portfolio</span>
            </Link>

            <Link to='footer' smooth={true} duration={500}>
                <span>Contact</span>
            </Link>
        </div>
    )
}

export default Header;