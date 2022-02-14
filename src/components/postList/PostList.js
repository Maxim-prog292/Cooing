import React from 'react'
import PostListItem from '../postListItem'
import './PostList.css'

export default function PostList({data}) {

  let postListArray = data.map(({label, important, id}) => {
    return (
      <li className='list-group-item' key={id}>
        <PostListItem label={label} important={important} />
      </li>
    )
    
  });
  

  return (
    
    <ul className='app-list list-group'>
        {postListArray}

    </ul>
  )
}
