import { useParams } from "react-router"
import gryffindor from "../images/h1.png"
import hufflepuff from "../images/h3.png"
import ravenclaw from "../images/h4.png"
import slytherin from "../images/h2.png"
import { Link } from "react-router"

function CharacterDetail({pcharactersList}) {

  const {id} = useParams()
  
 //2º URL COMPATIBLE: primero busca en el listado (pcharactersList) y, si no lo encuentra, busca en local storage
  const selectedCharacter =
  pcharactersList.find(item => item.id === id) ||
  JSON.parse(localStorage.getItem("characters") || "[]").find(item => item.id === id);


//CUANDO BUSCAS UN ID QUE NO COINCIDE CON NINGUN PERSONAJE DEL API
  if (!selectedCharacter) {
    return (
      <div className="character-detail-container">
          <h2 className="character-detail-no-matches">The Ministry of Magic cannot find this character</h2>
        <Link to="/" className="button">Go back</Link>
      </div>
    );
  }

  return (
    <>
    <h1>Character card</h1>
    <div className="character-detail-container">
      <div className="card-button">
        <Link to="/" className="button">Go back</Link>
      <div className="character-detail">
        <div className="character-detail-name-img">
          <p className="character-detail-name">{selectedCharacter.name}</p>
          <img className="character-detail-img" src={selectedCharacter.image === "" ? `https://placehold.co/237x341?text=${selectedCharacter.name}` : selectedCharacter.image } alt={`Imagen de ${selectedCharacter.name}`} />
        </div>
        <div className="props-house">
          <div className="props-house-container">
            {selectedCharacter.house === "Gryffindor" ? (
            <img className="img-house" src={gryffindor} alt="Escudo de Gryffindor" />
            ) : selectedCharacter.house === "Hufflepuff" ? (
            <img className="img-house" src={hufflepuff} alt="Escudo de Hufflepuff" />
            ) : selectedCharacter.house === "Ravenclaw" ? (
            <img className="img-house" src={ravenclaw} alt="Escudo de Ravenclaw" />
            ) : (
            <img className="img-house" src={slytherin} alt="Escudo de Slytherin" />
            )}
          </div>
            <div className="character-detail-props">
              <p><strong>Species: </strong>{selectedCharacter.species}</p>
              <p><strong>Gender: </strong>{selectedCharacter.gender}</p>
              <p><strong>Status: </strong>
                  {selectedCharacter.alive
                     ? "alive"
                    : "dead"
                  }                    
              </p>
              <p><strong>House: </strong>
                  {selectedCharacter.house === ""
                    ? "unspecified"
                    : selectedCharacter.house
                  }
              </p>
              <p><strong>Patronus: </strong>
                  {selectedCharacter.patronus === ""
                    ? "unspecified"
                    : selectedCharacter.patronus
                   }
              </p>
              <p><strong>Alternative names: </strong>
                  {selectedCharacter.alternate_names.length === 0
                    ? "none"
                    : selectedCharacter.alternate_names.join(", ")
                    }
              </p>    
            </div> 
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default CharacterDetail