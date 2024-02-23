import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'
import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import {faBell} from '@fortawesome/free-regular-svg-icons'

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const toggleMenu = () => {
      setIsOpen(!isOpen);
  };

  useEffect(() => {
      const handleScroll = () => {
          if (window.scrollY > 100) {
              setScrolling(true);
          } else {
              setScrolling(false);
          }
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);

  const navbarClasses = `navbar px-4 py-3 navbar-expand-lg navbar-dark fixed-top Suggeste3D ${scrolling ? 'scrolled' : ''}`;

  return (

    <>
      <nav className={navbarClasses}>
        <div class="container-fluid">
          <a class="navbar-brand" href="#home"><img src='../../../assets/logo.png' alt='logo' className='logo' /></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse mx-4 navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#home">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#shows">TV Shows</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#movies">Movies</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#New&Popular">New&Popular</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#list">My List</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#lang">Browse by language</a>
              </li>
            </ul>
            <div class="nav-right" role="search">
              <FontAwesomeIcon icon={faSearch} className='search' />
              <FontAwesomeIcon icon={faBell} className='bell'/>
              <img src='../../../assets/images.jpg' alt='profile' className='profile_pic' />
            </div>
          </div>
        </div>
      </nav>


    </>
  )
}

export default Navbar;