import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <img src="/hoja.jpg" alt="" className="fondo" />
      <div className='container-info'>
        <h2 className="teInvito">Te5 Invito a celebrar</h2>
        <h2 className="Micumple">Mi Cumpleaños</h2>
        <h3 className="fecha-hora">El dia Sabado 11 de Junio <br />a partir de las 08:00pm</h3>
        <h3 className="domicilo">En mi domicilio</h3>
        <h3 className="te-espero">Te espero</h3>
        <h1 className="names">Harvey Nilton <br /> Lopez Quiñones</h1>
      </div>
    </div>
  )
}

export default App
