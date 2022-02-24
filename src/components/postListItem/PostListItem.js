import React from 'react'
import { Button } from 'reactstrap';
import  {FontAwesomeIcon}  from '@fortawesome/react-fontawesome'
import { faStar, faTrashAlt, faHeart } from '@fortawesome/free-solid-svg-icons';
import './PostListItem.css'


export default class PostListItem extends React.Component {

    render() {
	let classNames = 'post-list-item d-flex justify-content-between ';
	
	const { label, onDelete, onToggleLiked, onToggleImportant, important, like } = this.props;

	if (important) {
		classNames += ' important'
	}
	if (like) {
		classNames += ' like'
	}
	return (
		<div 
		className={classNames}>
			<span 
				className='post-label'
				onClick={onToggleLiked}
				title='Лайкнуть'>
				{label}
			</span>
			<div className='d-flex justify-content-center align-items-center '>
				<Button
					color='warning'
					outline
					type='button' 
					className='btn-star btn-sm'
					onClick={onToggleImportant}>
					<FontAwesomeIcon icon={faStar} />
				</Button>

				<Button
					color='danger'
					outline
					type='button' 
					className='btn-trash btn-sm'
					onClick={onDelete}>
					<FontAwesomeIcon icon={faTrashAlt} />
				</Button>

				<FontAwesomeIcon 
				className='fa-heart' 
				icon={faHeart} 

				/>
			</div>
		</div>
	)
  }
}

