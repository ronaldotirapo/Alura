/*JavaScript es un lenguaje que distingue mayúsculas de minúsculas (Case-sensitive)
En este ejemplo ambas son variables distintas*/
let miNombre = "Ronaldo";
console.log(miNombre);
let MiNombre = "Ronaldo Tirapo";
console.log(MiNombre);

/*JavaScript es un lenguaje debilmente tipado (Weak typing), por lo que se pueden cambiar el tipo de dato de las variables,
pues se van definiendo según sea necesario y no reserva un espacio en memoria para un tipo en específico
Se debe tener cuidado con ello ya que se puede dar cambios de tipos indeseados
Por ejemplo en este caso cambiamos la edad de un number a un string*/
let miEdad = 25;
console.log(miEdad);
miEdad = "Veinticinco";
console.log(miEdad);