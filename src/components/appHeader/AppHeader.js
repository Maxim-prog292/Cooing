import React from 'react'
import styled from "styled-components";

const Header = styled.div`
  width: inherit;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  h1 {
    font-size: 26px;
  }
  h2 {
    font-size: 1.2rem;
    color: grey;
  }
`;


export default function AppHeader() {
  return (
    <Header>
        <h1>Maksim Magomedov</h1>
        <h2>5 записей | понравилось 0</h2>
    </Header>
  )
}
