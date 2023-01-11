import axios from 'axios'
import { useEffect, useState } from 'react'

function App() {

  const [list, setList] = useState([]);

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon').then((response) => {
      setList(response.data.results);
      console.log(response)
    });
  }, [])

  return (
    <>
      <h3>Desafio Pokemon</h3>
      <h1>Consumir api Pokemon</h1>
      <hr />
      {list.map((item) => (
        <Pokemon data={item}></Pokemon>
      ))}
    </>
  )
}

const Pokemon = ({ data }) => {

  const [details, setDetails] = useState(null);

  useEffect(() => {
    axios.get(data.url).then((response) => {
      setDetails(response.data);
      console.log(details)
    })
  }, [])

  if (details === null) {
    return (
      <div>
        <span>-</span>
      </div>
    )
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>

      <img src={details.sprites.front_default} style={{ width: 30 }} />

      <span>{details.name}</span>
    </div>
  )
}

export default App
