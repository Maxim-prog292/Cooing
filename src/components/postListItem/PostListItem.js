import React from 'react'
import { Button } from 'reactstrap';
import  {FontAwesomeIcon}  from '@fortawesome/react-fontawesome'
import { faStar, faTrashAlt, faHeart } from '@fortawesome/free-solid-svg-icons';
import './PostListItem.css'


export default class PostListItem extends React.Component {
	constructor(props) {
		super(props);
		this.props = props;
		this.state = {
			important: false,
			liked: false
		}
		this.itsImportant = this.itsImportant.bind(this);
		this.itsLike = this.itsLike.bind(this);
	}
	

	itsImportant(){
		this.setState(({important}) => ({
			important: !important
		}))
	}
	itsLike(e) {
		const t = e.target;
		if (t.classList.contains('post-list-item')) {
			this.setState(({liked}) => ({
				liked: !liked
			}))
		}
	}

    render() {
	let classNames = 'post-list-item d-flex justify-content-between';

	if (this.state.important) {
		classNames += ' important'
	}
	if (this.state.liked) {
		classNames += ' like'
	}
	return (
		<div className={classNames} onClick={this.itsLike}>
			<span className='post-label'>
				{this.props.label}
			</span>
			<div className='d-flex justify-content-center align-items-center '>
				<Button
				color='warning'
				outline
				type='button' 
				className='btn-star btn-sm'
				onClick={this.itsImportant}>
					<FontAwesomeIcon icon={faStar} />
				</Button>
				<Button
				color='danger'
				outline
				type='button' 
				className='btn-trash btn-sm'
				onClick={this.props.onDelete}>
					<FontAwesomeIcon icon={faTrashAlt} />
				</Button>
				<FontAwesomeIcon className='fa-heart' icon={faHeart} />
			</div>
		</div>
	)
  }
}

