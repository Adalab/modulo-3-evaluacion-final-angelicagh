import './styles/App.scss'
import Header from './components/Header'
import Footer from './components/Footer'
import {Routes, Route} from 'react-router'

function App() {
  
  return (
    <>

    <Routes>
      <Route >
        
      </Route>
    </Routes>
            <h1>Escribe aquí tu HTML</h1>
            <ol>Pasos:
              <li>Crear un componente: carpeta src-carpeta components-archivo Header.jsx</li>
              <li>Crear una hoja de estilos para ese componente: carpeta styles-carpeta components-archivo _header.scss</li>
              <li>Importar la hoja de estilos en el componente: dentro de Header.jsx se escribe: import '../styles/components/_header.scss'</li>
              <li>Importar el componente en el componente principal App.jsx: dentro de App.jsx se escribe: import Header from './components/Header'</li>
            </ol>
           
            
      <Header></Header>
      <Footer></Footer>
    </>
  )
}

export default App
