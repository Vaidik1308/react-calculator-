import React from 'react'
import {FaDivide} from 'react-icons/fa'

const Divide = ({sign,value}) => {
  return (
    <button type='button' onClick={() => sign(value) }>
      <FaDivide/>
    </button>
  )
}

export default Divide