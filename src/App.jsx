import { useState } from 'react'
import './App.css'
import Maps from './components/Maps'
import Perfil from './components/Perfil'




function App() {
  const [count, setCount] = useState(false)


  const mostarMapa = ()=>{
    setCount(!count)
  }


  return (
    <div className="App">
      {count && <Maps/>}
      <img src="/hoja.jpg" alt="" className="fondo" />
      <div className='edad-conta'>
       <h1 className='edad'>5</h1>
      </div>
      <div className='container-info'>
        <Perfil/>
        <h2 className="teInvito">Te Invito a celebrar</h2>
        <h2 className="Micumple">Mi Cumpleaños</h2>
        <h3 className="fecha-hora">El dia Sabado 11 de Junio <br />a partir de las 08:00pm</h3>
        <h3 onClick={mostarMapa} className="domicilo">En mi domicilio</h3>
        <h3 className="te-espero">Te espero</h3>
        <h1 className="names">Maria del Pilar <br /> Salazar Ruiz</h1>
        
       {/*<a href={`https://web.whatsapp.com/send?phone=${+51964505483}&text=${"Hola!! Miky gracias por invitarme a tus 5 añitos, cuenta con mi presencia "}&app_absent=0`} target="_blank">
          <button className='btWhatsapp'>Confirmar asistencia</button>
        </a> */}
        <a href={`https://api.whatsapp.com/send?phone=${+51964505483}&text=${"Hola!! Miky gracias por invitarme a tus 5 añitos, cuenta con mi presencia "}`} target="_blank">
          <button className='btWhatsapp'>Confirmar asistencia</button>
        </a> 
      </div>
    </div>
  )
}

export default App
