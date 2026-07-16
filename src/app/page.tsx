import Hero from "@/components/Hero";
import WeddingDetails from "@/components/WeddingDetails";
import Countdown from "@/components/Countdown";
import Venue from "@/components/Venue";
import RSVP from "@/components/RSVP";
import MusicPlayer from "@/components/MusicPlayer";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";


export default function Home() {

  return (

    <main>

      <Navigation />

      <MusicPlayer />

      <Hero />

      <WeddingDetails />

      <Countdown />

      <Venue />

      <RSVP />

      <Footer />

    </main>

  );

}