"use client";

import { motion } from "framer-motion";


export default function Timeline() {

  const events = [
    {
      time: "10:00 AM",
      title: "Wedding Ceremony",
      description:
        "The beginning of our beautiful journey together.",
    },

    {
      time: "11:30 AM",
      title: "Blessings & Photography",
      description:
        "Capturing precious moments with our loved ones.",
    },

    {
      time: "12:30 PM",
      title: "Celebration & Lunch",
      description:
        "A joyful celebration surrounded by family and friends.",
    },
  ];


  return (

    <motion.section
      className="min-h-screen bg-amber-50 px-6 py-28 text-center"
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


      <p className="text-xs uppercase tracking-[0.5em] text-yellow-700">
        Timeline
      </p>


      <h2 className="mt-6 text-5xl text-yellow-800">
        Our Wedding Day
      </h2>


      <div className="mx-auto my-10 h-px w-40 bg-yellow-600"/>



      <div className="mx-auto max-w-3xl space-y-8">


        {events.map((event,index)=>(

          <motion.div
            key={index}
            className="rounded-[2rem] border border-yellow-200 bg-white p-10 shadow-xl"
            whileHover={{
              scale:1.03,
            }}
          >

            <p className="text-3xl text-yellow-800">
              {event.time}
            </p>


            <h3 className="mt-4 text-3xl text-gray-800">
              {event.title}
            </h3>


            <p className="mt-4 text-gray-500">
              {event.description}
            </p>


          </motion.div>

        ))}


      </div>


    </motion.section>

  );
}