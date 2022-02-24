import React from 'react'
import { ListGroup } from 'reactstrap';
import PostListItem from '../postListItem'
import './PostList.css'

export default function PostList({data, onDelete, onToggleLiked, onToggleImportant}) {

  let postListArray = data.map(({label, important, like, id}) => {
    return (
      <li className='list-group-item' key={id}>
        <PostListItem 
          label={label} 
          onDelete={() => onDelete(id)}  
          onToggleLiked={() => onToggleLiked(id)}
          onToggleImportant={() => onToggleImportant(id)}
          important={important} 
          like={like} 
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
