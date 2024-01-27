import React from 'react';

const Button = ({ buttonColour, text, textColour}) => {

  return (
    <button className={`px-8  py-2 whitespace-nowrap  rounded-[20px] ${buttonColour} ${textColour}`}>
      {text}
    </button>
  );
};

export default Button;
