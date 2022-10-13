import React from 'react';

const Services = () => {
  return (
    <div id="services" className="scroll-smooth">
      <div className="max-w-[1240px] min-h-[10rem] mx-auto grid grid-cols-1 font-bold p-2">
        <div className="mx-auto sm:pl-20 w-full grid text-left md:text-center">
          <div className="p-2">
            <h1 className="text-3xl md:text-4xl font-bold pb-2 px-2">
              Audio Mastering
            </h1>
            <p className="Text-sm md:text-lg lg:text-xl p-2 max-w-[720px] lg:max-w-full">
              W Hybrid mastering studio with Tyler Acoustics D2X’s, Barefoot
              Sound MicroMain27 and Avantone MixCubes
            </p>
          </div>
        </div>

        <div className="min-h-[10rem] mx-auto sm:pl-20 w-full grid text-left md:text-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold p-4">Hardware</h1>{' '}
            <div>
              <div className="text-sm md:text-lg lg:text-xl px-4 pb-4">
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

      <div>
        <img
          src="/images/hero6.jpg"
          className="hidden md:block object-cover h-[20rem] w-full"
        />
      </div>
      <div className="max-w-[1800px] grid grid-cols-1 mx-auto border-2">
        <div className="text-center shadow-lg pt-6 px-6">
          <h1 className="text-2xl lg:text-4xl font-bold p-2 pb-2">Prices</h1>
          <div className="p-6 border">
            <h2 className="text-lg lg:text-2xl font-bold"> Stereo Mastering</h2>
            <p className="text-lg lg:text-2xl">$80.00</p>
            <p className="text-sm">
              Delievered digitally in 48kHz 24 Bit WAV files
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 text-center px-6 pb-6">
          <div className="p-6 border">
            <h1 className="text-lg lg:text-2xl font-bold bor">
              Stem Mastering
            </h1>
            <p className="text-lg lg:text-2xl">+ $40.00</p>
            <p className="text-sm">
              Master from 8 or less stems from the final mix
            </p>
          </div>
          <div className="p-6 border">
            <h1 className="text-lg lg:text-2xl font-bold">Additionals</h1>
            <p className="text-sm lg:text-lg">MP3 Files +$5.00</p>
            <p className="text-sm lg:text-lg">16/44 WAV Files +$5.00</p>
            <p className="text-sm lg:text-lg">
              Additonal Streaming Version +$25.00
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
