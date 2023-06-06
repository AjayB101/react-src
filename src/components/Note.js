import React from 'react'
import { AiFillDelete } from 'react-icons/ai';

const Note = () => {
  return (
    <div className='note' >
        <span>This is a notes</span>
        <div className='note-footer' >
          <small>11/5/89</small>
          <AiFillDelete />
        </div>
    </div>
  )
}

export default Note