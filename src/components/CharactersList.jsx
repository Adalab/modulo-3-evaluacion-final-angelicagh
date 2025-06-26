

function CharactersList({pcharactersList}) {
  
  return (
    <>
   <h1>Listado de personajes</h1>


   

   <ul>
    {
      pcharactersList.map(item => {
        return (
          <li key={item.id}>
            <img src={item.image==="" ? `https://placehold.co/237x341?text=${item.name}`  : item.image} alt={`Imagen de ${item.name}`} />
            <p>{item.name}</p>
            <p>{item.species}</p>
          </li>
        )
      })
    }
   </ul>
      
    </>
  )
}

export default CharactersList











 