"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import MusicPlayer, { MusicPlayerHandle } from "./MusicPlayer";

export default function Hero() {
  const musicRef = useRef<MusicPlayerHandle>(null);

  const openInvitation = () => {
    musicRef.current?.playMusic();

    document
      .getElementById("wedding-details")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };


  return (
    <>
      <MusicPlayer ref={musicRef} />

      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-white via-amber-50 to-white px-6">

        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-yellow-200/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-yellow-300/20 blur-3xl" />


        <motion.div
          className="z-10 max-w-3xl text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
        >

          <p className="tracking-[0.5em] text-xs uppercase text-yellow-700">
            Together with our families
          </p>


          <h1 className="mt-10 text-6xl font-semibold text-yellow-800 md:text-8xl">
            Thilina

            <span className="block my-4 text-3xl">
              🐻 ❤️ 🐥
            </span>

            Rashmini
          </h1>


          <div className="mx-auto my-10 h-px w-40 bg-yellow-600" />


          <p className="text-lg leading-relaxed text-gray-600">
            Request the honour of your presence
            <br />
            at the celebration of our marriage
          </p>


          <p className="mt-8 text-xl text-yellow-800">
            Friday
            <br />
            <span className="font-semibold">
              7 August 2026
            </span>
          </p>


          <button
            onClick={openInvitation}
            className="mt-12 rounded-full bg-yellow-700 px-12 py-4 text-white shadow-xl transition hover:scale-105 hover:bg-yellow-800"
          >
            Open Invitation ✨
          </button>

        </motion.div>

      </section>
    </>
  );
}