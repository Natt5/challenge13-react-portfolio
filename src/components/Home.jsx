// // src/components/Home.js
// import React from 'react';

// function Home() {
//   return (
//     <div className="home">
//       <h1>Natt5</h1>
//       <img src="./images/portrait.png" alt="Your Headshot" />
//       <p>Natt5 front end web developer.</p>
//     </div>
//   );
// }

// export default Home;

// src/components/Home.js
import React from 'react';
import portraitImage from '../images/portrait.png'; // Ensure this path is correct

function Home() {
  return (
    <div className="home jumbotron text-center" id="top">
      <img src={portraitImage} alt="Natalie Bo" className="img-fluid rounded-circle mb-3" style={{ maxWidth: '200px' }} />
      <h1 className="display-4">Natalie Bo</h1>
      <p className="lead">Front-End Web Developer.</p>
      <blockquote className="blockquote text-center">
        <p>"The Web does not just connect machines, it connects people."</p>
        <figcaption className="blockquote-footer">
          Tim Berners-Lee, <cite title="Source Title">The World Wide Web Foundation</cite>, 2008
        </figcaption>
      </blockquote>
      <hr className="my-4" />
    </div>
  );
}

export default Home;

