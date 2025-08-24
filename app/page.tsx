'use client'
import Image from "next/image";
import LandingPage from "./comps/LandingPage";
import ConsoleSpinner from "@/components/ConsoleSpinner";

export default function Home() {
  return (
    <div className="h-screen">
      <LandingPage/>
      <div className="fixed top-5 right-7 cursor-pointer">
        <h3 className="text-neutral-500 hover:text-white transition-all">
          <ConsoleSpinner/>&nbsp;
          The MC
        </h3>
      </div>
    </div>
  );
}
