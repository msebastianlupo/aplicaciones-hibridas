import { listarContactos, agregarContacto, exportarCSV } from "./contactos.js"

agregarContacto("Matías Godoy", "110-456-3456", "matias@godoy.com")
agregarContacto("Juan Carlos Peralta", "117-865-9421", "jperalta@gmail.com")
agregarContacto("Elizabeth Olsen", "175-494-3297", "elizolsen@eliz.soy")
agregarContacto("Mariano Giménez", "167-348-3388", "mgimene89@yahoo.com")
agregarContacto("Lucía Montenegro", "119-997-3503", "lmontenegro@gmail.com")

//test contacto error
agregarContacto("Error No Funciona", "000000", "email-invalido")

console.log("Estos son tus contactos:")
listarContactos()

//exportando a archivo predeterminado de contactos
exportarCSV()