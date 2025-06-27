import { Link } from "react-router"

Link

function CharacterCard({pitem}) {
  return (
    <>

    
     <li >
      <Link to={`/detail/${pitem.id}`}> Ver más
      <img src={pitem.image==="" ? `https://placehold.co/237x341?text=${pitem.name}`  : pitem.image} alt={`Imagen de ${pitem.name}`} />
      <p>{pitem.name}</p>
      <p>{pitem.species}</p>
      </Link>
    </li>
    
   
  

    
    
    
    </>
  )
}

export default CharacterCard