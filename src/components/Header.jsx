

import logo from "../images/logo6.png"



function Header() {



  

  
  return (
    <>

    

    <h3 className="no-muggles"><em>
  {"No muggles beyond this point".split("").map((char, i) => (
    <span key={i} style={{ animationDelay: `${i * 0.05}s` }}>
      {char === " " ? "\u00A0" : char}
    </span>
  ))}
</em></h3>

    <div className="logo-container">
      
      <img className="logo" src={logo} alt="Logo Harry Potter" />
            </div>
      
    </>
  )
}

export default Header
