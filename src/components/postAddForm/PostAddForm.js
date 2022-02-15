import React from 'react'
import { Input, Button } from 'reactstrap'
import './PostAddForm.css'

export default function PostAddForm() {
  return (
    <form className='post-add-form d-flex justify-content-between'>
        <Input
            bsSize='lg'
            className='post-add-form-input'
            type='text'
            placeholder='О чем вы думаете сейчас?'
         />
        <Button
            color='success'
            outline
            type='submit'
            className='btn'
        >Добавить</Button>
    </form>  
  )
}
