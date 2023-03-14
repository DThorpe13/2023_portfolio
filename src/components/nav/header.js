import React from 'react'
import { Outlet } from 'react-router-dom';
import './header.css'

const header = () => {
    return (
        <div className='nav-bar'>
            <a href='/'>Home</a>
            <a href='/about'>About Me</a>
            <a href='/skills'>Skills</a>
            <a href='/projects'>Projects</a>
            <a href='contact'>Contact</a>
            <Outlet/>
        </div>
    )
}

export default header
