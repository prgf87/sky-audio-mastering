import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { ClientsData } from './ClientsData';

const BandCampImg = () => {
  return (
    <div>
      {/*Overlay*/}
      <div className="relative grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 grid-rows-1 gap-2 p-2 ">
        {ClientsData.map((client, index) => {
          return (
            <div
              key={index}
              className="relative top-0 left-0 right-0 bottom-0 cursor-pointer hover:animate-pulse"
            >
              <Link href={client.url} target="blank">
                <Image
                  src={client.image}
                  alt={`Release Title: ${client.title} Artist: ${client.artist}`}
                  height="360"
                  width="360"
                />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BandCampImg;
