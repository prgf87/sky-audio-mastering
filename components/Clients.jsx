import React from 'react';

import BandcampImg from '../components/BandCampImg';

const Clients = (clients) => {
  return (
    <div>
      <h1 className="flex justify-center items-center text-3xl p-4 drop-shadow-2xl">
        Recent Clients
      </h1>
      <div>
        <BandcampImg src={clients} />
      </div>
      <div className="flex justify-center items-center pt-6">
        <p className="hover:text-white-1000/70 hover:px-6 hover:animate-pulse hover:scale-105 transition">
          <a href="https://www.krisamadhi.com/clients/" target="blank">
            <button className="px-8 py-2 border text-xl ">
              Click here for more clients
            </button>
          </a>
        </p>
      </div>
    </div>
  );
};

export default Clients;
