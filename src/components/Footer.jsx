// src/components/Footer.js
import React from 'react';

import peachFuzzHeart from '../images/peach-fuzz-heart.png';

function Footer() {
  return (
    <div id="footer" className="text-center">
      <div className="container">
        <div className="socials text-center">
          {/* Social Icons */}
          <a href="https://github.com/Natt5" target="_blank" rel="noopener noreferrer"><i className="bi bi-github"></i></a>
          <a href="https://www.linkedin.com/in/natalijabobrovska" target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin"></i></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="bi bi-twitter"></i></a>
        </div>
        <h6>Made with <img src= {peachFuzzHeart} alt="Peach Fuzz Heart icon" style={{height: '1em', verticalAlign: 'middle'}} /> by Natt5</h6>
        <p>&copy; 2024 Natt5</p>
      </div>
    </div>
  );
}

export default Footer;
