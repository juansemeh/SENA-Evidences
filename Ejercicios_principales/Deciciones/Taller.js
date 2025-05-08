// Ejercicios con ternarias
console.log("Ejercicios con ternarias ")
// Primer ejercicio
console.log("Primer Ejercicio -----------------------------------------------------------------")

let café = "Leche";

café == "Leche" ? console.log("Es café con leche") : console.log("No es café con leche");

// Segundo ejercicio
console.log("Segundo Ejercicio -----------------------------------------------------------------")

let TemperaturaCafé = 40;

TemperaturaCafé >= 30 ? console.log("El café está caliente") : console.log("El café está frio");

// Tercer ejercicio 
console.log("Tercer Ejercicio -----------------------------------------------------------------")

let CremaCafe = true;
let TipoCrema = "Whiskey";

mensajito = CremaCafe = true ? "El café tiene una crema de " + TipoCrema : "No tiene crema"
console.log(mensajito)

// Cuarto ejercicio
console.log("Cuarto Ejercicio -----------------------------------------------------------------")

const id = 1122518916;
const nombreId = "Juan Sebastián Uribe Lesmes";

id === 1122518916 && nombreId == "Juan Sebastián Uribe Lesmes" ? console.log("Señor usuario identificado con el id " + id + " , bienvenido al sistema") : console.log("Al parecer el id registrado no concuerda con el nombre dado.");

// Quinto ejercicio 
console.log("Quinto Ejercicio -----------------------------------------------------------------")
let ColorCafé = "Negro";
ColorCafé == "Pintadito" ? console.log("El color del café es " + ColorCafé + " , Seguramente tendrá un sabor dulce.") : ColorCafé == "Tostado" ? console.log("El color del café es " + ColorCafé + " , Seguramente tendrá un sabor suave.") : ColorCafé == "Negro" ? console.log("El color del café es " + ColorCafé + " ,Seguramente tendrá un sabor amargo.") : console.log("Ese color es " + ColorCafé + " , ¿Está seguro de estar tomando café?")

// Ejercicios con decisiones
console.log("Ejercicios con decisiones")

//Primer ejercicio
console.log("Primer Ejercicio -----------------------------------------------------------------")

let GradosPh = 12
if (GradosPh >= 8) {
    console.log("Esta sustancia es básica, cuenta con " + GradosPh + " grados en la escala de PH"
    )
}

//Segundo ejercicio
console.log("Segundo Ejercicio -----------------------------------------------------------------")


let afeccionesPaciente = "Dolor simple"
if (afeccionesPaciente == "Dolor simple") {
    console.log("El paciente será atendido en una consulta general, no requiere atención especializada por ser un " + afeccionesPaciente ) 
}
else if (afeccionesPaciente == "Perdida del conocimiento con tiempo prolongado") {
    console.log("El paciente será atendido por los paramedicos para luego ser revisado debido a su" + afeccionesPaciente)

}

else if (afeccionesPaciente == "Heridas graves") {
    console.log("El paciente será atendido por los paramedicos para luego ser atendido en urgencias debido a sus " + afeccionesPaciente) 
}

else {
    console.log("El paciente no muestra ninguna afección que deba ser revisada")
}

//Tercer ejercicio
console.log("Tercer Ejercicio -----------------------------------------------------------------")

let idAnimalBd = 1234567890
let nombreAnimal = "Max"
let animalIngresado = "1234567890"
let nombreAnimalngresado = "Max"
if (idAnimalBd == animalIngresado && nombreAnimal == nombreAnimalngresado) {
    console.log("El animal " + nombreAnimal + " con id " + idAnimalBd + " existe en los registros de la base de datos.")
}
else {
    console.log("El animal " + nombreAnimalngresado + " con id " + idAnimalBd + " No existe en los registros de la base de datos")
}
//Cuarto ejercicio
console.log("Cuarto Ejercicio -----------------------------------------------------------------")
let caféConLeche = true
let caféNegro = false
let caféConCrema = false
let caféConHielo = false
if (caféConLeche == true) {
    console.log("El café tiene leche")
}
else if (caféNegro == true) {
    console.log("El café es negro")
}
else if (caféConCrema == true) {
    console.log("El café tiene crema")
}
else if (caféConHielo == true) {
    console.log("El café tiene hielo")
}
else {
    console.log("El café no tiene ninguna de las opciones anteriores")
}
//Quinto ejercicio
console.log("Quinto Ejercicio -----------------------------------------------------------------")
let encendido = true
let voltaje = 0
if (encendido) {    
    if (voltaje >= 500) {
        console.log("El dispositivo cuenta con demasiado voltaje, cuenta con un voltaje de " + voltaje + " Energía que parece ser excesiva")
    }
    else if (voltaje >= 220) {
        console.log("El dispositivo está encendido y está funcionando con un voltaje de " + voltaje + " Energía que parece ser suficiente")
    }
    else if (voltaje > 0 ) {
        console.log("El dispositivo está encendido pero no está funcionando con un voltaje de " + voltaje + " Energía que parece ser insuficiente")
    }

    else {
        console.log("El dispositivo no cuenta con voltaje ")
    }
}
else {
    console.log("El dispositivo no está encendido")
}
//Sexto ejercicio 
console.log("Quinto Ejercicio -----------------------------------------------------------------")
let bebida = "Café Negro"
let sabor = "Amargo"
if (bebida == "Café Negro") {
    console.log("El sabor de la bebbida es " + sabor)
}