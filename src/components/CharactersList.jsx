import CharacterCard from "./CharacterCard"

function CharactersList({pcharactersList} ) {
  
  return (
    <>
     
    {/* el ternario es para decir que si no hay ningun personaje en la lista, es decir, que la lista esta vacia, se muestre el mensaje, y si si que hay, se hace un bucle y se muestran los personajes que coincidan */}
    <div className="no-matches-container">
      <ul>
      {
        pcharactersList.length === 0 //
          ? <p className="no-matches">We've searched all over Hogwarts, Diagon Alley, and even the Forbidden Forest, but we couldn't find any character with that name</p>
          : pcharactersList.map(item => {
            return (
              <CharacterCard key={item.id} pitem={item}/>
            )
          })  
      }
      </ul>
   </div> 
  </>
  )
}

export default CharactersList











 