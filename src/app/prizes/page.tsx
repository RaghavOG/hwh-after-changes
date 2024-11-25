
'use client'

import Image from 'next/image'
import { Gift } from 'lucide-react'
import { TextHoverEffect } from '@/Components/textHover'
import First from "@/public/images/1.png"
import Second from "@/public/images/2.png"
import Third from "@/public/images/3.png"
import Navbar from '@/Components/Navbar'
import ParticlesComponent from '@/Components/ParticleComp'

export default function HackathonPrizes() {
  const prizes = [
    { category: 'Online', first: 5000, second: 3000, third: 1000 },
    { category: 'Offline', first: 10000, second: 5000, third: 2000 },
  ]

  const swags = [
    "Custom T-shirts",
    "Laptop Stickers",
    "Water Bottles",
    "Power Banks",
    "Wireless Earbuds",
    "Branded Backpacks"
  ]

  return (
    <div className="min-h-screen bg-black text-white py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <ParticlesComponent className="absolute inset-0 w-full h-full z-0" />

      
      
      <div className="max-w-7xl mx-auto relative z-10">
        <TextHoverEffect text="Prizes" />
        <div className="space-y-16">
          {prizes.map((prize, index) => (
            <div key={prize.category} className="space-y-8">
              <h2 className="text-3xl font-semibold text-center">{prize.category}</h2>
              <div className="flex flex-col md:flex-row justify-center items-center md:items-stretch gap-8">
                <PrizeCard place="2nd" amount={prize.second} image={Second} />
                <PrizeCard place="1st" amount={prize.first} image={First} className="md:scale-110" />
                <PrizeCard place="3rd" amount={prize.third} image={Third} />
              </div>

            </div>
          ))}
        </div>
        <div className="mt-20">
          <h2 className="text-4xl font-semibold mb-8 text-center">Swag for All Participants</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {swags.map((swag, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-6 flex items-center space-x-4">
                <Gift size={24} className="text-pink-400" />
                <span className="text-lg">{swag}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function PrizeCard({ place, amount, image, className }: { place: string; amount: number; image: any; className?: string }) {
  return (
    <>
    <div 
      className={`bg-gray-800 rounded-lg p-6 flex flex-col items-center justify-center space-y-4 transition-all duration-300 ease-in-out hover:scale-105 ${className}`}
      style={{ height: '400px', width: '320px' }}
    >
     
        <Image 
          src={image} 
          alt={`${place} Place Trophy`}
          className='w-64 h-96'
        />
    
      <h3 className="text-2xl font-semibold">{place} Place</h3>
      <p className="text-4xl font-bold text-pink-400">
        ${amount.toLocaleString()}
      </p>
    </div>
    
    </>
  )
}

