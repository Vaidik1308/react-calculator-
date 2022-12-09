import React from 'react'
import {FaBackspace} from 'react-icons/fa';

const Remove = ({number,setNumber,remove}) => {
  return (
    <button
      type='button' 
      onClick={() => remove()}>
      <FaBackspace/>
    </button>
  )
}

export default Remove