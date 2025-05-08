let opcion;
while(opcion !== 3) {
    opcion = prompt("Escriba un número para elegir:\n1. Ejercicios con ternarias\n2. Ejercicios con decisiones\n3. Salir");

    switch(opcion) {
        case "1":
            let ternariaOpcion;
            while(ternariaOpcion !== "6") {
                ternariaOpcion = prompt("Escriba un número para elegir ejercicio con ternarias:\n1. Café con leche\n2. Temperatura café\n3. Crema de café\n4. Verificación ID\n5. Color del café\n6. Volver");
                
                switch(ternariaOpcion) {
                    case "1":
                        console.log("Ejercicio 1 - Café con leche");
                        let café = "Leche";
                        café == "Leche" ? console.log("Es café con leche") : console.log("No es café con leche");
                        break;  
                    case "2":
                        console.log("Ejercicio 2 - Temperatura café");
                        let TemperaturaCafé = 40;
                        TemperaturaCafé >= 30 ? console.log("El café está caliente") : console.log("El café está frio");
                        break;
                    case "3":
                        console.log("Ejercicio 3 - Crema de café");
                        let CremaCafe = true;
                        let TipoCrema = "Whiskey";
                        let mensajito = CremaCafe = true ? "El café tiene una crema de " + TipoCrema : "No tiene crema";
                        console.log(mensajito);
                        break;
                    case "4":
                        console.log("Ejercicio 4 - Verificación ID");
                        const id = 1122518916;
                        const nombreId = "Juan Sebastián Uribe Lesmes";
                        id === 1122518916 && nombreId == "Juan Sebastián Uribe Lesmes" ? 
                            console.log("Señor usuario identificado con el id " + id + " , bienvenido al sistema") : 
                            console.log("Al parecer el id registrado no concuerda con el nombre dado.");
                        break;
                    case "5":
                        console.log("Ejercicio 5 - Color del café");
                        let ColorCafé = "Negro";
                        ColorCafé == "Pintadito" ? 
                            console.log("El color del café es " + ColorCafé + " , Seguramente tendrá un sabor dulce.") : 
                            ColorCafé == "Tostado" ? 
                                console.log("El color del café es " + ColorCafé + " , Seguramente tendrá un sabor suave.") : 
                                ColorCafé == "Negro" ? 
                                    console.log("El color del café es " + ColorCafé + " ,Seguramente tendrá un sabor amargo.") : 
                                    console.log("Ese color es " + ColorCafé + " , ¿Está seguro de estar tomando café?");
                        break;
                    case "6":
                        console.log("Volviendo al menú principal...");
                        break;
                    default:
                        alert("Opción no válida");
                }
            }
            break;
            
        case "2":
            let decisionOpcion;
            while(decisionOpcion !== "7") {
                decisionOpcion = prompt("Escriba un número para elegir ejercicio con decisiones:\n1. Escala PH\n2. Atención paciente\n3. Registro animal\n4. Tipo de café\n5. Voltaje dispositivo\n6. Sabor bebida\n7. Volver");
                
                switch(decisionOpcion) {
                    case "1":
                        console.log("Ejercicio 1 - Escala PH");
                        let GradosPh = 12;
                        if (GradosPh >= 8) {
                            console.log("Esta sustancia es básica, cuenta con " + GradosPh + " grados en la escala de PH");
                        }
                        break;
                    case "2":
                        console.log("Ejercicio 2 - Atención paciente");
                        let afeccionesPaciente = "Dolor simple";
                        if (afeccionesPaciente == "Dolor simple") {
                            console.log("El paciente será atendido en una consulta general, no requiere atención especializada por ser un " + afeccionesPaciente);
                        }
                        else if (afeccionesPaciente == "Perdida del conocimiento con tiempo prolongado") {
                            console.log("El paciente será atendido por los paramedicos para luego ser revisado debido a su" + afeccionesPaciente);
                        }
                        else if (afeccionesPaciente == "Heridas graves") {
                            console.log("El paciente será atendido por los paramedicos para luego ser atendido en urgencias debido a sus " + afeccionesPaciente);
                        }
                        else {
                            console.log("El paciente no muestra ninguna afección que deba ser revisada");
                        }
                        break;
                    case "3":
                        console.log("Ejercicio 3 - Registro animal");
                        let idAnimalBd = 1234567890;
                        let nombreAnimal = "Max";
                        let animalIngresado = "1234567890";
                        let nombreAnimalngresado = "Max";
                        if (idAnimalBd == animalIngresado && nombreAnimal == nombreAnimalngresado) {
                            console.log("El animal " + nombreAnimal + " con id " + idAnimalBd + " existe en los registros de la base de datos.");
                        }
                        else {
                            console.log("El animal " + nombreAnimalngresado + " con id " + idAnimalBd + " No existe en los registros de la base de datos");
                        }
                        break;
                    case "4":
                        console.log("Ejercicio 4 - Tipo de café");
                        let caféConLeche = true;
                        let caféNegro = false;
                        let caféConCrema = false;
                        let caféConHielo = false;
                        if (caféConLeche == true) {
                            console.log("El café tiene leche");
                        }
                        else if (caféNegro == true) {
                            console.log("El café es negro");
                        }
                        else if (caféConCrema == true) {
                            console.log("El café tiene crema");
                        }
                        else if (caféConHielo == true) {
                            console.log("El café tiene hielo");
                        }
                        else {
                            console.log("El café no tiene ninguna de las opciones anteriores");
                        }
                        break;
                    case "5":
                        console.log("Ejercicio 5 - Voltaje dispositivo");
                        let encendido = true;
                        let voltaje = 500;
                        if (encendido) {    
                            if (voltaje >= 500) {
                                console.log("El dispositivo cuenta con demasiado voltaje, cuenta con un voltaje de " + voltaje + " Energía que parece ser excesiva");
                            }
                            else if (voltaje >= 220) {
                                console.log("El dispositivo está encendido y está funcionando con un voltaje de " + voltaje + " Energía que parece ser suficiente");
                            }
                            else if (voltaje > 0 ) {
                                console.log("El dispositivo está encendido pero no está funcionando con un voltaje de " + voltaje + " Energía que parece ser insuficiente");
                            }
                            else {
                                console.log("El dispositivo no cuenta con voltaje ");
                            }
                        }
                        else {
                            console.log("El dispositivo no está encendido");
                        }
                        break;
                    case "6":
                        console.log("Ejercicio 6 - Sabor bebida");
                        let bebida = "Café Negro";
                        let sabor = "Amargo";
                        if (bebida == "Café Negro") {
                            console.log("El sabor de la bebbida es " + sabor);
                        }
                        break;
                    case "7":
                        console.log("Volviendo al menú principal...");
                        break;
                    default:
                        alert("Opción no válida");
                }
            }
            break;
            
        case "3":
            opcion = 3;
            alert("Saliendo del menú...");
            break;
        default:
            alert("Opción no válida, por favor seleccione 1, 2 o 3");
    }
}
