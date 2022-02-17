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
         id: 1},
        {label: 'Выпил кофе с другом',
         important: false,
         id: 2},
        {label: 'Пришел домой и стал учить React',
         important: false,
         id: 3},
         {label: 'Немного отдохнул',
         important: false,
         id: 4},
         {label: 'И продолжил',
         important: false,
         id: 5},
      ]
    };
    this.deleteItem = this.deleteItem.bind(this);
    this.addPost = this.addPost.bind(this);
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

  
  render() { 
    return (
      <AppBlock className="app">
          <AppHeader />
          <div className="search-panel d-flex">
            <SearchPanel />
            <PostStatusFilter />
          </div>
          <PostList 
            data={this.state.data}
            onDelete={ this.deleteItem }
            />
          <PostAddForm
            onAddPost={ this.addPost } 
            />
      </AppBlock>
    
  )
  }
  
}
