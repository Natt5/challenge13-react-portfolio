import React from 'react';
import { Link } from 'react-router-dom';

function AboutMe() {
  return (
    <div className="container" id="about">
      <div className="row">
        <div className="col-12 text-center">
          <h2>About Me</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <p>As a passionate Web Developer, specializing in creating dynamic and user-friendly websites. I have crafted numerous websites and applications that have significantly improved user experience and business functionality. My expertise lies in HTML, CSS, JavaScript, and various modern frameworks. I pride myself on staying up-to-date with the latest technological trends to provide cutting-edge solutions to clients.</p>
        </div>
        <div className="col-md-6 text-center">
          <div className="inner-content">
            <ul className="facts-custom-list">
              <li><i className="bi bi-chevron-compact-right"></i> <strong>Birthday:</strong> December, Riga</li>
              <li><i className="bi bi-chevron-compact-right"></i> <strong>Based:</strong> London, UK</li>
              <li><i className="bi bi-chevron-compact-right"></i> <strong>Degree:</strong> Master of Science</li>
              <li><i className="bi bi-chevron-compact-right"></i> <strong>Passion:</strong> Aesthetic WebDev and Cats!</li>
            </ul>
            <Link to="/contact" className="btn btn-primary">Contact Me to Discuss Your Project!</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;