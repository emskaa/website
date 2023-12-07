import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact">
        <div className="socials">
            <h1>Here are my socials ♡</h1>
            <a href="https://www.instagram.com/emiiliebtdich/" target="_blank"><InstagramIcon /></a>
            <a href="https://twitter.com/emskaa2" target="_blank"><TwitterIcon /></a> 
            <a href="https://www.facebook.com/emily.nowak.716"target="_blank"><FacebookIcon /></a>
        </div>
    </div>
  )
}

export default Contact