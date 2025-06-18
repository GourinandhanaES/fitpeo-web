import React from 'react';
import './Group.scss';
import { motion, AnimatePresence } from 'framer-motion';

const groupdata = [
  {
    image: "https://designdeclares.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fzqatagq1%2Fproduction%2F735f5280c655e648d271314df15d7bd130219f48-1024x1536.jpg%3Frect%3D303%2C233%2C487%2C649%26w%3D600%26h%3D800%26max-w%3D1440&w=750&q=75",
    name:"Abb-d Taiyo",
    designers: "Driftime®",
  },
  {
    image: "https://designdeclares.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fzqatagq1%2Fproduction%2F5c2fba0be083af622957e8b41729c278a9f3a597-1024x1427.jpg%3Frect%3D0%2C0%2C1024%2C1365%26w%3D600%26h%3D800%26max-w%3D1440&w=750&q=75",
    name:"Alexie Sommer",
    designers: "URGE Collective",
  },
  {
    image: "https://designdeclares.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fzqatagq1%2Fproduction%2F36397c01986187debcc53073347368138cd46a86-1024x683.jpg%3Frect%3D380%2C246%2C328%2C437%26w%3D600%26h%3D800%26max-w%3D1440&w=750&q=75",
    name:"Aurelie Lionet",
    designers: "Design for Life",
  },
  {
    image: "https://designdeclares.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fzqatagq1%2Fproduction%2Fe67cf8253e3f5fa3d6fe575bd89abbda3d6c0d96-1024x926.jpg%3Frect%3D232%2C129%2C598%2C797%26w%3D600%26h%3D800%26max-w%3D1440&w=750&q=75",
    name:"Jo Barnard",
    designers: "Morrama",
  },
]

const Group = () => {

  return (
    <section className="group">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="group__container">
        <div className="group__left">
            <div className="group__left sticky-heading">
              <h2>Steering Group</h2>
            </div>
        </div>

        <div className="group__right">
        
        </div>
      </div>
      </motion.div>
    </section>
  );
};

export default Group;
