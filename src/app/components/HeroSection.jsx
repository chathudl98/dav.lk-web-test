"use client";
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';


const HeroSection = () => {
    return (
        <section id="home">
            <div className='grid frid-cols-1 sm:grid-cols-12'>
                <div className="col-span-7 place-self-center text-center sm:text-left">
                    <h1 className="text-white mb-4 text-4xl  sm-text-5xl  lg:text-6xl font-extrabold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-blue-600">
                            Hello , Welcome to {""}
                        </span> 
                        <br></br>
                        <TypeAnimation
                            sequence={[
                                'Airport Tranfers',
                                1000,
                                'Your Trusted Driving Partner',
                                1000,
                                'Airport Tranfers',
                                1000,
                                'Your Trusted Driving Partner',
                                1000
                            ]}
                            wrapper="span"
                            speed={250}
                            style={{ fontSize: '1em', display: 'inline-block' }}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className="text-#ADB7BE text-base sm:text-lg mb-6 lg:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ipsa culpa asperiores dicta mollitia officia, doloremque, illo ipsam corrupti rem, recusandae quia? Nobis laboriosam soluta rem possimus animi deserunt ullam.</p>
                    <div>
                        <button className='px-6 py-3 mb-3 w-full sm:w-fit rounded-full  mr-4 bg-white text-black hover:bg-slate-200 '>Hire Me</button>
                        <button className='px-6 py-3 w-full sm:w-fit rounded-full  mr-4 bg-white text-black hover:bg-slate-200'>Hire Me</button>

                    </div>
                </div>
                <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                    <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                        <Image
                            src="/images/logo.png"
                            alt="heroimage"
                            className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                            width={500}
                            height={500}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection