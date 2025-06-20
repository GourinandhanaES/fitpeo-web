import React, { useState } from 'react';
import './Footer.scss';

const Footer = () => {

  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__column footer__logo">
          <h2>DESIGN<br />DECLARES</h2>
        </div>

        <div className="footer__column footer__links">
          <ul>
            <li>Contact</li>
            <li>Instagram</li>
            <li>LinkedIn</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="footer__column footer__newsletter">
          <h4>Sign up to the D! Newsletter</h4>
          <form>
            <input type="email" placeholder="Email:*" required />
             <div className="form-bottom-row">
              <label className="custom-checkbox">
                <input type="checkbox" />
                <span className="checkbox-style"></span>
                <span className="checkbox-text">
                  I would like to be added to the Design Declares! newsletter and receive further updates.
                </span>
              </label>
              <button type="submit">Subscribe</button>
            </div>
            <p className="privacy-link">View our Privacy Policy</p>
          </form>
        </div>
      </div>

      <div className="footer__bottom-wrapper">
        <div className="footer__bottom">
          <p>
            This website has been built following low-carbon principles of web development and hosted using serverless
            computing, by only allocating energy when needed and on demand.{' '}
            <a href="#">Learn more about our carbon footprint.</a>
          </p>
          <p className="empowered">
            Empowered by <a href="#">Driftime®</a>
          </p>
        </div>
      </div>

      <div className="footer__recaptcha">
        <div className="recaptcha-iconn">
          <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="reCAPTCHA" className="recaptcha-icon"/>
          <div className='recaptcha-text'>Privacy · Terms</div>
        </div>
        <div className="recaptcha-hover">
          <p>Protected by reCAPTCHA</p>
          <div className='recaptcha-hovertexts'><a href="#">Privacy</a><a href="#">Terms</a></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
