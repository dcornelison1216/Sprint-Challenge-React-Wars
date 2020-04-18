import React from 'react';
import './App.css';
import CharGrid from ''./components/CharGrid';
import styled from 'styled-components';

const Header = styled.h1`
color: #443e3e;
text-shadow: 1px 1px 5px #fff;
`;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <Header>Characters</Header>
      <CharGrid />
    </div>
  );
}

export default App;
