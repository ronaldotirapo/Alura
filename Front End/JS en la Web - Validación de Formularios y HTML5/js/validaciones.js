//Para hacer funciones más reutilizables exportamos una función general que pueda ejecutar la validación según el tipo de input
export function valida (input) {
    //Con la propiedad dataSet accedemos al contenido de su data attribute con el nombre tipo
    const tipoInput = input.dataSet.tipo;
    
    //Si existe el contenido del data attribute dentro del objeto validaciones ejecuta la función asociada
    if (validaciones[tipoInput]) {
        validaciones[tipoInput](input);
    }
}

//Establecemos un objeto para guardar el par: contenido del data attribute y función para el input
const validaciones = {
    //Utilizamos funciones anónimas de una sola linea para establecer la función para el input
    "nacimiento" : (input) => validarNacimiento(input),
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
