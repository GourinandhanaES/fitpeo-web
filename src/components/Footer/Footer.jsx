import React from 'react';
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
            <label className="checkbox">
              <input type="checkbox" />
              <span>I would like to be added to the Design Declares! newsletter and receive further updates.</span>
            </label>
            <p className="privacy-link">View our Privacy Policy</p>
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

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

      <div className="footer__recaptcha">
        <div className="recaptcha-icon">🔒</div>
        <div className="recaptcha-hover">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
