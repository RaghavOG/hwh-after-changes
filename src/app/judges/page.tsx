'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Mail, Linkedin, Twitter, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { TextHoverEffect } from '@/Components/textHover'
import Navbar from '@/Components/Navbar'
import ParticlesComponent from '@/Components/ParticleComp'
import { Button } from '@/Components/ui/button'
import { Card, CardContent } from '@/Components/ui/card'

// Placeholder mentor data - replace with your actual data
const mentors = [
  {
    name: 'Jane Doe',
    expertise: 'AI & Machine Learning',
    image: '/placeholder.svg?height=200&width=200',
    linkedin: 'https://linkedin.com/in/janedoe',
    twitter: 'https://twitter.com/janedoe',
    email: 'jane.doe@example.com',
    bio: 'Jane is a leading expert in AI and Machine Learning with over 10 years of experience in the field.'
  },
  {
    name: 'John Smith',
    expertise: 'Blockchain & Cryptocurrency',
    image: '/placeholder.svg?height=200&width=200',
    linkedin: 'https://linkedin.com/in/johnsmith',
    twitter: 'https://twitter.com/johnsmith',
    email: 'john.smith@example.com',
    bio: 'John is a blockchain pioneer with extensive experience in developing cryptocurrency solutions.'
  },
  {
    name: 'Emily Brown',
    expertise: 'UX/UI Design',
    image: '/placeholder.svg?height=200&width=200',
    linkedin: 'https://linkedin.com/in/emilybrown',
    twitter: 'https://twitter.com/emilybrown',
    email: 'emily.brown@example.com',
    bio: 'Emily is a creative UX/UI designer known for her innovative and user-centric approach to design.'
  },
  // Add more mentors as needed
]

export default function MentorInvitation() {

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <ParticlesComponent className="absolute inset-0 w-full h-full z-0" />

      <Navbar />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto relative z-10"
      >
        <TextHoverEffect text="Mentors" />
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-12 text-center"
        >
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
        >
          {mentors.map((mentor, index) => (
            <MentorCard 
              key={index} 
              {...mentor} 
              isExpanded={false}
              onToggle={() => {}}
            />
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-20 text-center"
        >
          <h2 className="text-3xl font-semibold mb-4">Are you an invited mentor?</h2>
          <p className="text-xl mb-8">
            If you've received an invitation to mentor at our hackathon, please confirm your participation.
            We're excited to have you share your expertise with our participants!
          </p>
          <Button size="lg" variant="default" className="bg-pink-600 hover:bg-pink-700 text-white">
            Confirm Participation
          </Button>
        </motion.div>
      </motion.div>
    </div>
  )
}

function MentorCard({ name, expertise, image, linkedin, twitter, email, bio, isExpanded, onToggle }: {
  name: string;
  expertise: string;
  image: string;
  linkedin: string;
  twitter: string;
  email: string;
  bio: string;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="bg-gray-800 overflow-hidden">
        <CardContent className="p-6">
          <motion.div className="flex flex-col items-center space-y-4">
            <Image 
              src={image} 
              alt={name}
              width={200}
              height={200}
              className="rounded-full border-4 border-pink-500"
            />
            <h3 className="text-2xl font-semibold">{name}</h3>
            <p className="text-lg text-pink-400">{expertise}</p>
            <div className="flex space-x-4">
              <motion.a 
                whileHover={{ scale: 1.2 }}
                href={linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-300 hover:text-white"
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.2 }}
                href={twitter} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-300 hover:text-white"
              >
                <Twitter size={24} />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.2 }}
                href={`mailto:${email}`} 
                className="text-gray-300 hover:text-white"
              >
                <Mail size={24} />
              </motion.a>
            </div>
            <motion.button
              onClick={onToggle}
              className="mt-4 flex items-center text-pink-400 hover:text-pink-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
            </motion.button>
          </motion.div>
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-4 text-gray-300"
              >
                <p>{bio}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </CardContent>
      </Card>
    </motion.div>
  )
}

