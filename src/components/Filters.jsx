

function Filters({psetSearchName, psearchName, phouse, psetSearchHouse}) {

  //para guardar los datos que va escribiendo el usuario
  const handleName = (ev) => {
    ev.preventDefault()
    
    psetSearchName(ev.target.value)
  }

  const handleHouse = (ev) => {
    psetSearchHouse(ev.target.value)
      }

    
//creamos un evento submit con su funcion manejadora, para evitar el comportamiento por defecto del formulario, que es recargarse al darle intro
      const handleSubmit = (ev) => {
        ev.preventDefault()
      }

     
  return (
    <>

<h1 >Character finder</h1>

    <form className="filters" onSubmit={handleSubmit}>
      <div>
    <label htmlFor="name">Search by character </label>
    <input onChange={handleName} type="text" value={psearchName} /> {/* importante dar un valor al input */}
    </div>


    <div>
    <label htmlFor="house">Search by house </label>
    <select onChange={handleHouse} name="" id="">
      <option value="">All</option>
      {
        phouse.map(item =>
        <option key={item.id} value={item}>{item}</option>
        )
      }
    </select>
    </div>
    </form>




    </>
  )
}

export default Filters