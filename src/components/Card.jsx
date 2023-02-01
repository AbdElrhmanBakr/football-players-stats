import React from "react";

export default function Card({
  id,
  img,
  name,
  age,
  weight,
  height,
  footed,
  position,
  club,
  nationalTeam,
  birthDate,
  birthPlace,
}) {
  return (
    <div className="flex items-center mywidth m-2 md:m-3 rounded-xl shadow-lg p-3 border border-white bg-white truncate">
      <div className="rounded-xl w-1/3 h-full bg-white flex justify-center items-center">
        <img
          src={`/assets/${img}`}
          alt="Player Image"
          className="max-h-full	rounded-xl"
        />
      </div>
      <div className="w-2/3 h-full flex flex-col space-y-2 md:space-y-2.5 p-2">
        <h3 className="font-black text-gray-800 text-[17px] md:text-xl ">
          {name.toUpperCase()}
        </h3>
        <div className="flex flex-row justify-between item-center">
          <div className="bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 md:block">
            AGE: {age}
          </div>
          <div className="bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 md:block">
            FOOTED: {footed.toUpperCase()}
          </div>
        </div>
        <div className="flex justify-between item-center">
          <div className="bg-gray-200 px-1.5 md:px-3 py-1 rounded-full text-[12px] md:text-xs font-medium text-gray-800 md:block">
            HEIGHT: {height.toUpperCase()}
          </div>
          <div className="bg-gray-200 px-1.5 md:px-3 py-1 rounded-full text-[12px] md:text-xs font-medium text-gray-800 md:block">
            WEIGHT: {weight.toUpperCase()}
          </div>
        </div>
        <div className="flex flex-row justify-between item-center">
          <div className="bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 md:block">
            POSITION: {position.toUpperCase()}
          </div>
        </div>
        <div className="flex flex-row justify-between item-center">
          <div className="bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 md:block">
            CLUB: {club.toUpperCase()}
          </div>
        </div>
        <div className="flex flex-row justify-between item-center">
          <div className="bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 md:block">
            TEAM: {nationalTeam.toUpperCase()}
          </div>
        </div>
        <div className="flex flex-row justify-between item-center">
          <div className="bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 md:block">
            BIRTHDATE: {birthDate.toUpperCase()}
          </div>
        </div>
        {/* <div className="flex flex-row justify-between item-center">
          <div className="bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 md:block">
          BIRTHPLACE: {birthPlace.toUpperCase()}
          </div>
        </div> */}
        {/* <div>
          <p className="text-gray-800 font-normal">
            CLUB: {club.toUpperCase()}
          </p>
          <p className="text-gray-800 font-normal ">
            TEAM: {nationalTeam.toUpperCase()}
          </p>
          <p className="text-gray-800 font-normal ">
            BIRTHDATE: {birthDate.toUpperCase()}
          </p>
          <p className="text-gray-800 font-normal">
            BIRTHPLACE: {birthPlace.toUpperCase()}
          </p>
        </div> */}
      </div>
    </div>
  );
}
