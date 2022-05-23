

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
    <div className='mt-2 shadow-lg p-3 rounded-md uppercase bg-purple-300 '>
      <p className='text-zinc-900 font-bold'>Nombre Paciente: <span className='font-normal normal-case text-black'>{paciente.nombre}</span></p>
      <p className='text-zinc-900 font-bold'>Fecha de Cita: <span className='font-normal normal-case text-black'>{paciente.fecha}</span></p>
      <p className='text-zinc-900 font-bold'>Correo: <span className='font-normal normal-case text-black'>{paciente.correo}</span></p>
      <p className='text-zinc-900 font-bold'>Síntomas: <span className='font-normal normal-case text-black break-words '>{paciente.sintomas}</span></p>
    </div>
    <div className="flex justify-between py-3" >
        <a href="#" onClick={()=>setPaciente(paciente)} className="bg-purple-700 p-3 w-1/2 text-center mr-2 rounded-md">Editar</a>
        <a href="#" onClick={handleEliminar} className="bg-purple-700 w-1/2 text-center p-3 rounded-md">Eliminar</a>

      </div>
      
      </>
  )
}

export default Paciente

           
           
          