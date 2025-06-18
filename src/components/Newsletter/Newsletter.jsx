import React from 'react';
import './Newsletter.scss';
import { motion, AnimatePresence } from 'framer-motion';
import NewsletterImage from '../../assets/images/NewsletterImage.webp';

const Newsletter = () => {

  return (
    <section className="newsletter">
      <motion.div
        className="newsletter"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="newsletter__container">
        <div className="donate__left">
            <div className="donate__left sticky-heading">
              <h2>The Design Declares Newsletter and <br />Toolkit</h2>
            </div>
        </div>

        <div className="newsletter__right">
          <img
              src={NewsletterImage}
              alt="NewsletterImage"
              className="newsletter__image"
            />
            <p className="newsletter__intro">
              Subscribe to the Design Declares UK newsletter to receive the latest news and updates. By signing up you will also gain access to The Design Declares Toolkit, a live and evolving Notion site co-created with our community. It is filled with the latest resources and methods to help you on your journey to climate-positive design.
            </p>
            <p className="newsletter__support">
              Every signatory to Design Declares will receive an access link to the Toolkit. If you are unable to declare emergency quite yet, you can still access the Toolkit – just register below.
            </p>

            <form className="newsletter__form">
              <input type="email" className="newsletter__input" placeholder="Email:*" />
              
              <div className="newsletter__checkbox-group">
                <input type="checkbox" id="subscribe" className="newsletter__checkbox" />
                <label htmlFor="subscribe">
                  I would like to be added to the Design Declares! newsletter and receive further updates.
                </label>
              </div>

              <a href="/" className="newsletter__privacy">View our Privacy Policy</a>

              <button type="submit" className="newsletter__submit">Subscribe</button>
            </form>
        </div>
      </div>
      </motion.div>
    </section>
  );
};

export default Newsletter;
