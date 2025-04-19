'use client'
import React from 'react'
import Container from './Container'
import Image from 'next/image'
import { colors } from '../colors/colors'
import { useRouter } from 'next/navigation'

const RecompensaSection = () => {

  const router =  useRouter()

  const handleVisit = ()=>{
    router.push('/visitar')
  }

  return (
    <Container>
        <h1 className='text-lg mb-4 font-bold'>Recompensa</h1>
        <p>Visita Camino a Comala 8 veces y gana un delicioso cafe americano</p>
        <div className='flex justify-center items-center'>
            <Image src="/cafe-americano.jpeg" className='rounded-lg' alt="Cafe" width={200} height={300} />
        </div>
        <button onClick={handleVisit} className={`bg-[${colors.primary}] text-white px-4 py-2 my-4 rounded-md`}>Registrar visita</button>
    </Container>
  )
}

export default RecompensaSection