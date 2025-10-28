import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://i.postimg.cc/ZRJp0NTt/linkedin-profile.jpg" alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/fcahyo" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/fabiansyahcahyo/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Fabiansyah Cahyo</h1>
          <p>Data Scientist/AI Engineer</p>
          <div className="mobile_social_icons">
            <a href="https://github.com/fcahyo" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/fabiansyahcahyo/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;