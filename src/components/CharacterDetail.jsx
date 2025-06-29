import { useParams } from "react-router"

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

    <div className="character-detail-props">
      
    <p className="detail-"><strong>Especie: </strong>{selectedCharacter.species}</p>
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


   


    <p>{`Casa: ${selectedCharacter.house}`}</p>
        <p>{selectedCharacter.alternate_names.length === 0
        ? ""
        : `Nombres alternativos: ${selectedCharacter.alternate_names.join(", ")}`}      
    </p> {/* esta opcion hace que, aunque el array este vacio, se pinte una linea en blanco */}
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