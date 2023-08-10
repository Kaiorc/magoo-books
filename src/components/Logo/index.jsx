import React from "react";
import './index.css'
// import logo from 'C:/src/magoo-books/src/images/logo.svg'
import logo from '../../images/logo.svg'

export default function Logo() {
    return (
        <div className='logo'>
            <img 
                src={logo} 
                alt='logo' 
                className="logo-img"
                />
            <p><strong>Magoo</strong>Books</p>
        </div>
    )
}