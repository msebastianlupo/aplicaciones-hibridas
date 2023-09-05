import fs from 'node:fs'
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

function exportarCSV(nombre = "contactos"){
    if(listaContactos.length){
        if(!fs.existsSync(nombre + ".csv")){
            listaContactos.forEach(contacto => {    
                fs.writeFile(nombre.trim() + ".csv", `${contacto.nombre};${contacto.telefono};${contacto.email}\n`, {encoding: "utf-8", flag: "a"}, function(err){
                })
            })
        }
    }
}

export {
    listarContactos,
    agregarContacto,
    exportarCSV
}