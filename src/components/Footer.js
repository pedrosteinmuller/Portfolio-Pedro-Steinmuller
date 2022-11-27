import React, { Component } from 'react';
import '../styles/footer.css';
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdOutgoingMail } from 'react-icons/md';

export default class Footer extends Component {
  render() {
    return (
      <footer id="footer">
        <nav className="nav-container">
        <a href="https://github.com/pedrosteinmuller"
          target="_blank" 
          rel="noopener noreferrer">
          <BsGithub size={40} />
        </a>
        <a href="mailto:pedrosteinmuller100@gmail.com">
          <MdOutgoingMail size={50}/>
        </a>
        <a
          href="https://www.linkedin.com/in/pedrosteinmuller/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsLinkedin size={40}/>
        </a>
      </nav>
      </footer>
    );
  }
}