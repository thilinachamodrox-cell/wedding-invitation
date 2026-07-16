"use client";

import { motion } from "framer-motion";


export default function Venue(){

  return (

    <motion.section
      className="min-h-screen bg-white px-6 py-28 text-center"
      initial={{opacity:0,y:80}}
      whileInView={{opacity:1,y:0}}
      transition={{duration:1.5}}
      viewport={{
        once:false,
        amount:0.3
      }}
    >


      <p className="text-xs uppercase tracking-[0.5em] text-yellow-700">
        Venue
      </p>


      <h2 className="mt-6 text-5xl text-yellow-800">
        Where To Find Us
      </h2>


      <div className="mx-auto my-10 h-px w-40 bg-yellow-600"/>



      <div className="mx-auto max-w-lg rounded-[2rem] border border-yellow-200 bg-gradient-to-b from-white to-amber-50 p-12 shadow-2xl">


        <div className="text-5xl">
          📍
        </div>


        <h3 className="mt-8 text-4xl text-yellow-800">
          View
        </h3>


        <p className="mt-4 text-2xl text-gray-700">
          Water&apos;s Edge
        </p>


        <p className="mt-2 text-gray-500">
          Battaramulla, Sri Lanka
        </p>


        <a
          href="https://maps.app.goo.gl/gKLU9ttCCRMEf8nt6"
          target="_blank"
          className="mt-10 inline-block rounded-full bg-yellow-700 px-10 py-4 text-white shadow-lg transition hover:scale-105 hover:bg-yellow-800"
        >
          Open Location 📍
        </a>


      </div>


    </motion.section>

  );
}