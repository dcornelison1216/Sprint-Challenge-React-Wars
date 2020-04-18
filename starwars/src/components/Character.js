// Write your Character component here
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import CharCard from './CharCard';

const Container = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-around;
`;

export default function CharGrid() {
  const [photoData, setPhotoData] = useState([]);

  useEffect(() => {
    axios
    .get("https://swapi.py4e.com/api/people/")
    .then(response => {
      setPhotoData(response.data.results);
      console.log(response.data.results);
    })
    .catch(error => {
      console.log("The data was not returned", error);
    });
  }, []);

  return (
    <Container>
      {photoData.map((char, index) => {
        return <CharCard
        name={char.name}
        key={index}
        height={char.height}
        mass={char.mass}
        gender={char.gender} />
      })}
    </Container>
  );
}
