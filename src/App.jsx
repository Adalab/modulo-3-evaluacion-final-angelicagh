import './styles/App.scss'
import Header from './components/Header'
import CharactersList from './components/CharactersList'
import Filters from './components/Filters'
import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router'
import CharacterDetail from './components/CharacterDetail'





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

    

    <Header />
    
   {/*  RUTAS */}

   <Routes>

      <Route path="/" element={
        <>
        <Filters psearchName={searchName} psetSearchName={setSearchName} phouse={house} psetSearchHouse={setSearchHouse}/>
        <CharactersList pcharactersList={filterCharacters} />
        </>
      }></Route>

        
      <Route  path="/detail/:id" element={<CharacterDetail pcharactersList={filterCharacters}/>}></Route>

      <Route path="*" element={<h1>Página no encontrada</h1>}></Route> {/* NO SE MUESTRA */}

   </Routes>


    </>
  )
}

export default App
