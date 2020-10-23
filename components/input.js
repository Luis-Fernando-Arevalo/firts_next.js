import React from "react";

const input = ({nomInput,id,tipo,placeHolder}) => (
  <div className="mb-4">
    <label
      className="block text-gray-700 text-sm font-bold mb-2"
      htmlFor="email"
    >
      {nomInput}
    </label>
    <input
    
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id={id}
      type={tipo}
      placeholder={placeHolder}     
    />
  </div>
);

export default input;
