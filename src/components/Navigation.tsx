"use client";

export default function Navigation() {

  return (

    <nav className="fixed top-0 z-50 w-full border-b border-[#C9A227]/30 bg-[#06152A]/80 backdrop-blur-xl">


      <div className="mx-auto flex max-w-5xl justify-center gap-8 px-6 py-5 text-sm text-[#E7C873]">


        <a
          href="#wedding-details"
          className="transition hover:text-white"
        >
          Details
        </a>


        <a
          href="#venue"
          className="transition hover:text-white"
        >
          Venue
        </a>


        <a
          href="#rsvp"
          className="transition hover:text-white"
        >
          RSVP
        </a>


      </div>


    </nav>

  );
}