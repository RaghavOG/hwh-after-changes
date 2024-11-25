"use client";

import React from "react";
import ParticlesComponent from "@/Components/ParticleComp";
import Navbar from "@/Components/Navbar";
import { Separator } from "@/Components/ui/separator";
import { Button } from "@/Components/ui/button";
import {
  TextRevealCard,
  TextRevealCardDescription,
} from "@/Components/text-reveal-card";
import PastEvents from "@/Components/PastEvents";
import { Calendar, Contact, Globe, MapPin } from "lucide-react";
import Faqs from "@/Components/Faqs";
import Link from "next/link";
import Image from "next/image";
import { BgImg } from "@/public";
import Timer from "@/Components/Timer";
import { LampDemo } from "@/Components/lamp";
import { motion } from "framer-motion";
import Footer from "@/Components/Footer";



export default function Page() {
  return (
    <div className="relative min-h-screen bg-gray-900 text-white">
      {/* <Navbar /> */}
      <main className="container ">
        <ParticlesComponent className="absolute inset-0 w-full h-full z-0" />

        {/* Main content area */}
        <div className="flex flex-col items-center mt-8 md:mt-12 justify-center z-10 relative">
          {/* Title Section */}
          {/* <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold text-center">
            <span className="text-[#DD7CB2]">Hack</span>
            <span className="text-[#3FBFBD]">With</span>
            <span className="text-[#DD7CB2]">Her</span>{" "}4.0

          </h1> */}

          <Image
            className="mt-12"
            src={BgImg}
            width={900}
            height={500}
            alt="HackWithHer Logo"
          />

          <Separator className="w-4/5 md:w-1/2 my-6 md:my-8" />

          {/* Location and Date */}
          <div className="text-center w-full max-w-md">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center gap-4"
            >
              <div className="flex items-center gap-2">
                <MapPin className="w-6 h-6 text-[#DD7CB2]" />
                <h3 className="text-xl font-semibold">
                  Chitkara University , Rajpura
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-6 h-6 text-[#3FBFBD]" />
                <p className="text-lg">7-8 March</p>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-6 h-6 text-[#DD7CB2]" />
                <p className="text-lg">Offline & Virtual</p>
              </div>
            </motion.div>
          </div>

          {/* Glassmorphic Container for buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8 bg-transparent bg-opacity-10 backdrop-blur-lg rounded-lg py-6 px-6 sm:px-10 shadow-lg w-full max-w-md">
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
  {/* Join Discord Button */}
  <Button
    asChild
    variant="outline"
    className="w-full sm:w-auto border-[#DD7CB2] text-[#DD7CB2] hover:bg-[#DD7CB2] hover:text-white hover:border-[#DD7CB2] transition-colors duration-300 font-semibold"
  >
    <Link href="https://discord.gg/invite">Join Discord</Link>
  </Button>

  {/* Register Button */}
  <Button
    asChild
    variant="default"
    className="w-full sm:w-auto bg-[#3FBFBD] text-[#2c2c2c] hover:bg-[#2c2c2c] hover:text-[#3FBFBD] transition-colors duration-300 font-semibold"
  >
    <Link href="https://discord.gg/invite">Register</Link>
  </Button>
</div>

          </div>

          {/* Past Events */}
          <div className="w-full mt-12">
            <PastEvents />
          </div>
          {/* See You in  */}

          <Timer />

          {/* Faqs */}
          <div className="w-full mt-12">
            <Faqs />
          </div>

          <div className="w-full mt-12">
            <Footer />
          </div>
        </div>
      </main>
    </div>
  );
}

