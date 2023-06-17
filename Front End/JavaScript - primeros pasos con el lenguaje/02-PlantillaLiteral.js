/*JavaScript tiene una forma de declarar texto denominado Plantillas literales (Template literals)
el cual se utiliza con las comillas invertidas ``

Dentro de ella se utilizarán los espacios de texto tal cual se digite y
para utilizar variables se utiliza el signo de dolar seguido de llaves y dentro de ellas el nombre de la variable 
${nombreDeVariable}*/

let nombre = "Ronaldo";
let edad = 25;
let plantillaLiteral = `La edad de ${nombre} es ${edad}`;
console.log(plantillaLiteral);

/*JavaScript puede cambiar de tipo automáticamente (ya que es de tipado dinámico) cuando se vuelve a asignar un valor nuevo a una variables
por lo que se debe tener cuidado cuando se declaran let y var
Para asegurar la inmutabilidad de una variable que se sabe no va a cambiar es mejor declararla con const*/
var pasajero = "Juan Perez";
console.log(pasajero);
pasajero = 1025; //Cambiará el tipo de dato de String a number
console.log(pasajero); 
console.log(typeof pasajero); //Con typeof + nombreDeVariable, se muestra que el tipo de dato ahora es number
