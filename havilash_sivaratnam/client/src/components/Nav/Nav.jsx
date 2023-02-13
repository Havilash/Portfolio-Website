import React, { useEffect, useRef, useState } from 'react'
import { FaBars, FaFacebookSquare, FaGithubSquare, FaLinkedin, } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

import './Nav.css'


export default function Nav() {
  const location = useLocation();
  const [isNavOpen, setIsNavOpen] = useState(false);
  
  function renderNavItems(items){
    let output = []
    Object.keys(items).forEach((name, i) => {
      let url = items[name]
      output.push(
        <li key={`nav-item-${i}`} className={'nav__item ' + ((location.pathname === url) ? "active" : "")}>
          <Link to={url} className="nav__link">
            {name}
          </Link>
        </li>
      )
    })

    return output
  }


  return (
    <header className={`${(!isNavOpen ? "-left-full" : "")}`}>
      <nav className='nav'>

        {/* nav bars, logo */}
        <i className={`fixed left-8 sm:relative sm:left-0 z-[51] transition-all ${isNavOpen ? "left-[80vw]" : "left-8"}`}>
          <FaBars
            onClick={() => setIsNavOpen(!isNavOpen)}
            className='nav__bars nav__link'
          />
        </i>

        {/* nav list */}
        <ul className='nav__list'>
          {renderNavItems({
            "Home": "/",
            "Education": "/education",
            "Skills": "/skills",
            "Projects": "/projects",
            "Portfolio": "/portfolio",
          })}
        </ul>

        <ul className='nav__social sm:hidden'>
          <li className='nav__social__item'>
            <a target="_blank" className='nav__link' href='https://github.com/Havilash'>
              <FaGithubSquare className='nav__social__icon'/>
            </a>
          </li>
          <li className='nav__social__item'>
            <a target="_blank" className='nav__link'>
              <FaLinkedin className='nav__social__icon'/>
            </a>
          </li>
          <li className='nav__social__item'>
            <a target="_blank" className='nav__link'>
              <FaFacebookSquare className='nav__social__icon'/>
            </a>
          </li>
        </ul>

      </nav>
    </header>
  )
}
