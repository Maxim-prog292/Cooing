import React from 'react'
import PostListItem from '../postListItem'
import './PostList.css'

export default function PostList() {
  return (
    <ul className='app-list list-group'>
        <PostListItem />
        <PostListItem />
        <PostListItem />

    </ul>
  )
}
