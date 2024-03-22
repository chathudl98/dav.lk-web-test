"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";


const items = [
  { id: '1', subtitle: 'Service 1', title: 'First Service', description: 'Description for First Service' },
  { id: '2', subtitle: 'Service 2', title: 'Second Service', description: 'Description for Second Service' },
  { id: '3', subtitle: 'Service 3', title: 'Third Service', description: 'Description for Third Service' },
];

const Locations = () => {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <section id="locations" className='text-white p-4'>
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold">Our Locations</h1>
        <p className="text-xl mt-4">Explore the Locations we offer</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map(item => (
          <motion.div key={item.id} layoutId={item.id} onClick={() => setSelectedId(item.id)}
            className="card bg-gray-800 rounded-lg p-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h5 className="text-lg">{item.subtitle}</motion.h5>
            <motion.h2 className="text-xl font-bold">{item.title}</motion.h2>
            <motion.p>{item.description}</motion.p>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedId && (
          <motion.div layoutId={selectedId}
            className="fixed top-1/4 left-1/4 w-1/2 h-1/2 bg-white text-black rounded-lg p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Find the item based on the selectedId */}
            {items.filter(item => item.id === selectedId).map((item) => (
              <React.Fragment key={item.id}>
                <motion.h5 className="text-lg">{item.subtitle}</motion.h5>
                <motion.h2 className="text-xl font-bold">{item.title}</motion.h2>
                <motion.p>{item.description}</motion.p>
                <motion.button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setSelectedId(null)}>Close</motion.button>
              </React.Fragment>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Locations;
