"use client";

import { motion } from "framer-motion";


export default function Hero() {

  return (

    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-[#06152A] via-[#0B1F3A] to-[#06152A] px-6">


      {/* Gold glow decorations */}

      <div className="absolute left-[-120px] top-[-120px] h-96 w-96 rounded-full bg-[#C9A227]/20 blur-3xl" />


      <div className="absolute bottom-[-120px] right-[-120px] h-96 w-96 rounded-full bg-[#D9D9D9]/10 blur-3xl" />



      <motion.div

        className="relative z-10 max-w-4xl text-center"

        initial={{
          opacity:0,
          y:40,
        }}

        animate={{
          opacity:1,
          y:0,
        }}

        transition={{
          duration:1.5,
        }}

      >


        <p className="mb-8 text-xs uppercase tracking-[0.6em] text-[#E7C873]">

          Together with our families

        </p>



        <h1 className="text-5xl font-bold text-white md:text-7xl">


          Thilina 🐻


          <br />


          <span className="text-[#C9A227]">

            ❤️

          </span>


          <br />


          🐥 Rashmini


        </h1>



        <div className="mx-auto my-10 h-px w-40 bg-[#C9A227]" />



        <p className="text-lg leading-relaxed text-gray-300">

          We invite you to celebrate
          <br />

          our special day with us

        </p>




        <a

          href="#wedding-details"

          className="mt-12 inline-block rounded-full bg-[#C9A227] px-12 py-4 font-medium text-[#06152A] shadow-xl transition hover:scale-105 hover:bg-[#E7C873]"

        >

          Open Invitation 💌


        </a>



      </motion.div>



    </section>

  );

}