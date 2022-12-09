import React from 'react';
import {FaMinus} from 'react-icons/fa';

const Subtract = ({sign,value}) => {
  return (
    <button onClick={() => sign(value)}>
      <FaMinus/>
    </button>
  )
}

export default Subtract