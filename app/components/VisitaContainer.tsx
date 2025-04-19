import React from 'react'
import { colors } from '../colors/colors'
import { PiCoffeeFill, PiCoffeeLight } from "react-icons/pi";
import Container from './Container';


const VisitaContainer = () => {
  return (
    <Container >
        <h1 className='text-lg '>Tus Visitas: { 5 }</h1>
        <div className='flex gap-2 p-2'>
            <PiCoffeeFill className={`text-indigo-500`} size={30} />
            <PiCoffeeFill className={`text-indigo-500`} size={30} />
            <PiCoffeeFill className={`text-indigo-500`} size={30} />
            <PiCoffeeFill className={`text-indigo-500`} size={30} />
            <PiCoffeeFill className={`text-indigo-500`} size={30} />
            <PiCoffeeLight className={`text-indigo-500`} size={30} />
            <PiCoffeeLight className={`text-indigo-500`} size={30} />
            <PiCoffeeLight className={`text-indigo-500`} size={30} />
        </div>
    </Container>
  )
}

export default VisitaContainer