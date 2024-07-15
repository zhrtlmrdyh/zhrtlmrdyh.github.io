import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import '../assets/styles/Main.scss';
import zahra from '../assets/images/me-zahra.jpg';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={zahra}  alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/zhrtlmrdyh" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/zahratulmardiyah/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="https://www.instagram.com/zahratulmrdyh_/" target="_blank" rel="noreferrer"><InstagramIcon/></a>
          </div>
          <h1>Zahratul Mardiyah</h1>
          <p>Software Engineer | Software Quality Assurance | UI/UX Designer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/zhrtlmrdyh" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/zahratulmardiyah/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;