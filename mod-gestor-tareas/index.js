import {agregarTarea, listarTareas, eliminarTarea } from "./tareas.js"

agregarTarea("sacar a pasear a firulais")
agregarTarea("ver películas de marvel")
agregarTarea("comprarle un regalo a mi novia")
agregarTarea("estudiar desarollo web")

listarTareas()

eliminarTarea()

console.log("\n------------------------------\n")
listarTareas()