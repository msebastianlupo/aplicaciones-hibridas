import { validarTelefono, validarEmail } from "./validaciones.js"

let listaContactos = []

function listarContactos(){
    if(listaContactos.length)
    listaContactos.forEach(contacto => {
        console.log(`${contacto.nombre} ::: ${contacto.email} ::: ${contacto.telefono}`)
    })
}

function agregarContacto(nombre, telefono, email){
    if(validarTelefono(telefono) && validarEmail(email)){
        listaContactos.push({nombre: nombre, telefono: telefono, email: email})
    }
}

export {
    listarContactos,
    agregarContacto
}