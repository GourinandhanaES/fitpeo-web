import React from 'react';
import '../styles/main.scss';
import { motion } from 'framer-motion';
import Menu from '../components/Menu/Menu';
import Footer from '../components/Footer/Footer';
import ScrollToTop from '../components/ScrollToTop/ScrollToTop';
import LogoImg from '../assets/images/Logo.png';
import CustomCheckbox from '../components/checkbox/CustomCheckbox';

const Contact = () => {
  return (
    <section>
      <ScrollToTop />
      <div style={{ position: 'relative' }}>
      <motion.div
        className="contact"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <img src={LogoImg} alt="Logo" className="dlogo" />
        <div className="contact__container">
          <div className="contact__left">
            <div className="sticky-heading">
              <h2>Contact</h2>
            </div>
          </div>

          <div className="contact__right">
            <div className="form-wrapper">
              <h2>Send Us A Message</h2>
            <form >
              <div className="form-field">
                <input type="text" id="name" name="name" placeholder="Name: *" required/>
              </div>

              <div className="form-field">
                <input type="email" id="email" name="email" placeholder="Email: *" required />
              </div>

              <div className="form-field">
                <select  id="team"  name="team" className="custom-dropdown" required >
                  <option value="" disabled selected hidden>Team to connect: *</option>
                  <option value="D! UK">D! UK</option>
                  <option value="D! Ireland">D! Ireland</option>
                  <option value="D! Brazil">D! Brazil</option>
                  <option value="AustD! Australiaralia">D! Australia</option>
                </select>
              </div>

              <div className="form-field">
                <select id="discipline" name="discipline" className="custom-dropdown" required >
                  <option value="" disabled selected hidden>Enquiry: *</option>
                  <option value="Design">Contibute to toolkit</option>
                  <option value="Design">Volunteer to time</option>
                  <option value="Technology">Set up a new chapter</option>
                  <option value="Marketing">Discuss something else</option>
                </select>
              </div>

              <div className="form-field">
                <textarea
                  id="reason"
                  name="reason"
                  placeholder="Please write your message here."
                  rows={6}
                />
              </div>

              <div className="consent-section">
                <label className="checkbox-container small-text">
                  <div style={{ marginRight: '10px' , marginTop:'5px', marginLeft:'-35px' }}> <CustomCheckbox /></div>
                  I would like to be added to the Design Declares newsletter and receive further updates.
                </label>
              </div>

              <div className="privacy-link">
                <a href="#" className="privacy-policy-link">View our Privacy Policy</a>
              </div>

              <button type="submit" className="submit-button">
                Send Message  
              </button>
            </form>
            </div>
          </div>
        </div>
      </motion.div>
      <Menu />
      <div style={{ height: '50px', backgroundColor:'black', borderBottomRightRadius:"35px", borderBottomLeftRadius:"35px" }}></div>
      </div>
      <Footer />
    </section>
  );
};

export default Contact;
