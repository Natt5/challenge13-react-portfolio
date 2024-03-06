

import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

    // Confirmation message
    const [showConfirmation, setShowConfirmation] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);



   // Reset form fields
   setFormData({ name: '', email: '', message: '' });

       // Show confirmation message here

       setShowConfirmation(true);

       // Confirmation message hides after a few seconds
       setTimeout(() => setShowConfirmation(false), 5000);
     };

  return (
    <div className="container" id="contact">
      <h2 className="text-center">Contact Me</h2>
      <div className="row">
        <div className="col-md-6">
          <address className="text-center">
            <strong>NATALIE BO</strong><br />
            1 King's Rd,<br />
            London, SW3 4RY<br /><br />
            <a href="tel:+447112233445">+44 7112233445</a><br />
            <a href="mailto:natalie.bochallenge@gmail.com">natalie.bochallenge@gmail.com</a>
          </address>
        </div>
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>

            <div className="mb-3">
              <label htmlFor="name" className="form-label">Your Name</label>
              <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" name="message" rows="3" value={formData.message} onChange={handleChange}></textarea>
            </div>

            <button type="submit" className="btn btn-primary form-button">Send</button>
          </form>

          {showConfirmation && <div className="alert alert-success mt-3">Your message has been sent successfully!</div>}
        
        </div>
      </div>
    </div>
  );
  }

export default Contact;
