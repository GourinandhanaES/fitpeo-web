import React from 'react';
import './AboutDesign.scss';
import { motion, AnimatePresence } from 'framer-motion';
import LogoImg from '../../assets/images/Logo.png';

const AboutDesign = () => {

  return (
    <section className="aboutdesign">
      <motion.div
        className="aboutdesign"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <img src={LogoImg} alt="Logo" className="dlogo" />
        <div className="aboutdesign__container">
        <div className="aboutdesign__left">
            <div className="aboutdesign__left sticky-heading">
              <h2>About Design Declares</h2>
            </div>
        </div>

        <div className="aboutdesign__right">
          <p className="aboutdesign__description1">
            Climate breakdown has begun. And business as usual is not an option.
          </p>
          <p className="aboutdesign__description2">That’s why we started Design Declares.</p>
          <p className="aboutdesign__description3">Inspired by a global declaration movement sounding the alarm in industries everywhere, we’re an industry-recognised initiative representing the fears, hopes and commitment to action of a growing group of designers, design studios, agencies and institutions.</p>

          <div className='aboutdesign__buttons'>
            <a href="https://www.youtube.com/watch?v=XpnOe94eXdM&feature=youtu.be" target='_blank'><button className="intro-button">See Global Declarations</button></a>
          </div>
          <div className='aboutdesign__description4'>
            <p>Together, we sit at the very beginning of the creative process. The tools we use and the choices we make can influence society’s behaviour, change economies and challenge everything that’s come before.</p>
            <p>Because design, whether it’s a product, a piece of packaging or an exhibition space, has impact. It’s up to us whether that impact is harmful or healing. <br /> <br />
            We’re glad you’re here. Let’s get to work.</p>
          </div>
          <div className='aboutdesign__buttons'>
            <a href="https://www.youtube.com/watch?v=XpnOe94eXdM&feature=youtu.be" target='_blank'><button className="intro-button">Declare Emergency Now</button></a>
          </div>

          <div className='aboutdesign__description4'>
            <p><span className="point-line">Design Declares is free. </span><br /><span className="point-line">‘Design’ to us means industrial, digital, graphic, communication and service design. </span> <br /><span className="point-line">Design Declares offers support to all its signatories through shared best practice, resources and insights, all found in the Toolkit.  </span> <br /><span className="point-line">Our signatories use the clarity of the 8 Acts of Emergency as a way to start meaningful conversations and actions in collaboration with colleagues, collaborators and clients. </span></p>
            <p><span className="point-line">We welcome declarations from companies with an office and/or employing at least one full-time designer, and from practising freelance designers who are registered as self-employed in the UK. All signatories will be named and published on this site. </span> <br /><span className="point-line">As a collective voice, we will liaise with other industry organisations and networks, constructively engaging with government, clients and design media. </span></p>
          </div>
        </div>
      </div>
      </motion.div>
    </section>
  );
};

export default AboutDesign;
