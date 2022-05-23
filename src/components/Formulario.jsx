import {useState,useEffect} from 'react'




export const Formulario = ({setPacientes,pacientes,paciente,setPaciente}) => {
    
    // TIP Definir el estado para el nombre
    const [nombre,setNombre] = useState('')
    const [fecha,setFecha] = useState('')
    const [correo,setCorreo] = useState('')
    const [sintomas,setSintomas] = useState('')
    const [error,setError]= useState('')

    useEffect(()=>{

        console.log(paciente)
        if(Object.keys(paciente).length>0){
            setNombre(paciente.nombre)
            setCorreo(paciente.correo)
            setFecha(paciente.fecha)
            setSintomas(paciente.sintomas)
        }

    },[paciente]);

        const generarID = ()=>{
        const random = Math.random().toString().substring(2);
        const fecha=Date.now().toString(36)
        return random+fecha

    }

    const vaciar=()=>
    {
        setCorreo('');
        setFecha('')
        setNombre('')
        setSintomas('')  
    }

    const poner=()=>{
        setCorreo()
    }
    const validarForms = (e) => {e.preventDefault()
    
            if([nombre,fecha,correo,sintomas].includes(''))
            {
                setError(true)
                return
            }
                setError(false)


            
                const objetoPaciente={
                    nombre,
                    fecha,
                    correo,
                    sintomas
                };



                if(paciente.id)
                {
                    //Actualizamos
                    objetoPaciente.id=paciente.id
                    console.log("Estamos editando")
                    console.log(objetoPaciente)
                    console.log(paciente)

                    const pacientesActualizado= pacientes.map(reemplazo => reemplazo.id === paciente.id ? objetoPaciente : reemplazo)

                    setPacientes(pacientesActualizado);
                    setPaciente({});

                }else{
                    //Agregamos
                    objetoPaciente.id=generarID()
                    console.log("Es un nuevo paciente")
                    setPacientes([...pacientes,objetoPaciente])
                }

                if(paciente.id)
                {

                }

              


                
                
                vaciar()
               
            
           
            

    }


    return (


        <div className='bg-gradient-to-r from-emerald-400 to-black ml-10 sm:grid-col-1 mr-5 rounded-md lg:w-3/2 w-auto xl:auto h-auto'>
            <form action='' className='m-5' onSubmit={validarForms}>
                {error && <p className='bg-gray-700 text-white p-2  w-full rounded-md text-center font-bold mb-2'>DEBES DE LLENAR TODOS LOS CAMPOS</p>}
                <div>
                    <label>Nombre Paciente </label>
                    <input type="text" id='nombre' className='block w-full rounded-md' placeholder='Nombre completo'value={nombre} onChange={(e) => setNombre(e.target.value)}  />
                </div>
                <div>
                    <label>Fecha cita </label>
                    <input type="date" id='cita' className='block w-full rounded-md' placeholder='Fecha de cita'value={fecha} onChange={(e) => setFecha(e.target.value)} />
                </div>
                <div>
                    <label>Correo </label>
                    <input type="email" id='correo' className='block rounded-10  w-full rounded-md' placeholder='Correo' value={correo} onChange={(e) => setCorreo(e.target.value)} />
                </div>
                <div>
                    <label className=''>Sintomas</label>
                    <textarea className='col-50 row-10 block w-full' id='sintomas' value={sintomas} onChange={(e) => setSintomas(e.target.value)}></textarea>
                    <input type="submit" id='boton' className='bg-orange-200 text-center text-black mt-5 w-full rounded-md p-1 hover:bg-orange-600 cursor-pointer duration-75' value={paciente.id ? 'Editar paciente' : 'Agregar paciente' }
                    
                    />
                </div>
            </form>
        </div>
    )
}
