import React from 'react'
import { Input, Button } from 'reactstrap'
import './PostAddForm.css'

export default class PostAddForm extends React.Component  {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      value: ''
    }
    this.onValueChange = this.onValueChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onValueChange(e) {
    
    this.setState({
      value: e.target.value
    })
  }
  onSubmit(e) {
    e.preventDefault()
    this.props.onAddPost(this.state.value)
    this.setState({
      value: ''
    })
  }
  render() {
    return (
      <form 
        className='post-add-form d-flex justify-content-between'
        onSubmit={this.onSubmit}>
          <Input
              bsSize='lg'
              className='post-add-form-input'
              type='text'
              placeholder='О чем вы думаете сейчас?'
              onChange={this.onValueChange}
              value={this.state.value}
           />
          <Button
              color='success'
              outline
              type='submit'
              className='btn'
          >Добавить</Button>
      </form>  
    )
  }
  
}
