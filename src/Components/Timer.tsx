"use client"

import { useEffect, useState, useMemo } from "react"
import { Highlight } from "./ui/hero-highlight"

export default function Component({ targetDate }: { targetDate?: Date }) {
  const defaultTargetDate = useMemo(() => new Date(Date.now() + 24 * 60 * 60 * 1000), [])
  const finalTargetDate = targetDate || defaultTargetDate

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = finalTargetDate.getTime() - Date.now()
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [finalTargetDate])

  return (
    <div className="flex flex-col items-center justify-center min-h-[300px] p-4 sm:p-6 md:p-8 bg-transparent text-white border border-white rounded-lg w-full max-w-3xl mx-auto">
      <h1 className="text-4xl   sm:text-4xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 md:mb-10 tracking-tight text-center">
      <Highlight>See You In </Highlight>
      </h1>
      
      <div className="grid grid-cols-7 gap-1 sm:gap-2 md:gap-3 text-center items-end">
        <div className="flex flex-col items-center">
          <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-1 sm:mb-2 tabular-nums">
            {timeLeft.days}
          </div>
          <div className="text-xs sm:text-sm md:text-base text-white/60 uppercase tracking-wider">
            Days
          </div>
        </div>
        
        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6">:</div>
        
        <div className="flex flex-col items-center">
          <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-1 sm:mb-2 tabular-nums">
            {timeLeft.hours.toString().padStart(2, '0')}
          </div>
          <div className="text-xs sm:text-sm md:text-base text-white/60 uppercase tracking-wider">
            Hours
          </div>
        </div>
        
        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6">:</div>
        
        <div className="flex flex-col items-center">
          <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-1 sm:mb-2 tabular-nums">
            {timeLeft.minutes.toString().padStart(2, '0')}
          </div>
          <div className="text-xs sm:text-sm md:text-base text-white/60 uppercase tracking-wider">
            Minutes
          </div>
        </div>
        
        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6">:</div>
        
        <div className="flex flex-col items-center">
          <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-1 sm:mb-2 tabular-nums">
            {timeLeft.seconds.toString().padStart(2, '0')}
          </div>
          <div className="text-xs sm:text-sm md:text-base text-white/60 uppercase tracking-wider">
            Seconds
          </div>
        </div>
      </div>
    </div>
  )
}