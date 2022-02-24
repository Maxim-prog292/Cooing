import React from 'react'
import { Input } from 'reactstrap'
import './SearchPanel.css'

export default class SearchPanel extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      term: ''
    };
    this.onUpdateSearch = this.onUpdateSearch.bind(this);
  }
  onUpdateSearch(e){
    const term = e.target.value;
    this.setState({term});
    this.props.onUpdateSearch(term);
  }
  render() {
    return (
      <Input
          bsSize='lg'
          className='search-input'
          type='text'
          placeholder='Поиск записи'
          onChange={this.onUpdateSearch}
       />
    )
  }
  
}
