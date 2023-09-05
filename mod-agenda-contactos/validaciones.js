function validarTelefono(telefono){
    let re = /^\(?(\d{3})\)?[-]?(\d{3})[-]?(\d{4})$/
    return re.test(telefono)
    
}

function validarEmail(email){
    let re = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return re.test(email)
}

export{
    validarTelefono,
    validarEmail
}