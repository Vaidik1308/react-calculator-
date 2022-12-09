import React from 'react';
import {FaTimes} from 'react-icons/fa';

const Multiply = ({sign,value}) => {
  return (
    <button onClick={() => sign(value)}><FaTimes/></button>
  )
}

export default Multiply