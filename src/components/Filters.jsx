

function Filters({psetSearchName, psearchName, phouse, psetSearchHouse}) {

  //para guardar los datos que va escribiendo el usuario
  const handleName = (ev) => {
    ev.preventDefault()
    psetSearchName(ev.target.value)
  }

  const handleHouse = (ev) => {
    psetSearchHouse(ev.target.value)
      }

  return (
    <>
    <label htmlFor="name">Busca por personaje </label>
    <input onChange={handleName} type="text" value={psearchName} /> {/* importante dar un valor al input */}

    <label htmlFor="house">Busca por casa </label>
    <select onChange={handleHouse} name="" id="">
      <option value="">Todas</option>
      {
        phouse.map(item =>
        <option value={item}>{item}</option>
        )
      }



    </select>




    </>
  )
}

export default Filters