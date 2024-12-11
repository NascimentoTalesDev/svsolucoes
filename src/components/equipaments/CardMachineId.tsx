"use client"
import { Machine } from '@/app/types/machine'
import React, { useState, useRef } from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useContactModal } from '@/app/hooks/use-contact-modal'

interface CardMachineIdProps {
    machine: Machine
}

const CardMachineId = ({ machine }: CardMachineIdProps) => {
    const contactModal = useContactModal();

    const [currentImage, setCurrentImage] = useState(0);
    const imagesRef = useRef<HTMLDivElement | null>(null);
    const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

    const nextImage = () => {
        if (currentImage < machine?.images.length - 1) {
            setCurrentImage(currentImage + 1);
            imagesRef.current?.scrollTo({
                left: (currentImage + 1) * 90,
                behavior: 'smooth',
            });
        }
    };

    const prevImage = () => {
        if (currentImage > 0) {
            setCurrentImage(currentImage - 1);
            imagesRef.current?.scrollTo({
                left: (currentImage - 1) * 90,
                behavior: 'smooth',
            });
        }
    };

    const handleImageClick = (index: number) => {
        setCurrentImage(index);
        imagesRef.current?.scrollTo({
            left: index * 90,
            behavior: 'smooth',
        });
    };

    return (
        <div className=''>
            <div className='grid grid-cols-1 md:grid-cols-2 items-center md:items-start mx-auto gap-5 sm:w-[80%]'>
                <div className=''>
                    <div className='relative flex items-center h-[300px] w-full mx-auto max-w-[450px]'>
                        <div className='flex w-full top-36 z-10 absolute justify-between items-start'>
                            <Button id='prevImage' variant={"default"} className={`absolute px-2 left-0 cursor-pointer ${currentImage > 0 ? '' : 'hidden'}`} onClick={() => currentImage > 0 && prevImage()}>
                                <ChevronLeft />
                            </Button>
                            <Button id='nextImage' variant={"default"} className={`absolute px-2 cursor-pointer right-0 ${currentImage < machine?.images.length - 1 ? '' : 'hidden'}`} onClick={nextImage}>
                                <ChevronRight />
                            </Button>
                        </div>
                        <div className='relative h-full max-h-[300px] w-full mx-auto max-w-[450px]'>
                            <Image src={`/images/machines/${machine?.images[currentImage]}`} alt='Imagem' fill objectFit='contain'></Image>
                        </div>
                    </div>
                    <div className='w-full overflow-hidden'>
                        <div ref={imagesRef} className='flex flex-nowrap w-full overflow-x-scroll lg:overflow-x-hidden'>
                            {machine?.images.map((image, index) => (
                                <div
                                    key={index}
                                    ref={(ref) => { if (ref) imageRefs.current[index] = ref; }}
                                    className={`relative min-w-[80px] ml-[10px] mt-5  max-w-[80px] h-[80px] cursor-pointer ${currentImage === index ? 'border-2 border-primary' : ''}`}
                                    onClick={() => handleImageClick(index)}
                                >
                                    <Image src={`/images/machines/${image}`} alt={`Imagem ${index + 1}`} fill objectFit='cover'  ></Image>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className=''>
                    <div className='flex flex-col gap-[10px] mb-8'>
                        {machine?.descriptions.length > 0 && machine?.descriptions.map((description, idx) => (
                            <p key={idx} className='text-justify'>{description}</p>
                        ))}
                        {machine?.operationalWeight &&
                            <p className='flex gap-2'>
                                <span>Peso:</span>
                                <span className='font-bold'>{machine?.operationalWeight}</span>
                            </p>
                        }
                        {machine?.maximumDiggingDepth &&
                            <p className='flex gap-2'>
                                <span>Profundidade máxima de escavação:</span>
                                <span className='font-bold'>{machine?.maximumDiggingDepth}</span>
                            </p>
                        }
                        {machine?.maximumDischargeHeight &&
                            <p className='flex gap-2'>
                                <span>Altura máxima de descarga:</span>
                                <span className='font-bold'>{machine?.maximumDischargeHeight}</span>
                            </p>
                        }
                        {machine?.enginePower &&
                            <p className='flex gap-2'>
                                <span>Potência do motor:</span>
                                <span className='font-bold'>{machine?.enginePower}</span>
                            </p>
                        }
                        <p className='flex gap-2'>
                            <span>Combustível:</span>
                            <span className='font-bold'>{machine?.fuel}</span>
                        </p>
                    </div>
                    <Link className='w-full md:w-fit' href={`/equipamentos/${machine?.id}`}>
                        <Button onClick={() => contactModal.onOpen()} className='w-full'>Solicitar orçamento</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CardMachineId