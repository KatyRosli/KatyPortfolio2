import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

export function NavBar() {
    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
      if (window.scrollY >= 56) {
        setNavbar(true)
      } else {
        setNavbar(false)
      }
    }
  
    useEffect(() => {
      changeBackground()
      window.addEventListener("scroll", changeBackground)
    })
    return (
        <nav className={navbar ? 'navbar__active' : 'navbar'}>
            <ul className='navbar__container'>
            <li><NavLink className='navbar__logo' to='/'>Katy</NavLink></li>
            <ol className='navbar__items'>
            <li><HashLink className='navbar__items__link' to='/#portfolio'
            scroll={(el: HTMLElement) => el.scrollIntoView({ behavior: 'auto', block: 'end' })}>Portfolio</HashLink></li>
            <li><NavLink className='navbar__items__link' to='/resume'>Resume</NavLink></li>
            <li><HashLink className='navbar__items__link' to='/resume#contact'
            scroll={(el: HTMLElement) => el.scrollIntoView({ behavior: 'auto', block: 'end' })}>Contact</HashLink></li>
            <li><a className='navbar__items__link' href='https://www.codewithkatyrosli.com/blog' target='_blank' rel='noopener noreferrer'>Blog</a></li>
            </ol>
            </ul>
        </nav>
    );
}