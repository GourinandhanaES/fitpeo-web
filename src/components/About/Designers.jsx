import React from 'react';
import './Designers.scss';
import { motion, AnimatePresence } from 'framer-motion';

const Designers = () => {

  return (
    <section className="designers">
      <motion.div
        className="designers"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="designers__container">
        <div className="designers__left">
            <div className="designers__left sticky-heading">
              <h2>The Designers Behind Design <br /> Declares UK</h2>
            </div>
        </div>

        <div className="designers__right">
          <p className="designers__description1">Inspired by the global emergency declaration movement demanding accountability and action across industries, Design Declares is the initiative of a multidisciplinary group of design professionals and agencies who all believe in the power of design to change things.</p>

          <div className='designers__images'>
            <img width={170} height={100} src="https://designdeclares.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fzqatagq1%2Fproduction%2Feef6913e335c69e4b094a1eb32b5d1203c4840ae-290x56.svg%3Fmax-w%3D1440&w=750&q=75" alt="designer_image1" />
            <img width={160} height={100} src="https://designdeclares.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fzqatagq1%2Fproduction%2Ffe235f0c24f5465498ea9ba83e7eff983961a427-166x32.svg%3Fmax-w%3D1440&w=750&q=75" alt="designer_image2" />
          </div>
          <div className='designers__images'>
            <img width={170} height={100} src="https://designdeclares.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fzqatagq1%2Fproduction%2Fa03a37e4a4bcd8745ee6d7930573174bf13d23ac-196x24.svg%3Fmax-w%3D1440&w=750&q=75" alt="designer_image3" />
            <img width={170} height={100} src="https://designdeclares.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fzqatagq1%2Fproduction%2F73ad4f9a263d71dc223c588ecd5a2fce66561626-271x40.svg%3Fmax-w%3D1440&w=750&q=75" alt="designer_image4" />
          </div>
          <div className='designers__images'>
            <img width={170} height={100} src="https://designdeclares.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fzqatagq1%2Fproduction%2Fada25b334eb920fc0aebf096e6c61b87282868b2-241x64.svg%3Fmax-w%3D1440&w=750&q=75" alt="designer_image5" />
            <img width={150} height={100} src="https://designdeclares.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fzqatagq1%2Fproduction%2F69be8518748504b11342c7937965574bd6d7493e-132x72.svg%3Fmax-w%3D1440&w=750&q=75" alt="designer_image6" />
          </div>
        </div>
      </div>
      </motion.div>
    </section>
  );
};

export default Designers;
