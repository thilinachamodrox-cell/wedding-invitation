"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";


export default function Countdown() {

  const weddingDate = new Date("2026-08-07T10:00:00");


  const calculateTime = () => {

    const difference = weddingDate.getTime() - Date.now();


    if (difference <= 0) {
      return {
        days:0,
        hours:0,
        minutes:0,
        seconds:0,
      };
    }


    return {
      days: Math.floor(
        difference / (1000 * 60 * 60 * 24)
      ),

      hours: Math.floor(
        (difference / (1000 * 60 * 60)) % 24
      ),

      minutes: Math.floor(
        (difference / (1000 * 60)) % 60
      ),

      seconds: Math.floor(
        (difference / 1000) % 60
      ),
    };
  };


  const [time,setTime] = useState(calculateTime());


  useEffect(()=>{

    const timer=setInterval(()=>{
      setTime(calculateTime());
    },1000);


    return ()=>clearInterval(timer);

  },[]);



  const items=[
    {
      label:"Days",
      value:time.days
    },
    {
      label:"Hours",
      value:time.hours
    },
    {
      label:"Minutes",
      value:time.minutes
    },
    {
      label:"Seconds",
      value:time.seconds
    },
  ];



  return (

    <motion.section
      className="min-h-screen bg-amber-50 px-6 py-28 text-center"
      initial={{opacity:0,y:80}}
      whileInView={{opacity:1,y:0}}
      transition={{duration:1.5}}
      viewport={{
        once:false,
        amount:0.3
      }}
    >


      <p className="text-xs uppercase tracking-[0.5em] text-yellow-700">
        Countdown
      </p>


      <h2 className="mt-6 text-5xl text-yellow-800">
        Until We Say "I Do"
      </h2>


      <div className="mx-auto my-10 h-px w-40 bg-yellow-600"/>



      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 md:grid-cols-4">


        {items.map((item)=>(

          <motion.div
            key={item.label}
            className="rounded-[2rem] border border-yellow-200 bg-white p-10 shadow-xl"
            whileHover={{
              y:-8
            }}
          >

            <p className="text-5xl font-semibold text-yellow-800">
              {String(item.value).padStart(2,"0")}
            </p>


            <p className="mt-4 text-xs uppercase tracking-[0.3em] text-gray-400">
              {item.label}
            </p>


          </motion.div>

        ))}


      </div>


    </motion.section>

  );
}