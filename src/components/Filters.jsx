
function Filters({psetSearchName, psearchName, phouse, psetSearchHouse, psetSearchGender, pgender, psearchGender, psearchHouse}) {

  //para guardar los datos que va escribiendo el usuario
  const handleName = (ev) => {
    ev.preventDefault()
    psetSearchName(ev.target.value)
  }

  const handleHouse = (ev) => {
    psetSearchHouse(ev.target.value)
  }

  const handleGender = (ev) => {
    ev.preventDefault()
    psetSearchGender(ev.target.value)
  }

  //creamos un evento submit con su funcion manejadora, para evitar el comportamiento por defecto del formulario, que es recargarse al darle intro
  const handleSubmit = (ev) => {
    ev.preventDefault()
  }

  const handleReset = () => {
    psetSearchName("");
    psetSearchGender("");
    psetSearchHouse("");

  }

  return (
    <>
      <h1 >Character finder</h1>
      <form className="filters" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Search by character </label>
          <input onChange={handleName} type="text" id="name" value={psearchName} /> {/* importante dar un valor al input */}
        </div>
        <div>
          <label htmlFor="gender">Search by gender </label>
          <select onChange={handleGender} name="gender" id="gender" value={psearchGender} >
            <option value="">Both</option>
            {
              pgender.map((item, index) =>
              <option key={index} value={item}>{item.charAt(0).toUpperCase() + item.slice(1)}</option>
              ) 
            } 
          </select>
        </div>
        <div>
          <label htmlFor="house">Search by house </label>
          <select onChange={handleHouse} name="house" id="house" value={psearchHouse}>
            <option value="">All</option>
            {
              phouse.map((item, index) =>
              <option key={index} value={item}>{item}</option>
              ) 
            }  
          </select>
        </div>
        <button className="reset" onClick={handleReset}>Reset</button>     
      </form>
    </>
  )
}

export default Filters