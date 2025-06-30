import { Link } from "react-router"

Link

function CharacterCard({pitem}) {
  return (
    <> 
    <li >
      <Link className="link" to={`/detail/${pitem.id}`}>
        <img className="character-card-img" src={pitem.image==="" ? `https://placehold.co/237x341?text=${pitem.name}`  : pitem.image} alt={`Imagen de ${pitem.name}`} />
        <div className="name-species-container">
          <p className="character-card-name">{pitem.name}</p>
          <p className="character-card-species">{pitem.species}</p>
        </div>
      </Link>
    </li> 
    </>
  )
}

export default CharacterCard