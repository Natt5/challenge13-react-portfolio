import React from 'react';

function Skills() {
  return (
    <div className="container" id="skills">
      <h2 className="text-center my-4">Skills</h2>
      {/* HTML Skill */}
      <div className="mb-2">HTML</div>
      <div className="progress mb-3">
        <div className="progress-bar" role="progressbar" style={{width: "75%", backgroundColor: "rgb(255, 190, 152)", color: "rgba(0, 0, 0, 0.6)"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div>
      </div>
      {/* CSS Skill */}
      <div className="mb-2">CSS</div>
      <div className="progress mb-3">
        <div className="progress-bar" role="progressbar" style={{width: "70%", backgroundColor: "rgb(255, 190, 152)", color: "rgba(0, 0, 0, 0.6)"}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">70%</div>
      </div>
      {/* JavaScript Skill */}
      <div className="mb-2">JavaScript</div>
      <div className="progress mb-3">
        <div className="progress-bar" role="progressbar" style={{width: "55%", backgroundColor: "rgb(255, 190, 152)", color: "rgba(0, 0, 0, 0.6)"}} aria-valuenow="55" aria-valuemin="0" aria-valuemax="100">55%</div>
      </div>
      {/* API Skill */}
      <div className="mb-2">API</div>
      <div className="progress mb-3">
        <div className="progress-bar" role="progressbar" style={{width: "50%", backgroundColor: "rgb(255, 190, 152)", color: "rgba(0, 0, 0, 0.6)"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div>
      </div>
      {/* ES6 and Node.js Skill */}
      <div className="mb-2">ES6 and Node.js</div>
      <div className="progress mb-3">
        <div className="progress-bar" role="progressbar" style={{width: "50%", backgroundColor: "rgb(255, 190, 152)", color: "rgba(0, 0, 0, 0.6)"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div>
      </div>
      {/* React Skill */}
      <div className="mb-2">React</div>
      <div className="progress mb-3">
        <div className="progress-bar" role="progressbar" style={{width: "50%", backgroundColor: "rgb(255, 190, 152)", color: "rgba(0, 0, 0, 0.6)"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div>
      </div>
      {/* Agile Project Management Skill */}
      <div className="mb-2">Agile Project Management</div>
      <div className="progress mb-3">
        <div className="progress-bar" role="progressbar" style={{width: "60%", backgroundColor: "rgb(255, 190, 152)", color: "rgba(0, 0, 0, 0.6)"}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">60%</div>
      </div>
      {/* More skills here */}
    </div>
  );
}

export default Skills;
