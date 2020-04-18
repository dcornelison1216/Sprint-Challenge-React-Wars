// Write your Character component here
import React from 'react';
import styled from 'styled-components';
import { Card, Col } from "reactstrap";

const Name = styled.h2`
margin: .8rem auto;
color: #443e3e;
text-shadow: 1px 1px 5px #fff;
`;

const Gender = styled.p`
margin: .5rem 0rem;
text-align: center;
text-transform: capitalize;
text-shadow: 1px 1px 5px #fff;
`;

const Details = styled.p`
margin: .5rem 0rem;
text-align: center;
text-transform: capitalize;
text-shadow: 1px 1px 5px #fff;
`;

const CharCard = props => {
  return (
    <Col>
      <Card className="char-card">
        <Name>{props.name}</Name>
        <Gender>{props.gender}</Gender>
        <Details>Height: {props.height} m</Details>
        <Details>Mass: {props.mass} kg</Details>
        <Details>Hair Color: {props.hair_color}</Details>
        <Details>Skin Color: {props.skin_color}</Details>
        <Details>Eye Color: {props.eye_color}</Details>
        <Details>Birth Year: {props.birth_year}</Details>
      </Card>
    </Col>
  );
};

export default CharCard;
