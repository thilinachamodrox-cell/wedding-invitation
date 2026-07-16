"use client";

import { motion } from "framer-motion";


export default function Venue(){

return(

<motion.section

id="venue"

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
Venue
</p>



<h2 className="mt-6 text-5xl text-white">
Where We Celebrate
</h2>



<div className="mx-auto my-10 h-px w-40 bg-[#C9A227]" />



<div className="mx-auto max-w-xl rounded-[2rem] border border-[#C9A227]/40 bg-[#0B1F3A] p-12 shadow-2xl">


<h3 className="text-4xl text-[#E7C873]">
View Hall
</h3>


<p className="mt-5 text-2xl text-white">
Water&apos;s Edge
</p>


<p className="text-gray-300">
Battaramulla, Sri Lanka
</p>



<a

href="https://maps.google.com"

target="_blank"

className="mt-10 inline-block rounded-full bg-[#C9A227] px-10 py-4 text-[#06152A]"

>

View Location

</a>


</div>


</motion.section>


);


}