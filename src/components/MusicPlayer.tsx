"use client";

import {
  useRef,
  useState,
  forwardRef,
  useImperativeHandle,
} from "react";

import { motion } from "framer-motion";


export interface MusicPlayerHandle {
  playMusic: () => void;
}


const MusicPlayer = forwardRef<MusicPlayerHandle>((_, ref) => {


  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [playing,setPlaying] = useState(false);



  const playMusic = () => {

    if(!audioRef.current) return;


    audioRef.current
      .play()
      .then(()=>{
        setPlaying(true);
      })
      .catch(()=>{
        console.log("Browser blocked audio");
      });

  };



  const toggleMusic = () => {

    if(!audioRef.current) return;


    if(playing){

      audioRef.current.pause();
      setPlaying(false);

    } else {

      playMusic();

    }

  };



  useImperativeHandle(ref,()=>({
    playMusic,
  }));



  return (

    <>


      <audio
        ref={audioRef}
        src="/music/wedding-song.mp3"
        loop
        preload="auto"
      />



      <motion.button

        onClick={toggleMusic}

        className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-yellow-700 text-2xl text-white shadow-2xl"

        animate={{
          scale: playing ? [1,1.08,1] : 1,
        }}

        transition={{
          duration:2,
          repeat: playing ? Infinity : 0,
        }}

      >

        {playing ? "🌟" : "🎵"}


      </motion.button>


    </>

  );

});


MusicPlayer.displayName="MusicPlayer";


export default MusicPlayer;