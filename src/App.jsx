import './styles/App.scss'
import Header from './components/Header'
import CharactersList from './components/CharactersList'
import Filters from './components/Filters'
import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router'
import CharacterDetail from './components/CharacterDetail'
import { Link } from 'react-router'

function App() {

  const [charactersList, setCharactersList] = useState([])
  const [searchName, setSearchName] = useState("")
  const [searchHouse, setSearchHouse] = useState("")
  const [searchGender, setSearchGender] = useState("")

 useEffect(() => {
    fetch("https://hp-api.onrender.com/api/characters")
      .then(response => response.json())
      .then(data => {
          setCharactersList(data);
          localStorage.setItem("characters", JSON.stringify(data)); //1º URL COMPATIBLE: guardar en el local storage
      })
  }, [])

  const house = [... new Set (charactersList
    .map(item => item.house)
    .filter(item => item !== "")
    )]
    .sort() //ordena por orden alfabetico

    const gender = [...new Set (charactersList
      .map(item => item.gender)
      .filter(item => item !== "")
      )]
      .sort()
    
  
  const filterCharacters = charactersList
    .filter(item => item.name.toLowerCase().includes(searchName.toLowerCase()))
    .filter(item => item.house === searchHouse || searchHouse === "")
    .filter(item => item.gender === searchGender || searchGender === "")

    

  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={
        <>
        <Filters psearchName={searchName} psetSearchName={setSearchName} phouse={house} psearchHouse={searchHouse} psetSearchHouse={setSearchHouse} psearchGender={searchGender} psetSearchGender={setSearchGender} pgender={gender}/>
        <CharactersList pcharactersList={filterCharacters} />
        </>
      }></Route>        
      <Route  path="/detail/:id" element={<CharacterDetail pcharactersList={filterCharacters}/>}></Route>
      <Route path="*" 
      element={
        <div>
          <h2 className="page-not-found">Spell failed!</h2>
          <p className="page-not-found-2">Sorry, but this page isn't even on the Marauder’s Map</p>
          <p className="page-not-found-2">Perhaps a Confundus Charm brought you here...</p>
          <div className="card-button go-back">
          <Link to="/" className="button">Go back</Link>
          </div>
        </div>
        }>
      </Route> 
    </Routes>
    </>
  )
}

export default App



