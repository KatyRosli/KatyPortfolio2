import React from 'react';
import { NavLink } from 'react-router-dom';

export function NavBar() {
    return (
        <nav className='navbar-container'>
            <NavLink to='/'>Katy</NavLink>
            <NavLink to='/portfolio'>Portfolio</NavLink>
            <NavLink to='/resume'>Resume</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
        </nav>
    );
}