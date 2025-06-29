import { useParams } from "react-router"
import gryffindor from "../images/gryf.png"
import hufflepuff from "../images/huff.png"
import ravenclaw from "../images/rav.png"
import slytherin from "../images/sly.png"

function DetailContact({pcharactersList}) {

    const {id} = useParams()
    

    const selectedCharacter = pcharactersList.find(item => item.id === id)




  return (
    <>
    
    <h1>Tarjeta del personaje</h1>
    
  <div className="character-detail-container">
 <div className="character-detail">
  <div className="character-detail-name-img">
    <p className="character-detail-name">{selectedCharacter.name}</p>
    <img className="character-detail-img" src={selectedCharacter.image === "" ? `https://placehold.co/237x341?text=${selectedCharacter.name}` : selectedCharacter.image } alt={`Imagen de ${selectedCharacter.name}`} />
  </div>


<div className="props-house">
    <div>
      <div className="props-house-container">
      {selectedCharacter.house === "Gryffindor" ? (
        <img className="img-escudo" src={gryffindor} alt="Escudo de Gryffindor" />
          ) : selectedCharacter.house === "Hufflepuff" ? (
          <img className="img-escudo" src={hufflepuff} alt="Escudo de Hufflepuff" />
          ) : selectedCharacter.house === "Ravenclaw" ? (
          <img className="img-escudo" src={ravenclaw} alt="Escudo de Ravenclaw" />
          ) : (
          <img className="img-escudo" src={slytherin} alt="Escudo de Slytherin" />
          )}
          </div>



    </div>
    
    <div className="character-detail-props">
      
    <p ><strong>Especie: </strong>{selectedCharacter.species}</p>
    <p><strong>Género: </strong>{selectedCharacter.gender}</p>
    <p><strong>Estatus: </strong>
        {selectedCharacter.alive
          ? selectedCharacter.gender === "male"
            ? "vivo"
            : "viva"
          : selectedCharacter.gender === "male"
            ? "muerto"
            : "muerta"}
    </p>
    <p><strong>Casa: </strong>{selectedCharacter.house}</p>

 <p><strong>Nombres alternativos: </strong>
      {selectedCharacter.alternate_names.length === 0
        ? ""
        : selectedCharacter.alternate_names.join(", ")}
    </p> {/* esta opcion hace que, aunque el array este vacio, se pinte una linea en blanco */}
     
    </div>
    </div>
    </div>
    

   

    

    </div>

    


  

  


   {/*  {selectedCharacter.alternate_names.length > 0 && (
  <p>
    Nombres alternativos: {selectedCharacter.alternate_names.join(", ")}
  </p>
)} */} {/* esta opcion hace que solo se pinte el parrafo si el array no esta vacio, si la condicion no se cumple (es decir, el array esta vacio), react ignora todo lo que hay despues de & */}




    
 
    

    
    </>
  )
}

export default DetailContact