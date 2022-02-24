import React from 'react'
import { Button } from 'reactstrap'


export default class PostStatusFilter extends React.Component {
  constructor(props) {
    super(props);
    this.buttons = [
      {name: 'all', label: 'Все'},
      {name: 'like', label: 'Понравились'}
    ]
  }
  render() {
    const buttons = this.buttons.map(({name, label}) => {
      const active = this.props.filter === name;
      const clas = active ? 'btn-info' : 'btn-outline-secondary';
      return (
        <button key={name} className={`btn ${clas}`} onClick={() => this.props.onFilterSelect(name)}>{label}</button>
      )
    })
    return (
      <div className='btn-group'>
          {buttons}
      </div>
    )
  }
  
}
