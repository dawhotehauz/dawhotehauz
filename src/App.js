// src/App.js
import React from 'react';
import styled from 'styled-components';
import whiteHouseImage from './hauz-removebg-preview.png'; // Adjust the path to where you have saved your image

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #e6e6fa;
  color: #2a2a2a;
  padding: 20px;
  font-family: 'Comic Sans MS', 'Comic Sans', cursive;
`;

const DescriptionBox = styled.div`
  background-color: #ffffff;
  border: 3px solid #000080;
  border-radius: 15px;
  padding: 30px;
  margin: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  width: 80%;
  max-width: 800px;
  text-align: center;
`;

const WhiteHouseImage = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  color: #0047ab;
  margin-bottom: 20px;
`;

const Description = styled.p`
  color: #444444;
  text-align: justify;
  text-justify: inter-word;
  font-size: 18px;
  line-height: 1.6;
`;

const ActionButton = styled.a`
  display: inline-block;
  background-color: #007bff;
  color: #ffffff;
  padding: 12px 24px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  margin-top: 20px;
  transition: background-color 0.2s ease-in-out, transform 0.2s ease;

  &:hover {
    background-color: #0056b3;
    transform: translateY(-2px);
  }
`;

function App() {
  return (
    <Container>
      <DescriptionBox>
        <WhiteHouseImage src={whiteHouseImage} alt="Da White Hause" />
        <Title>Da White Hause - $HAUZ</Title>
        <Description>
          "Da White Hause," symbolized as $HAUZ, is da gleamin' emblem of freetum, da grand mansion of Amuriku's valor. Perched boldly in da heart of Washin'n, it serves as a beacon for all. $HAUZ is a jestful homage to da illustrious domicile where monumental decisions simmer. As a coin of jest, jest, and unity, it encapsulates da memetic core of da nation's dwelling, the jovial aspect of Amuriku's governance. Rally behind $HAUZ for a guffaw, a shout, and to empower da meme dream!
        </Description>
        <ActionButton href="https://linkToYourTokenInfoOrMarketplace" target="_blank" rel="noopener noreferrer">
          Learn More About $HAUZ
        </ActionButton>
      </DescriptionBox>
    </Container>
  );
}

export default App;
