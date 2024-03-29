import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAnalyticsEventTracker from '../useAnalyticsEventTracker';

export function NavBar() {
  const gaEventTracker = useAnalyticsEventTracker('NavBar');
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
      window.addEventListener("scroll", changeBackground);
    }, []);

    const customScroll = (el: HTMLElement) => {
      const offset = el.getBoundingClientRect().top -56;
      window.scrollTo({
        top: window.scrollY + offset,
        behavior: 'smooth',
      });
      window.location.hash = el.getAttribute('id') || '';
    };
    
    return (
        <nav className={navbar ? 'navbar__active' : 'navbar'} data-testid="navbar">
            <ul className='navbar__container'>
            <li>
              <NavLink 
                className='navbar__logo' to='/' 
                data-testid="home"
                onClick={() => gaEventTracker('buttonClick', 'Visit Katy Home Page')}>Katy</NavLink></li>
            <ol className='navbar__items'>
            <li>
              <HashLink 
                className='navbar__items__link'
                to='/#portfolio'
                scroll={(el: HTMLElement) =>
                  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
                onClick={() => gaEventTracker('buttonClick', 'Visit Katy Portfolio Page')}
              >Portfolio</HashLink></li>
            <li>
              <NavLink 
                className='navbar__items__link' 
                to='/resume' 
                onClick={() => gaEventTracker('buttonClick', 'Visit Katy Resume Page')}>Resume</NavLink></li>
            <li>
              <HashLink 
                className='navbar__items__link' 
                to='/resume#contact'
                scroll={customScroll}
                onClick={() => gaEventTracker('buttonClick', 'Visit Katy Contact Page')}
                >Contact</HashLink></li>
            <li>
              <a 
                className='navbar__items__link' 
                href='https://www.codewithkatyrosli.com/blog' 
                target='_blank' 
                rel='noopener noreferrer'
                onClick={() => gaEventTracker('buttonClick', 'Visit Katy Blog')}>Blog</a></li>
            </ol>
            </ul>
        </nav>
    );
}