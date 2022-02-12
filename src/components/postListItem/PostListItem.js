import React from 'react'
import  {FontAwesomeIcon}  from '@fortawesome/react-fontawesome'
import { faStar, faTrashAlt, faHeart } from '@fortawesome/free-solid-svg-icons';
import './PostListItem.css'


export default function PostListItem() {
	return (
		<li className='post-list-item d-flex justify-content-between'>
			<span className='post-list-item-label'>
				Hello World
			</span>
			<div className='d-flex justify-content-center align-items-center '>
				<button
				type='button' 
				className='btn-star btn-sm'>
					<FontAwesomeIcon icon={faStar} />
				</button>
				<button
				type='button' 
				className='btn-trash btn-sm'>
					<FontAwesomeIcon icon={faTrashAlt} />
				</button>
				<FontAwesomeIcon className='fa-heart' icon={faHeart} />
			</div>
		</li>
	)
}
