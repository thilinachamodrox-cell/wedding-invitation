"use client";

import { motion } from "framer-motion";

export default function WeddingDetails() {
  return (
    <motion.section
      id="wedding-details"
      className="min-h-screen bg-white px-6 py-28 text-center"
      initial={{opacity:0,y:80}}
      whileInView={{opacity:1,y:0}}
      transition={{duration:1.5}}
      viewport={{once:false,amount:0.3}}
    >

      <p className="text-xs tracking-[0.5em] uppercase text-yellow-700">
        Wedding Details
      </p>


      <h2 className="mt-6 text-5xl text-yellow-800">
        Our Special Day
      </h2>


      <div className="mx-auto my-10 h-px w-40 bg-yellow-600"/>


      <div className="mx-auto max-w-xl rounded-[2rem] border border-yellow-200 bg-gradient-to-b from-white to-amber-50 p-12 shadow-2xl">


        <div className="space-y-12">


          <div>
            <p className="text-xs uppercase tracking-widest text-gray-400">
              Date
            </p>

            <p className="mt-3 text-3xl text-yellow-800">
              Friday
            </p>

            <p className="text-xl text-gray-600">
              7 August 2026
            </p>
          </div>


          <div>
            <p className="text-xs uppercase tracking-widest text-gray-400">
              Ceremony
            </p>

            <p className="mt-3 text-3xl text-yellow-800">
              10:00 AM
            </p>

            <p className="text-gray-500">
              Temporary – to be updated
            </p>
          </div>


          <div>
            <p className="text-xs uppercase tracking-widest text-gray-400">
              Venue
            </p>

            <p className="mt-3 text-3xl text-yellow-800">
              View
            </p>

            <p className="text-xl text-gray-600">
              Water&apos;s Edge
            </p>

            <p className="text-gray-500">
              Battaramulla, Sri Lanka
            </p>
          </div>


        </div>

      </div>


    </motion.section>
  );
}