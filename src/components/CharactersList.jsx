import CharacterCard from "./CharacterCard"

function CharactersList({pcharactersList}) {
  
  return (
    <>
   <h1>Listado de personajes</h1>


   
    
   <ul>
    {
      pcharactersList.map(item => {
        return (
          
          <CharacterCard key={item.id} pitem={item}/>
          
        )
      })
    }
   </ul>
   
   
      
    </>
  )
}

export default CharactersList











 