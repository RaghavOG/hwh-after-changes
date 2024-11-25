'use client'

import Image from "next/image"
import { motion } from "framer-motion"
import { Event2018, Event2019, Event2020 } from "@/public"
import { Highlight } from "@/Components/ui/hero-highlight"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/Components/ui/card"

export default function PastEvents() {
  const events = [
    {
      year: 2018,
      image: Event2018,
      title: "HackWithHer 2018",
      description:
        "The first-ever HackWithHer event! A groundbreaking start with over 100 participants, filled with amazing ideas and projects.",
    },
    {
      year: 2019,
      image: Event2019,
      title: "HackWithHer 2019",
      description:
        "The event grew in size with new challenges and more sponsors, attracting over 200 talented participants from across the country.",
    },
    {
      year: 2021,
      image: Event2020,
      title: "HackWithHer 2021",
      description:
        "A spectacular edition with a focus on innovation in AI and Web3, drawing over 300 participants and industry experts as judges.",
    },
  ]

  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <h2 className=" font-bold text-center mb-12">
      <Highlight className="text-4xl   sm:text-4xl md:text-4xl lg:text-5xl">Our Past Events</Highlight>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {events.map((event, index) => (
          <motion.div
            key={event.year}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="flex justify-center"
          >
            <Card className="overflow-hidden bg-white/10 backdrop-blur-lg border-white/20 text-white w-full max-w-sm">
              <div className="relative h-48">
                <Image
                  src={event.image}
                  alt={event.title}
                  // layout="fill"
                  // objectFit="cover"
                  className="transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-bold">{event.title}</CardTitle>
                <CardDescription className="text-white/70">{event.year}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">{event.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </main>
  )
}