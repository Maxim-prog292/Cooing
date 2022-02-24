import React from "react";
import AppHeader from "../appHeader";
import SearchPanel from "../searchPanel";
import PostStatusFilter from "../postStatusFilter";
import PostList from "../postList";
import PostAddForm from "../postAddForm";
import styled from "styled-components";

const AppBlock = styled.div`
  margin: 0 auto;
  width: 1000px;
`;


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      data: [
        {label: 'Вышел на прогулку',
         important: false,
         like: false,
         id: 1},
        {label: 'Выпил кофе с другом',
         important: false,
         like: false,
         id: 2},
        {label: 'Пришел домой и стал учить React',
         important: false,
         like: false,
         id: 3},
         {label: 'Немного отдохнул',
         important: false,
         like: false,
         id: 4},
         {label: 'И продолжил',
         important: false,
         like: false,
         id: 5},
      ],
      term: '',
      filter: 'all'
    };
    this.deleteItem = this.deleteItem.bind(this);
    this.addPost = this.addPost.bind(this);
    this.onToggleImportant = this.onToggleImportant.bind(this);
    this.onToggleLiked = this.onToggleLiked.bind(this);
    this.onUpdateSearch = this.onUpdateSearch.bind(this);
    this.onFilterSelect = this.onFilterSelect.bind(this);
    this.id = 5;
  }
  deleteItem(id) {
    this.setState(({data}) => {
      const index = data.findIndex( item => item.id === id);

      const newArray = [...data.slice(0, index), ...data.slice(index + 1)];

      return (
        {data: newArray}
        )
    })
  }
  addPost(label) {
    
    const newPost = {
      label: label,
      important: false,
      id: ++this.id
    };

    this.setState(({ data }) => {
      const newArray = [...data, newPost];
      return (
        {data: newArray}
      )
    })
  }
  onToggleImportant(id) {
    this.setState(({data}) => {
      const index = data.findIndex( item => item.id === id);

      const oldItem = data[index];
      const newItem = {...oldItem, important: !oldItem.important};

      const newArray = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
      
      return (
        {data: newArray}
      )
    })
  }
  onToggleLiked(id) {
    this.setState(({data}) => {
      const index = data.findIndex( item => item.id === id);

      const oldItem = data[index];
      const newItem = {...oldItem, like: !oldItem.like};

      const newArray = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
      
      return (
        {data: newArray}
      )
    })
  }
  searchPost(item, term) {
    if (term.length === 0) {
      return item;
    }

    return item.filter(item => {
      return item.label.indexOf(term) > -1;
    })
  }
  onUpdateSearch(term){
    this.setState({term})
  }
  filterPost(items, filter) {
    if (filter === 'like') {
      return items.filter(item => item.like)
    } else {
      return items
    }
  }
  onFilterSelect(filter){
    
    this.setState({filter: filter})
  }
  
  render() { 
    const {data, term, filter} = this.state;

    const visiblePost = this.filterPost(this.searchPost(data, term), filter);

    const liked = data.filter(item => item.like).length;
    const allPost = data.length; 

    return (
      <AppBlock className="app">
          <AppHeader 
            liked={liked}
            allPost={allPost}
          />
          <div className="search-panel d-flex">
            <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
            <PostStatusFilter 
              filter={filter}
              onFilterSelect={this.onFilterSelect}
            />
          </div>
          <PostList 
            data={visiblePost}
            onDelete={ this.deleteItem }
            onToggleImportant={this.onToggleImportant}
            onToggleLiked={this.onToggleLiked}
            />
          <PostAddForm
            onAddPost={ this.addPost } 
            />
      </AppBlock>
    
  )
  }
  
}
