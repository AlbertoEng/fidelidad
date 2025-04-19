import React from 'react'
import Image from 'next/image'


interface HeaderProps {
    nombre: string;
    descripcion: string;
    image?: string;
}

const Header = ({ nombre, descripcion, image }: HeaderProps) => {
    return (
        <header className={`rounded-lg shadow-md flex`}>
            <div className='bg-[#6445D6] flex justify-start items-center w-full px-4 py-2 rounded-lg'>
                {

                    image && <div className='flex flex-col p-2'>
                        <Image src={image} alt="Logo" width={50} height={30} />
                    </div>
                }
                <div className='flex flex-col'>
                    <h1 className="text-2xl font-bold text-white">Hola, {nombre}</h1>
                    <h2 className="text-sm text-gray-300">{descripcion}</h2>
                </div>
            </div>
        </header>
    )
}

export default Header