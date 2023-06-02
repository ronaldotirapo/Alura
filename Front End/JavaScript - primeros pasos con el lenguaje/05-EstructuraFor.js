/*La estructura For en JavaScript sirve para evaluar una cantidad de veces definidas,
con un contador y su aumento definido*/

let miPresupuesto = 150;
let i = 0;

const mapaDeCiudadesYprecios = [
    {
        ciudad: "Lima", //En caso las claves tengan carácteres especiales es mejor escribirlas entre comillas
        precio: 400,
    },
    {
        ciudad: "Quito",
        precio: 300,
    },
    {
        ciudad: "Santiago",
        precio: 350,
    },
    {
        ciudad: "Caracas",
        precio: 200,
    },
    {
        ciudad: "Bogotá",
        precio: 150,
    }
]

let j = 0;
let ciudadSeleccionada = "";

//Estructura for
for (let index = 0; index < mapaDeCiudadesYprecios.length && ciudadSeleccionada == ""; index++) { //La condición se puede personalizar
    if (mapaDeCiudadesYprecios[index].precio <= miPresupuesto) {
        ciudadSeleccionada = mapaDeCiudadesYprecios[index].ciudad;
    }
}

if (ciudadSeleccionada == "") {
    console.log("No se encontró nigún vuelo con el presupuesto especificado");
} else {
    console.log(`Se encontró el vuelo a ${ciudadSeleccionada} con el presupuesto ${miPresupuesto}`);
}
