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

const NextButton = styled.button`
width: auto;
margin: auto 0;
position: absolute;
top: 50%;
right: 1%;
`;

const PreviousButton = styled.button`
width: auto;
margin: auto 0;
position: absolute;
top: 50%;
left: 1%;
`;

export default function CharGrid() {
  const [charData, setCharData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    axios
    .get(`https://swapi.py4e.com/api/people/?page=${currentPage}`)
    .then(response => {
      setCharData(response.data.results);
    })
    .catch(error => {
      console.log("The data was not returned", error);
    });
  }, [currentPage]);

  return (
    <Container>
      <PreviousButton onClick={() => {
        if(currentPage == 1) {
          setCurrentPage(9)
        } else {
          setCurrentPage(currentPage - 1)
        }
        }}>Previous</PreviousButton>
      {charData.map((char, index) => {
        return <Character
        name={char.name}
        key={index}
        height={char.height}
        mass={char.mass}
        gender={char.gender}
        hair_color={char.hair_color}
        skin_color={char.skin_color}
        eye_color={char.eye_color}
        birth_year={char.birth_year} />
      })}
      <NextButton onClick={() => {
        if(currentPage == 9) {
          setCurrentPage(1)
        } else {
          setCurrentPage(currentPage + 1)
        }
      }}>Next</NextButton>
    </Container>
  );
}
