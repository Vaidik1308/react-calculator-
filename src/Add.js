import React from 'react';
import {FaPlus} from 'react-icons/fa';

const Add = ({sign,value}) => {
  return (
    <button onClick={() => sign(value)}><FaPlus/></button>
  )
}

export default Add