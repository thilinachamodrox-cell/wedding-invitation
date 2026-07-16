"use client";

import { motion } from "framer-motion";


export default function Footer(){

  return (

    <motion.footer

      className="min-h-[60vh] bg-amber-50 px-6 py-28 text-center"

      initial={{
        opacity:0,
        y:80,
      }}

      whileInView={{
        opacity:1,
        y:0,
      }}

      transition={{
        duration:1.5,
      }}

      viewport={{
        once:false,
        amount:0.3,
      }}

    >


      <div className="mx-auto max-w-3xl">


        <div className="mx-auto mb-10 h-px w-40 bg-yellow-600"/>


        <p className="text-xs uppercase tracking-[0.5em] text-yellow-700">
          Thank You
        </p>



        <h2 className="mt-6 text-5xl text-yellow-800">
          We Can't Wait To Celebrate With You
        </h2>



        <p className="mt-10 text-4xl text-gray-700">
          Thilina 🐻
          <br />
          ❤️
          <br />
          Rashmini 🐥
        </p>



        <p className="mt-10 text-gray-500">
          Friday
          <br />
          7 August 2026
        </p>



        <p className="mt-8 text-sm tracking-widest text-gray-400">
          WITH LOVE & GRATITUDE
        </p>


      </div>


    </motion.footer>

  );
}