"use client";

import { motion } from "framer-motion";
import { useState } from "react";


export default function RSVP() {

  const [name,setName] = useState("");
  const [attendance,setAttendance] = useState("");


  const submitRSVP = () => {

    const formURL =
      "https://docs.google.com/forms/d/e/1FAIpQLSfashK9GoeFp_7KDfT0RcgOm1fRa9AiqPAFKRyffV5Ycvt62g/formResponse";


    const formData = new FormData();

    formData.append(
      "entry.902303925",
      name
    );

    formData.append(
      "entry.245615973",
      attendance
    );


    fetch(formURL,{
      method:"POST",
      mode:"no-cors",
      body:formData,
    });


    alert(
      "Thank you for confirming ❤️"
    );


    setName("");
    setAttendance("");

  };



  return (

    <motion.section

      className="min-h-screen bg-white px-6 py-28 text-center"

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
        RSVP
      </p>


      <h2 className="mt-6 text-5xl text-yellow-800">
        Join Our Celebration
      </h2>


      <div className="mx-auto my-10 h-px w-40 bg-yellow-600"/>



      <div className="mx-auto max-w-xl rounded-[2rem] border border-yellow-200 bg-gradient-to-b from-white to-amber-50 p-12 shadow-2xl">


        <p className="text-gray-600">
          We would be delighted to celebrate
          <br/>
          our special day with you.
        </p>


        <p className="mt-6 text-gray-500">
          Kindly confirm your attendance before
        </p>


        <p className="mt-2 text-2xl text-yellow-800">
          25 July 2026
        </p>



        <input

          value={name}

          onChange={(e)=>setName(e.target.value)}

          placeholder="Your Name"

          className="mt-8 w-full rounded-full border border-yellow-200 px-6 py-4 outline-none focus:border-yellow-600"

        />



        <div className="mt-8 space-y-4">


          <button

            onClick={()=>setAttendance("Yes")}

            className={`w-full rounded-full px-6 py-4 ${
              attendance==="Yes"
              ?"bg-yellow-700 text-white"
              :"bg-white border border-yellow-300"
            }`}

          >
            Yes, I will attend
          </button>



          <button

            onClick={()=>setAttendance("No")}

            className={`w-full rounded-full px-6 py-4 ${
              attendance==="No"
              ?"bg-yellow-700 text-white"
              :"bg-white border border-yellow-300"
            }`}

          >
            Sorry, I cannot attend
          </button>


        </div>



        <button

          onClick={submitRSVP}

          className="mt-10 rounded-full bg-yellow-700 px-12 py-4 text-white shadow-lg transition hover:scale-105 hover:bg-yellow-800"

        >
          Confirm Attendance 💌
        </button>


      </div>


    </motion.section>

  );

}