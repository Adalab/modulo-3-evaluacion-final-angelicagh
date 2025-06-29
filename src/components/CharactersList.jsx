import CharacterCard from "./CharacterCard"

function CharactersList({pcharactersList} ) {

 
  
  return (
    <>
     
    {/* el ternario es para decir que si no hay ningun personaje en la lista, es decir, que la lista esta vacia, se muestre el mensaje, y si si que hay, se hace un bucle y se muestran los personajes que coincidan */}
   <ul>
    {
      pcharactersList.length === 0 //
      ? <p>No hay personajes que coincidan con tu búsqueda</p>
      :
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











 