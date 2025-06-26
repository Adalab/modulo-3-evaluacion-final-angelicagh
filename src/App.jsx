import './styles/App.scss'
import Header from './components/Header'
import CharactersList from './components/CharactersList'
import Filters from './components/Filters'
import CharacterDetail from './components/CharacterDetail'
import { useEffect, useState } from 'react'
import CharacterCard from './components/CharacterCard'
import { Routes, Route } from 'react-router'


function App() {

  const [charactersList, setCharactersList] = useState([])
  const [searchName, setSearchName] = useState("")
  const [searchHouse, setSearchHouse] = useState("")

  useEffect(() => {
    fetch("https://hp-api.onrender.com/api/characters")
      .then(response => response.json())
      .then(data => {
          setCharactersList(data)
      })
  }, [])

  const house = [... new Set (charactersList
    .map(item => item.house)
    .filter(item => item !== "")
    )]
    .sort() //ordena por orden alfabetico
  
  


  const filterCharacters = charactersList
    .filter(item => item.name.toLowerCase().includes(searchName.toLowerCase()))
    .filter(item => item.house === searchHouse || searchHouse === "")
  
  return (
    <>
    <Header/>
    <Filters psearchName={searchName} psetSearchName={setSearchName} phouse={house} psetSearchHouse={setSearchHouse}/>
    <CharactersList pcharactersList={filterCharacters}/>
    <CharacterDetail/>

    <Routes>

      <Route path="/detail/:id" element={<CharacterDetail/>}></Route>

    </Routes>
      
    </>
  )
}

export default App
