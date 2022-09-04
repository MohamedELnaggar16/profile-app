import React, { Component } from 'react'
import styles from './Nav.module.css'
export default class Nav extends Component {
  render() {
    return (
        <>
 <nav className={`${styles.myNav} navbar navbar-expand-lg bg-dark w-100`}>
  <div className="container">
    <a className= "navbar-brand text-white fs-1" href="#">START REACT</a>
    <button className="navbar-toggler bg-success text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span> menu </span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fs-5">
        <li className="nav-item">
          <a className="nav-link text-white" href="#portfolio">PORTIFOLIO</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#about">ABOUT</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#contact">CONTACT</a>
        </li>
      </ul>    
    </div>
  </div>
</nav>
        </>
      
    )
  }
}
