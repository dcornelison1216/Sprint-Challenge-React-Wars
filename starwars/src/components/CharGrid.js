import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Character from './Character';

const Container = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-around;
`;

export default function CharGrid() {
  const [charData, setCharData] = useState([]);

  useEffect(() => {
    axios
    .get("https://swapi.py4e.com/api/people/")
    .then(response => {
      setCharData(response.data.results);
      console.log(response.data.results);
    })
    .catch(error => {
      console.log("The data was not returned", error);
    });
  }, []);

  return (
    <Container>
      {charData.map((char, index) => {
        return <Character
        name={char.name}
        key={index}
        height={char.height}
        mass={char.mass}
        gender={char.gender} />
      })}
    </Container>
  );
}
