'use client'
import React from 'react'
import Header from "../components/Header";
import Container from '../components/Container';
import {QRCodeSVG} from 'qrcode.react';
import { useRouter } from 'next/navigation';

const page = () => {

  const router = useRouter()

  const handleRegresar = ()=>{
    router.back()
  }

  return (
    <div className='p-2 flex flex-col gap-2'>
        <Header image='/camino.png' nombre='Jesus Eng' descripcion='Bienvenido a Camino a comala' />
        <Container >
          <h2 className='text-xl text-center'>Solicita al cafe que te escaneen tu codigo QR, por favor para que tu visita quede registrada</h2>
          <div className='flex justify-center py-4'>
            <QRCodeSVG size={250} value="chagua" />
          </div>
          <button className='bg-indigo-500 p-2 rounded text-white' onClick={handleRegresar}>Regresar</button>
        </Container>
    </div>
  )
}

export default page