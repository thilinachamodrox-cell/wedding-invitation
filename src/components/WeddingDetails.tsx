"use client";

import { motion } from "framer-motion";


export default function WeddingDetails() {

  return (

    <motion.section

      id="wedding-details"

      className="min-h-screen bg-[#06152A] px-6 py-28 text-center"

      initial={{
        opacity:0,
        y:80,
      }}

      whileInView={{
        opacity:1,
        y:0,
      }}

      transition={{
        duration:1.2,
      }}

      viewport={{
        once:false,
        amount:0.3,
      }}

    >


      <p className="text-xs uppercase tracking-[0.5em] text-[#E7C873]">
        Wedding Details
      </p>



      <h2 className="mt-6 text-5xl text-white">
        Our Special Day
      </h2>



      <div className="mx-auto my-10 h-px w-40 bg-[#C9A227]" />



      <div className="mx-auto max-w-xl rounded-[2rem] border border-[#C9A227]/40 bg-[#0B1F3A]/70 p-12 shadow-2xl backdrop-blur-xl">


        <div className="space-y-12">


          <div>

            <p className="text-xs uppercase tracking-widest text-[#D9D9D9]">
              Date
            </p>


            <p className="mt-3 text-3xl text-[#E7C873]">
              Friday
            </p>


            <p className="text-xl text-white">
              7 August 2026
            </p>

          </div>



          <div>

            <p className="text-xs uppercase tracking-widest text-[#D9D9D9]">
              Ceremony Time
            </p>


            <p className="mt-3 text-3xl text-[#E7C873]">
              10:00 AM
            </p>


          </div>




          <div>

            <p className="text-xs uppercase tracking-widest text-[#D9D9D9]">
              Venue
            </p>


            <p className="mt-3 text-3xl text-[#E7C873]">
              View Hall
            </p>


            <p className="text-xl text-white">
              Water&apos;s Edge
            </p>


            <p className="text-gray-300">
              Battaramulla, Sri Lanka
            </p>

          </div>



        </div>


      </div>


    </motion.section>

  );

}