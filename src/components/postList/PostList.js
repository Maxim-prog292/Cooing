import React from 'react'
import { ListGroup } from 'reactstrap';
import PostListItem from '../postListItem'
import './PostList.css'

export default function PostList({data, onDelete}) {

  let postListArray = data.map(({label, important, id}) => {
    return (
      <li className='list-group-item' key={id}>
        <PostListItem 
          label={label} 
          important={important} 
          onDelete={() => onDelete(id)}  
          />
      </li>
    )
    
  });
  

  return (
    
    <ListGroup className='app-list '>
        {postListArray}
    </ListGroup>
  )
}
