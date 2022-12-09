import React from 'react';
import {FaEquals} from "react-icons/fa";

const Equalsto = ({final,previousNumber}) => {
  return (
    <button className='equalTo' onClick={() => final(previousNumber)}><FaEquals/></button>
  )
}

export default Equalsto;
