"use client";

import { motion } from "framer-motion";
import { useState } from "react";


export default function RSVP(){


const [name,setName]=useState("");
const [attendance,setAttendance]=useState("");



const submitRSVP=()=>{


const formURL=
"https://docs.google.com/forms/d/e/1FAIpQLSfashK9GoeFp_7KDfT0RcgOm1fRa9AiqPAFKRyffV5Ycvt62g/formResponse";



const data=new FormData();


data.append(
"entry.902303925",
name
);


data.append(
"entry.245615973",
attendance
);



fetch(formURL,{
method:"POST",
mode:"no-cors",
body:data,
});



alert(
"Thank you for confirming ❤️"
);



setName("");
setAttendance("");

};



return(


<motion.section

id="rsvp"

className="min-h-screen bg-[#06152A] px-6 py-28 text-center"


initial={{
opacity:0,
y:80
}}


whileInView={{
opacity:1,
y:0
}}


transition={{
duration:1.2
}}


viewport={{
once:false,
amount:0.3
}}

>


<p className="text-xs uppercase tracking-[0.5em] text-[#E7C873]">
RSVP
</p>



<h2 className="mt-6 text-5xl text-white">
Join Our Celebration
</h2>



<div className="mx-auto my-10 h-px w-40 bg-[#C9A227]" />



<div className="mx-auto max-w-xl rounded-[2rem] border border-[#C9A227]/40 bg-[#0B1F3A] p-12 shadow-2xl">



<p className="text-gray-300">

Kindly confirm your attendance before

</p>



<p className="mt-3 text-3xl text-[#E7C873]">

25 July 2026

</p>




<input

value={name}

onChange={(e)=>setName(e.target.value)}

placeholder="Your Name"

className="mt-8 w-full rounded-full border border-[#C9A227]/40 bg-[#06152A] px-6 py-4 text-white outline-none"

/>



<div className="mt-8 space-y-4">


<button

onClick={()=>setAttendance("Yes")}

className={`w-full rounded-full px-6 py-4 ${
attendance==="Yes"
?"bg-[#C9A227] text-[#06152A]"
:"border border-[#C9A227] text-white"
}`}

>

Yes, I will attend

</button>



<button

onClick={()=>setAttendance("No")}

className={`w-full rounded-full px-6 py-4 ${
attendance==="No"
?"bg-[#C9A227] text-[#06152A]"
:"border border-[#C9A227] text-white"
}`}

>

Sorry, I cannot attend

</button>


</div>



<button

onClick={submitRSVP}

className="mt-10 rounded-full bg-[#C9A227] px-12 py-4 text-[#06152A]"

>

Confirm Attendance 💌

</button>


</div>


</motion.section>


);


}