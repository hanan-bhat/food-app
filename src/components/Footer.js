import React from "react";
import '../styles/footer.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    return(
        <div className="footer-container">
           <div>
                <div className="footer-socia-lg">
                    <FacebookIcon className="social-icon-lg"/>
                    <TwitterIcon className="social-icon-lg"/>
                    <InstagramIcon className="social-icon-lg"/>
                    <LinkedInIcon className="social-icon-lg"/>
                </div>
                <p className="copyrights">&copy; {new Date().getFullYear()} Food Lover Pvt Ltd</p>
           </div>
        </div>
    )
}

export default Footer;