'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';

const QrReader = dynamic(() => import('react-qr-reader'), { ssr: false });

export default function QRReader() {
  const [result, setResult] = useState<string | null>(null);
  const [showScanner, setShowScanner] = useState(false);

  return (
    <div>
      <h2>Escáner de código QR</h2>
      {!showScanner && (
        <button onClick={() => setShowScanner(true)}>
          Activar escáner
        </button>
      )}

      {showScanner && (
        <div className='rounded-xl overflow-hidden' style={{ width: '100%', maxWidth: 500 }}>
          <QrReader
            delay={300}
            onError={(err) => console.error('Error:', err)}
            onScan={(data) => {
              if (data) {
                setResult(data);
              }
            }}
            style={{ width: '100%' }}
          />
        </div>
      )}

      {result && <p>Resultado: {result}</p>}
    </div>
  );
}


