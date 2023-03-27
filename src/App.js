import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import styled from 'styled-components';
import CharacterCard from './components/Character';

const Header = styled.div`
  background: #90bdbf;
  padding-top: 1%;
  padding-bottom: 1%;
  margin-top: 1%;
  margin-bottom: 1%;
  border-radius: 75px;
`;

const HeaderTitle = styled.h1`
  text-align: center;
  color: #443e3e;
  text-shadow: 1px 1px 5px #fff;
  font-size: 5rem;
`;
const Container = styled.div`
  width: 80vw;
  margin: 0 auto;
`;

const Row = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
`;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters, setCharacters] = useState([]);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios
      .get('https://swapi.dev/api/people')
      .then((res) => {
        setCharacters(res.data.results);
      })
      .catch((err) => {
        console.log(err, 'the requested data was not returned');
      });
  }, []);

  return (
    <Container>
      <Header>
        <HeaderTitle> Star Wars Characters</HeaderTitle>
      </Header>
      <Row>
        {characters.map((char, index) => {
          return index % 2 === 0 ? (
            <CharacterCard
              key={index}
              characterName={char.name}
              characterHeight={char.height}
              characterEyeColor={char.eye_color}
              characterHairColor={char.hair_color}
              characterBirthdate={char.birth_year}
              style={{ flexGrow: '1' }}
            />
          ) : (
            <CharacterCard
              key={index}
              characterName={char.name}
              characterHeight={char.height}
              characterEyeColor={char.eye_color}
              characterHairColor={char.hair_color}
              characterBirthdate={char.birth_year}
              style={{ flexGrow: '2' }}
            />
          );
        })}
      </Row>
    </Container>
  );
};

export default App;
