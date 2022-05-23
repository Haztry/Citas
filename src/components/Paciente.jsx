

 const Paciente = ({paciente,setPaciente,eliminarPaciente}) => {
  const handleEliminar = () => {

    console.log("eliminando..." + paciente.id)
    const respuesta = confirm('vuoi davvero rimuoverlo?')

    if(respuesta){
      eliminarPaciente(paciente.id)
    }
  }

  return (
    <>
    <div className='mt-2 shadow-lg p-3 rounded-md uppercase bg-purple-500 '>
      <p className='text-white'>Nombre Paciente: <span className='font-normal normal-case text-black'>{paciente.nombre}</span></p>
      <p className='text-white'>Fecha de Cita: <span className='font-normal normal-case text-black'>{paciente.fecha}</span></p>
      <p className='text-white'>Correo: <span className='font-normal normal-case text-black'>{paciente.correo}</span></p>
      <p className='text-white'>Sintomas: <span className='font-normal normal-case text-black'>{paciente.sintomas}</span></p>
    </div>
    <div className="flex justify-between py-3" >
        <a href="#" onClick={()=>setPaciente(paciente)} className="bg-green-600 p-3 w-1/2 text-center mr-2 rounded-md">Editar</a>
        <a href="#" onClick={handleEliminar} className="bg-green-600 w-1/2 text-center p-3 rounded-md">Eliminar</a>

      </div>
      
      </>
  )
}

export default Paciente

           
           
          