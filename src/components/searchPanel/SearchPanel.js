import React from 'react'
import './SearchPanel.css'

export default function SearchPanel() {
  return (
    <input
        className='form-control search-input'
        type='text'
        placeholder='Поиск записи'
     />
  )
}
