import React from 'react'
import './styles.css'

const year=new Date().getFullYear()
function Footer(){
    return (
        <footer>
            <p>copyright {year}</p>
        </footer>
    )
}

export default Footer;