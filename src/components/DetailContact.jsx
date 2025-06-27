import { useParams } from "react-router"

function DetailContact({pcharactersList}) {

    const {id} = useParams()
    

    const selectedCharacter = pcharactersList.find(item => item.id === id)




  return (
    <>
    
    <h1>Detalle del personaje</h1>

 <div>

    <p>{selectedCharacter.name}</p>
    <p>{`Especie: ${selectedCharacter.species}`}</p>
    <p>{`Género: ${selectedCharacter.gender}`}</p>
    <p>{selectedCharacter.alive
        ? selectedCharacter.gender === "male" ? "Estatus: vivo" : "Estatus: viva"
        : selectedCharacter.gender === "male" ? "status: muerto" : "status: muerta"    
    }</p>
    <p>{`Casa: ${selectedCharacter.house}`}</p>
    

    

    <p>{selectedCharacter.alternate_names.length === 0
        ? ""
        : `Nombres alternativos: ${selectedCharacter.alternate_names.join(", ")}`}
        
        
        </p>
    

    </div>




    
 
    

    
    </>
  )
}

export default DetailContact