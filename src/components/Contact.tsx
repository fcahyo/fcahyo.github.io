import React from "react";
import "../assets/styles/Contact.scss";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

function Contact() {
  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Get in Touch</h1>
          <p>
            Feel free to reach out for collaboration, freelance work, or just a friendly chat!
          </p>
          <div className="contact-icons">
            <a
              href="https://github.com/fcahyo"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <GitHubIcon sx={{ fontSize: 60 }} />
            </a>
            <a
              href="https://www.linkedin.com/in/fabiansyahcahyo"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedInIcon sx={{ fontSize: 60 }} />
            </a>
            <a
              href="mailto:fabiansyahcahyo@gmail.com"
              aria-label="Email"
            >
              <MailOutlineIcon sx={{ fontSize: 60 }} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
