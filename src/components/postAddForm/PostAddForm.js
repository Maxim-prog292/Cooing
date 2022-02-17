import React from 'react'
import { Input, Button } from 'reactstrap'
import './PostAddForm.css'

export default function PostAddForm({ onAddPost }) {
  return (
    <div className='post-add-form d-flex justify-content-between'>
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
            onClick={ () => onAddPost('label')}
        >Добавить</Button>
    </div>  
  )
}
