// pages/qr.tsx
'use client'
import dynamic from 'next/dynamic';

// Cargar dinámicamente para evitar errores en SSR
const QRReader = dynamic(() => import('../../components/QRReader'), { ssr: false });

export default function QRPage() {
  return (
    <main  style={{ padding: '2rem' }}>
      <h1 className='text-2xl text-center'>Lector de QR</h1>
      <QRReader />
    </main>
  );
}
