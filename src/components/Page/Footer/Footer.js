import React from 'react';
import { Link } from 'react-router-dom';
import facebook from '../../../img/social_icon/facebook.png'
import google from '../../../img/social_icon/google.png'
import SocialLogin from '../SocialLogin/SocialLogin';
import './Footer.css'
const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer>
      <div className="footer-top-container mt-5">
        <div>
          <h5>QUICK MENU</h5>
          <p>New arrivals</p>
          <p>Life style</p>
          <p>Accents</p>
          <p>Tables</p>
          <p>Dining</p>
        </div>
        <div>
          <SocialLogin></SocialLogin>
        </div>
        <div>
          <h5>INFORMATION</h5>
          <p>FAQs</p>
          <p>Track Order</p>
          <p>Delivery</p>
          <p>Contact Us</p>
          <p>Return</p>
        </div>
      </div>
      <div className="footer-bottom-container mt-5">
        <p className="text-center">
          Copyright © {year} Raaz . All rights reserved
        </p>
        ;
      </div>
    </footer>
  );
 
};

export default Footer;