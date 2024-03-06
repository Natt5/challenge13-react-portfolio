
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Web Developer Portfolio</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About Me</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ProjectGallery">Project Gallery</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/skills">Skills</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Contact">Contact Me</Link>
            </li>
        
            <li className="nav-item">
            
            <a href="/NBResume.pdf" target="_blank" rel="noopener noreferrer" className="nav-link">Resume</a>
          </li>
          </ul>
        </div>
      </div>
    </nav>
    </header>
  );
}

export default Header;
