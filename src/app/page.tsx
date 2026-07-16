"use client";

import { useRef } from "react";

import Hero from "@/components/Hero";
import WeddingDetails from "@/components/WeddingDetails";
import Countdown from "@/components/Countdown";
import Venue from "@/components/Venue";
import RSVP from "@/components/RSVP";
import MusicPlayer, {
  MusicPlayerHandle,
} from "@/components/MusicPlayer";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";


export default function Home() {


  const musicRef = useRef<MusicPlayerHandle>(null);



  return (

    <main>


      <Navigation />



      <MusicPlayer ref={musicRef} />



      <Hero

        startMusic={() => {

          musicRef.current?.playMusic();

        }}

      />



      <WeddingDetails />



      <Countdown />



      <Venue />



      <RSVP />



      <Footer />


    </main>

  );

}