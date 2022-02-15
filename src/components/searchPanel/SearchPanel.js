import React from 'react'
import { Input } from 'reactstrap'
import './SearchPanel.css'

export default function SearchPanel() {
  return (
    <Input
        bsSize='lg'
        className='search-input'
        type='text'
        placeholder='Поиск записи'
     />
  )
}
