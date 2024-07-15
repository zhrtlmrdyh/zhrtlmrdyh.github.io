import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/zhrtlmrdyh" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/zahratulmardiyah/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
        <a href="https://www.instagram.com/zahratulmrdyh_/" target="_blank" rel="noreferrer"><InstagramIcon/></a>
      </div>
      <p>portfolio web <a href="https://github.com/zhrtlmrdyh/" target="_blank" rel="noreferrer">Zahratul Mardiyah</a> </p>
    </footer>
  );
}

export default Footer;