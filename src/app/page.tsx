import Hero from "@/components/Hero";
import WeddingDetails from "@/components/WeddingDetails";
import Countdown from "@/components/Countdown";
import Venue from "@/components/Venue";
import Timeline from "@/components/Timeline";
import RSVP from "@/components/RSVP";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>

      <Hero />

      <WeddingDetails />

      <Countdown />

      <Venue />

      <Timeline />

      <RSVP />

      <Footer />

    </main>
  );
}