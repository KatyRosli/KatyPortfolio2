import React from 'react';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

export function NavBar() {
    return (
        <nav className='navbar-container'>
            <NavLink to='/'>Katy</NavLink>
            <HashLink to='/#portfolio'
            scroll={(el:any) => el.scrollIntoView({ behavior: 'auto', block: 'end' })}>Portfolio</HashLink>
            <NavLink to='/resume'>Resume</NavLink>
            <HashLink to='/resume#contact'
            scroll={(el:any) => el.scrollIntoView({ behavior: 'auto', block: 'end' })}>Contact</HashLink>
        </nav>
    );
}