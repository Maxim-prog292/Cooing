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


export default function App() {

  const data = [
    {label: 'Вышел на прогулку',
     important: false,
     id: 'e34r'},
    {label: 'Выпил кофе с другом',
     important: true,
     id: 'ergrweq'},
    {label: 'Пришел домой и стал учить React',
     important: true,
     id: 'gfe53err'},
     {label: 'Немного отдохнул',
     important: false,
     id: 't4gerr'},
     {label: 'И продолжил',
     important: true,
     id: 'fnregtyu'},
  ]

  return (
      <AppBlock className="app">
          <AppHeader />
          <div className="search-panel d-flex">
            <SearchPanel />
            <PostStatusFilter />
          </div>
          <PostList data={data}/>
          <PostAddForm />
      </AppBlock>
    
  )
}
