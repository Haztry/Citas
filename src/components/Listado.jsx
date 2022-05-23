import React from 'react'
import Paciente from './Paciente'

export const Listado = ({pacientes,setPaciente,eliminarPaciente}) => {


   

    return (
        <div className='bg-gradient-to-r from-black to-emerald-400 text-white rounded-md mr-10  w-auto lg:w-3/2 xl:w-auto ml-10 p-3  md:h-screen overflow-y-scroll mt-5 sm:mt-0 '>
            <h2 className='text-center text-2xl'>LISTADO DE PACIENTES</h2>
            <p className='text-xl mt-2'>Administra tus <span className='font-bold text-cyan-700'>Paceintes y citas</span></p>
        {pacientes.map(paciente=> 
        <Paciente 
        key={paciente.id}
        paciente={paciente}
        setPaciente={setPaciente}
        eliminarPaciente={eliminarPaciente}/>)}

      
       
        </div>
    )
}
