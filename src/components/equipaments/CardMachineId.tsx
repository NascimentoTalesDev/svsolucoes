"use client"
import { Machine } from '@/app/types/machine'
import React, { useState, useRef } from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface CardMachineIdProps {
    machine: Machine
}

const CardMachineId = ({ machine }: CardMachineIdProps) => {
    const [currentImage, setCurrentImage] = useState(0);
    const imagesRef = useRef<HTMLDivElement | null>(null);
    const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

    const nextImage = () => {
        if (currentImage < machine?.images.length - 1) {
            setCurrentImage(currentImage + 1);
            imagesRef.current?.scrollTo({
                left: (currentImage + 1) * 80,
                behavior: 'smooth',
            });
        }
    };

    const prevImage = () => {
        if (currentImage > 0) {
            setCurrentImage(currentImage - 1);
            imagesRef.current?.scrollTo({
                left: (currentImage - 1) * 80,
                behavior: 'smooth',
            });
        }
    };

    const handleImageClick = (index: number) => {
        setCurrentImage(index);
        imagesRef.current?.scrollTo({
            left: index * 80,
            behavior: 'smooth',
        });
    };

    return (
        <div className=''>
            <div className='grid grid-cols-1 md:grid-cols-2 items-center mx-auto gap-5 sm:w-[80%]'>
                <div className=''>
                    <div className='relative h-[300px] sm:h-[350px] w-full mx-auto max-w-[350px]'>
                        <div className='flex w-full bg-white top-40 z-50 absolute justify-between items-start'>
                            <ChevronLeft className={`absolute left-0 cursor-pointer ${currentImage > 0 ? '' : 'hidden'}`} onClick={() => currentImage > 0 && prevImage()} />
                            <ChevronRight className={`absolute cursor-pointer right-0 ${currentImage < machine?.images.length - 1 ? '' : 'hidden'}`} onClick={nextImage} />
                        </div>
                        <div className='relative h-[300px] sm:h-[350px] w-full mx-auto max-w-[350px]'>
                            <Image src={`/images/machines/${machine?.images[currentImage]}`} alt='Imagem' fill></Image>
                        </div>
                    </div>
                    <div className='w-full overflow-hidden'>
                        <div ref={imagesRef} className='flex flex-nowrap w-full overflow-x-hidden'>
                            {machine?.images.map((image, index) => (
                                <div
                                    key={index}
                                    ref={(ref) => { if (ref) imageRefs.current[index] = ref; }}
                                    className={`relative min-w-[80px] max-w-[80px] h-[80px] cursor-pointer ${currentImage === index ? 'border-2 border-primary' : ''}`}
                                    onClick={() => handleImageClick(index)}
                                >
                                    <Image src={`/images/machines/${image}`} alt={`Imagem ${index + 1}`} fill></Image>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-[20px]'>
                    <p className='text-justify'>{machine?.description}</p>
                    <p className='flex gap-2'>
                        <span>Peso:</span>
                        <span>{machine?.weight}</span>
                    </p>

                    <Link className='w-full md:w-fit' href={`/equipamentos/${machine?.id}`}>
                        <Button className='w-full'>Solicitar orçamento</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CardMachineId