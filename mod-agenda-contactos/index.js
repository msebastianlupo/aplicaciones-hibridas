import { listarContactos, agregarContacto } from "./contactos.js"

agregarContacto("Brian Lara", "123-456-7890", "blara@email.com")
agregarContacto("Juan Gonzalez", "123-456-7899", "jgonzalez@email.com")
agregarContacto("Error No Funciona", "000000", "email-invalido")

listarContactos()