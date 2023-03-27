import { useEffect, useState } from 'react';
import './App.css';
import axios from axios;

const App = () => {

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get('https://swapi.dev/api/people')
    .then((res) => {
      console.log(res.data)
    })
    .catch((err) => {
      console.log(err, "the requested data was not returned")
    })
  }, [])

  return (
    <></>
  )
}