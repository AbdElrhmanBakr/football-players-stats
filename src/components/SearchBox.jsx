import React from "react";

export default function SearchBox({ playerNameChange }) {
  return (
    <div className="flex justify-center">
      <div className="m-3 w-2/3 md:w-1/3">
        <input
          type="text"
          className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
          id="exampleText0"
          placeholder="Player Name | Club Name | Country Name"
          onChange={playerNameChange}
        />
      </div>
    </div>
  );
}
