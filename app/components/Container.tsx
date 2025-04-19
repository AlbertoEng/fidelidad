import React from 'react'
import { PiCoffeeFill, PiCoffeeLight } from 'react-icons/pi'

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex flex-col bg-zinc-300 text-zinc-900 w-full px-4 py-6 rounded-lg '>
        {children}
    </div>
  )
}

export default Container