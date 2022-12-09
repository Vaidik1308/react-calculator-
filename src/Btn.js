import React from 'react'

const Btn = ({value,displayNum}) => {
  return (
    <button
      onClick={() => displayNum(value)} 
      className='numBtn'
    >
      {value}
    </button>
  )
}

export default Btn