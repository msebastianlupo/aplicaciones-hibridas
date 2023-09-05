let listaTareas = []

function agregarTarea(tarea = ""){
    tarea.length ? listaTareas.push(tarea) : console.log("No se especificó la tarea")
}

function listarTareas(){
    if(listaTareas.length){
        listaTareas.forEach(tarea => {
            console.log(tarea)
        })
    }else{
        console.log("No hay tareas para mostrar. Agregrá una usando la función agregarTarea('mi nueva tarea')")
    }
}

function eliminarTarea(indice){
    listaTareas.splice(indice, 1)
}

export {
    listaTareas,
    agregarTarea,
    listarTareas,
    eliminarTarea
}