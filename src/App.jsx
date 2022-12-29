import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const mostarMapa = ()=>{
    mapaDomicilio()
  }

  function mapaDomicilio(){
    var coord = {lat:-34.5956145 ,lng: -58.4431949};
    var map = new google.maps.Map(<div className='mapas'></div>,{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });

  }


  return (
    <div className="App">
      
      <img src="/hoja.jpg" alt="" className="fondo" />
      <div className='edad-conta'>
       <h1 className='edad'>5</h1>
      </div>
      <div className='container-info'>
        <h2 className="teInvito">Te Invito a celebrar</h2>
        <h2 className="Micumple">Mi Cumpleaños</h2>
        <h3 className="fecha-hora">El dia Sabado 11 de Junio <br />a partir de las 08:00pm</h3>
       
        <h3 onClick={mostarMapa} className="domicilo">En mi domicilio</h3>
        <h3 className="te-espero">Te espero</h3>
        <h1 className="names">Maria del Pilar <br /> Salazar Ruiz</h1>
      </div>
    </div>
  )
}

export default App
