import React from 'react'
import './PostAddForm.css'

export default function PostAddForm() {
  return (
    <form className='post-add-form d-flex justify-content-between'>
        <input
            className='form-control post-add-form-input'
            type='text'
            placeholder='О чем вы думаете сейчас?'
         />
        <button
            type='submit'
            className='btn btn-outline-secondary'
        >Добавить</button>
    </form>  
  )
}
