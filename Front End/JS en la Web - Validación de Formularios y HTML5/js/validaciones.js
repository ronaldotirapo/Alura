//Para hacer funciones más reutilizables exportamos una función general que pueda ejecutar la validación según el tipo de input
export function valida (input) {
    //Con la propiedad dataset.tipo accedemos al contenido de su data attribute con el nombre tipo
    const tipoInput = input.dataset.tipo;
    
    //Si existe el contenido del data attribute dentro del objeto validaciones ejecuta la función asociada
    if (validaciones[tipoInput]) {
        validaciones[tipoInput](input);
    }

    /*Si la clave valid del objeto validity es true quitamos la clase input-container--invalid, sino la añadimos a su parent 
    (ya que cuando input-message-error tiene de clase padre a input-container--invalid hará que aparezca el span) 
    y establecemos el mensaje de error dentro del span de clase input-message-error*/
    if (input.validity.valid) {
        input.parentElement.classList.remove("input-container--invalid");
        //Si no hay error no establecemos el mensaje de error que aparecerá en el span al agregar la clase input-message-error
        input.parentElement.querySelector(".input-message-error").innerHTML = "";
    } else {
        input.parentElement.classList.add("input-container--invalid");
        //Si hay error establecemos el mensaje de error que aparecerá en el span al agregar la clase input-message-error
        input.parentElement.querySelector(".input-message-error").innerHTML = mostrarMensajeDeError(tipoInput, input);
    }
}

//Establecemos un objeto para guardar el par clave-valor como: contenido del data attribute y función para el input respectivamente
const validaciones = {
    //Utilizamos funciones anónimas de una sola linea para establecer la función según el contenido del data attribute tipo
    nacimiento : (input) => validarNacimiento(input),
}

//Creamos un array para recorrer el tipo de validity, así no tendremos que hacer recorridos anidados a mensajesDeError
const tiposDeError = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError",
];

//Creamos un objeto anidado para guardar los distintos mensajes de error según los valores del objeto validity de nuestro input
const mensajesDeError = {
    nombre: {
        valueMissing: "El campo nombre no debe estar vacío",
    },
    email: {
        valueMissing: "El campo email no debe estar vacío",
        typeMismatch: "Este correo no es válido",
    },
    password: {
        valueMissing: "El campo password no debe estar vacío",
        patternMismatch: "Al menos 6 carácters, máximo 12, debe contener una letra minúscula, una letra mayúscula, un número y no puede contener carácteres especiales",
    },
    nacimiento: {
        valueMissing: "El campo nacimiento no debe estar vacío",
        //El valor customError se define cuando utilizamos setCustomValidity para validar un el input de un formulario
        customError: "Debe ser mayor de 18 años"
    },
    numero: {
        valueMissing: "El campo numero no debe estar vacío",
        patternMismatch: "El formato requerido es una secuencia de 10 números",
    },
    direccion: {
        valueMissing: "El campo direccion no debe estar vacío",
        patternMismatch: "Al menos 10 carácteres y máximo 40",
    },
    ciudad: {
        valueMissing: "El campo ciudad no debe estar vacío",
        patternMismatch: "Al menos 4 carácteres y máximo 30",
    },
    estado: {
        valueMissing: "El campo estado no debe estar vacío",
        patternMismatch: "Al menos 4 carácteres y máximo 30",
    },
}

/*Utilizamos una función que retorna un mensaje según el contenido de data attribute tipo del input
y el tipo de error en su objeto validity */
function mostrarMensajeDeError (tipoInput, input) {
    let mensaje = "";
    /*Recorremos cada tipo de error que tenemos y si está presente, es true,
    en el objeto validity del input establecemos un mensaje según corresponda del objeto mensajesDeError*/
    tiposDeError.forEach(error => {
        if (input.validity[error]) {
            mensaje = mensajesDeError[tipoInput][error];
         }
    });
    return mensaje;
}

//La función extrae la fecha del input y si la validación de mayor de edad no es correcta se establece un mensaje
function validarNacimiento(input) {
    const fechaCliente = new Date(input.value);

    /*Es importante establecer un string vacío para indicar que el campo es correcto cuando se usa setCustomValidity,
    ya que cuando se establece un string con contenido no dejará enviar el formulario*/
    let mensaje = "";

    /*Se evalúa si la fecha del input es mayor de edad, solo si no lo es se establece el mensaje 
    (cuando devuelve false se niega, convirtiendolo en true para que ejecute el if)*/
    if (!mayorDeEdad(fechaCliente)) {
        mensaje = "Debe ser mayor de 18 años";
    }
    
    //La función setCustomValidity adiciona un string como mensaje personalizado y no dejará enviar el formulario
    input.setCustomValidity(mensaje);
}

/*La función crea una instancia de la fecha actual, añade 18 años a la fecha del input para retornar un boolean de
la comparación entre las fechas, ya que la fecha del input después de 18 años debe ser menor o igual a la fecha actual*/
function mayorDeEdad(fecha) {
    const fechaActual = new Date();

    //Las funciones getUTC del objeto Date se utilizan para crear el formato de fecha, el cual es: año, mes y día para el objeto Date
    const diferenciaDeFechas = new Date(
        fecha.getUTCFullYear() + 18,
        fecha.getUTCMonth(),
        fecha.getUTCDate()
    );
    return (diferenciaDeFechas <= fechaActual);
}
