'use client'

import Image from "next/image";
import CustomButton from "./CustomButton";

const Hero = () => {
    const handleScroll = () => {

    }

    return (
        <div className='hero'>
            <div className='flex-1 pt-36 padding-x'>
                <h1 className='hero__title'>
                    Encuentre y reserve un automóvil, ¡rápida y fácilmente!
                </h1>

                <p className='hero__subtitle'>
                    Optimice la experiencia de compra de su coche con nuestro sencillo proceso de reserva.
                </p>

                <CustomButton
                    title='Ver Vehículos'
                    containerStyles='bg-primary-blue text-white rounded-full mt-10'
                    handleClick={() => { handleScroll }}
                />
            </div>
            <div className='hero__image-container'>
                <div className='hero__image'>
                    <Image src='/hero.png' alt='hero'
                    fill className='object-contain' />
                </div>
                <div className='hero__image-overlay' />
            </div>
        </div>
    )
}

export default Hero