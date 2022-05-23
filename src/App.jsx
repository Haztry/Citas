import { useState,useEffect } from 'react'
import './App.css'
import { Cabecera } from './components/Cabecera'
import { Formulario } from './components/Formulario'
import { Listado } from './components/Listado'


function App() {

  const [pacientes,setPacientes] = useState([])
  const [paciente,setPaciente] = useState({})

  useEffect(()=>{
    
    localStorage.setItem('pacientes',JSON.stringify(pacientes))

  },[pacientes])

  useEffect(()=>{
    const pacientesLocalStorage = localStorage.getItem('pacientes')
  },[])

  const eliminarPaciente = (id)=>{

    console.log("Eliminando Paciente: " + id)
    const pacientesActualizados = pacientes.filter(reemplazo => reemplazo.id !== id)
    setPacientes(pacientesActualizados)
  }

  return (
    <div>
      <Cabecera />
      <div className=' sm:grid-cols-2 grid grid-cols-1'>
        <Formulario setPacientes={setPacientes} pacientes={pacientes} paciente={paciente} setPaciente={setPaciente} />
        <Listado 
        pacientes={pacientes}
        setPaciente={setPaciente}
        eliminarPaciente = {eliminarPaciente}

        />
      </div>
    </div >

  )
}

export default App
