"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";


export default function Countdown() {


const weddingDate =
new Date("2026-08-07T10:00:00");



const calculateTime = () => {


const difference =
weddingDate.getTime() - Date.now();



if(difference <= 0){

return {
days:0,
hours:0,
minutes:0,
seconds:0,
};

}



return {

days:Math.floor(
difference/(1000*60*60*24)
),


hours:Math.floor(
(difference/(1000*60*60))%24
),


minutes:Math.floor(
(difference/(1000*60))%60
),


seconds:Math.floor(
(difference/1000)%60
),

};


};



const [time,setTime]=useState({

days:0,
hours:0,
minutes:0,
seconds:0,

});




useEffect(()=>{


setTime(calculateTime());


const timer=setInterval(()=>{

setTime(calculateTime());

},1000);



return ()=>clearInterval(timer);


},[]);




const items=[

["Days",time.days],

["Hours",time.hours],

["Minutes",time.minutes],

["Seconds",time.seconds],

];



return (

<motion.section

className="min-h-screen bg-[#0B1F3A] px-6 py-28 text-center"


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
Countdown
</p>



<h2 className="mt-6 text-5xl text-white">
Until We Say "I Do"
</h2>



<div className="mx-auto my-10 h-px w-40 bg-[#C9A227]" />



<div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 md:grid-cols-4">


{items.map(([label,value])=>(


<motion.div

key={label}

whileHover={{
y:-10
}}

className="rounded-[2rem] border border-[#C9A227]/40 bg-[#06152A] p-10 shadow-xl"


>


<p className="text-5xl font-semibold text-[#E7C873]">

{String(value).padStart(2,"0")}

</p>


<p className="mt-4 text-xs uppercase tracking-widest text-gray-300">

{label}

</p>


</motion.div>


))}



</div>


</motion.section>

);


}