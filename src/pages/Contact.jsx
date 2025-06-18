import React from 'react';
import '../styles/main.scss';
import { motion } from 'framer-motion';
import Menu from '../components/Menu/Menu';
import Footer from '../components/Footer/Footer';
import ScrollToTop from '../components/ScrollToTop/ScrollToTop';

const Contact = () => {
  return (
    <section>
      <ScrollToTop />
      <motion.div
        className="contact"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="contact__container">
          <div className="contact__left">
            <div className="sticky-heading">
              <h2>Contact</h2>
            </div>
          </div>

          <div className="contact__right">
            <div className="form-wrapper">
              <h2>Send Us A Message</h2>
              <form>
                <input type="text" placeholder="Name:*" required />
                <input type="email" placeholder="Email:*" required />
                <select required>
                  <option value="">Team to contact:*</option>
                  <option value="team1">Team 1</option>
                  <option value="team2">Team 2</option>
                </select>
                <select required>
                  <option value="">Enquiry type:*</option>
                  <option value="general">General</option>
                  <option value="feedback">Feedback</option>
                </select>
                <textarea placeholder="Please write your message here." rows="5"></textarea>

                <label className="checkbox-label">
                  <input type="checkbox" />
                  <span className="custom-check"></span>
                  I would like to be added to the Design Declares! newsletter and receive further updates.
                </label>

                <a href="/" className="privacy-link">View our Privacy Policy</a>

                <button type="submit" className="submit-button">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </motion.div>
      <Menu />
      <Footer />
    </section>
  );
};

export default Contact;
