import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { CharacterCard } from './components/Character';

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
    <div className="App">
      {characters.map((char, index) => (
        <CharacterCard
          key={index}
          characterName={char.name}
          characterHeight={char.height}
          characterEyeColor={char.eye_color}
          characterHairColor={char.hair_color}
          characterBirthdate={char.birth_year}
        />
      ))}
    </div>
  );
};

export default App;
