import React from 'react';
import './Emergency.scss';
import { motion, AnimatePresence } from 'framer-motion';

const emergencyData = [
  {
    number: 1,
    title: "Sound the Alarm",
    description:
      "Acknowledge and raise awareness of the climate and ecological crisis - including its roots in systems of oppression - in our organisations and our practice.",
  },
  {
    number: 2,
    title: "Start the Journey",
    description:
      "Invest in educating ourselves and our teams on methods of sustainable and regenerative design, and show leadership by making measurable change to our practice. The Design Declares Toolkit is a great place to start.",
  },
  {
    number: 3,
    title: "Bring Clients with Us",
    description:
      "Meaningfully consider environmental and social impacts as part of every pitch, proposal and production process. Not every design output will be carbon neutral or fully climate friendly, but every project is an opportunity to make real progress.",
  },
  {
    number: 4,
    title: "Measure What We Make",
    description:
      "Measure the environmental and social impact of our businesses and design projects, and hold ourselves to account for what we find out.",
  },
  {
    number: 5,
    title: "Redefine 'Good'",
    description:
      "Encourage, recognise and reward sustainable and regenerative design excellence in our industry through media and awards.",
  },
  {
    number: 6,
    title: "Educate, Accelerate",
    description:
      "Build and foster intra- and cross-discipline knowledge networks to share tools, resources and best practice to accelerate progress in our industry.",
  },
  {
    number: 7,
    title: "Design for Justice",
    description:
      "Create with and for the people who are disproportionately affected both by climate change and by the transition to a lower-carbon world.",
  },
  {
    number: 8,
    title: "Amplify Voices for Change",
    description:
      "Enable systemic change by working alongside policymakers, campaigners, ecologists, scientists, activists and others to strengthen local and national movements for change.",
  },
];

const Emergency = () => {

  return (
    <section className="emergency">
      <motion.div
        className="emergency"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="emergency__container">
        <div className="emergency__left">
            <div className="emergency__left sticky-heading">
              <h2>8 Acts of Emergency</h2>
            </div>
        </div>

        <div className="emergency__right">
          <p className="emergency__description">
            What does it take to Declare? It’s accepting we are in an emergency of climate and nature, and a commitment to do something about it. Here are eight places to start:
          </p>

          <div className='emergency__table'>
            {emergencyData.map((item) => (
              <div className="emergency__row" key={item.number}>
                <div className="emergency__heading">
                  <span className="number">{item.number}</span>
                  <span className="title">{item.title}</span>
                </div>
                <div className="emergency__description">{item.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </motion.div>
    </section>
  );
};

export default Emergency;
