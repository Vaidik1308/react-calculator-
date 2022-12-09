import React from 'react';
import {FaUndoAlt} from 'react-icons/fa';

const Clear = ({reset}) => {
  return (
    <button onClick={()=> reset()}><FaUndoAlt/></button>
  )
}

export default Clear