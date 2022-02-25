import React, { useState, useEffect } from 'react';
import { StaticImage } from "gatsby-plugin-image";

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const textAreaHeight: number = 5;

  useEffect(() => {
    setName(name);
    setTitle(title);
    setEmail(email);
    setMessage(message);
  }, [name, title, email, message]);

  return (
    <section id="contact">
      <h2>Contact Me</h2>

      <div className="container">
        <div className="left">
          <p id="contact-text">I would love to hear about the problems that you are trying to solve.</p>

          <StaticImage src={"../../images/pensive-oil-painting.png"} alt="Always deep in thought" />
        </div>

        <div className="right">
          <div className="contact-form-section">
            <label htmlFor="fullName">Name</label>
            <input id="fullName" type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </div>

          <div className="contact-form-section">
            <label htmlFor="email">Email</label>
            <input id="email" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div className="contact-form-section">
            <label htmlFor="title">Title</label>
            <input id="title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>

          <div className="form-section">
            <label htmlFor="message">Message</label>
            <textarea id="message" rows={textAreaHeight} placeholder="How can I help?" value={message} onChange={(e) => setMessage(e.target.value)} ></textarea>
          </div>

          <button className="secondary-button">Submit</button>
        </div>
      </div>
    </section>
  )
};

export default Contact;
