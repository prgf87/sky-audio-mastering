import Image from 'next/image';
import React from 'react';

const Services = () => {
  return (
    <>
      <div id="services" className="relative top-[-80px]"></div>
      <div className="scroll-smooth">
        <div className="max-w-[1240px] min-h-[10rem] mx-auto grid grid-cols-1 font-bold p-2">
          <div className="mx-auto sm:pl-20 w-full grid text-center border-none md:border-t-2">
            <div className="p-2">
              <h1 className="text-2xl md:text-3xl font-bold pb-2 pt-4 px-2">
                Audio Mastering
              </h1>
              <p className="Text-sm md:text-md lg:text-lg py-2 lg:px-20 max-w-[720px] lg:max-w-full">
                Hybrid mastering studio with Tyler Acoustics D2X’s, Barefoot
                Sound MicroMain27 and Avantone MixCubes
              </p>
            </div>
          </div>
          <div className="min-h-[10rem] mx-auto sm:pl-20 w-full grid text-center border-none md:border-x-2">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold p-4">Hardware</h1>{' '}
              <div>
                <div className="text-sm md:text-md lg:text-lg px-4 pb-4">
                  <p>* Louder Than Liftoff Silver Bullet</p>
                  <p>* Neve Portico II Master Buss Processor</p>
                  <p>* Buzzaudio SOC-M</p>
                  <p>* Hendy Amps Michelangelo</p>
                  <p>
                    * Heritage Audio SYMPH EQ Master Bus Stereo Asymptotic
                    Equalizer
                  </p>
                  <p>* The Dolby 740</p>
                  <p>* Drawmer 1976</p>
                </div>
              </div>
            </div>{' '}
          </div>
        </div>
        <div className="my-6 grid m-auto h-[15rem] md:h-[20rem] lg:h-[30rem]">
          <Image
            src="/images/hero6.jpg"
            height={440.5}
            width={440.5}
            className="object-cover"
            alt="Background Hero Image - Kri Samadhi - Sky Audio Mastering"
          />
        </div>
        <div className="max-w-[1240px] grid grid-cols-1 mx-auto text-center px-2 lg:px-6">
          <div className="pt-6 px-2 lg:px-6 border-none md:border-x-2">
            <h1 className="text-2xl lg:text-4xl font-bold p-2 pb-2">Prices</h1>
            <div className="p-2">
              <h2 className="text-lg lg:text-2xl font-bold">
                {' '}
                Stereo Mastering
              </h2>
              <p className="text-lg lg:text-2xl">$80.00</p>
              <p className="text-sm">
                Delievered digitally in 48kHz 24 Bit WAV files
              </p>
              <p className="text-lg lg:text-xl pt-2">
                Additonal Streaming Version <br />
                $25.00
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 text-center px-6">
            <div className="p-2">
              <h1 className="text-lg lg:text-2xl font-bold bor">
                Stem Mastering
              </h1>
              <p className="text-lg lg:text-2xl">$120.00</p>
              <p className="text-sm">
                Master from 8 or less stems from the final mix
              </p>
            </div>
            <div className="p-2">
              <h1 className="text-lg lg:text-2xl font-bold">Additionals</h1>
              <p className="text-sm lg:text-lg">MP3 Files + $5.00</p>
              <p className="text-sm lg:text-lg">16/44 WAV Files + $5.00</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
