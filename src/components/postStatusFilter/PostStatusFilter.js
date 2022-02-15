import React from 'react'
import { Button } from 'reactstrap'


export default function PostStatusFilter() {
  return (
    <div className='btn-group'>
        <Button color='info' outline >Все</Button>
        <Button color='secondary' outline>Понравились</Button>
    </div>
  )
}
