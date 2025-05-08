let opcion;
while(opcion !== 15)
{   opcion = prompt("Escriba un numero del 1 hasta el 15 para elegir los siguientes ejercicios: 1. Cálculo de salario 2. Determinar si un número es par o impar 3. Cálculo de costo de alquiler de lavadoras 4. Determinar si un número dado es par o impar 5. Cálculo de rendimiento academico 6. Encontrar el número mayor entre tres numeros 7. Cálculo de ayuda economica 8. Cálculo de costo de gimnasio 9. Verificar si un triangulo es valido 10. Cálculo costo de una impresión 11. Diagnóstico de computadora 12. Verificar si un automóvil esta defectuoso 13. Cálculo de costo de un operador de celular 14. Cálculo de costo de un sandwich 15. Salir")

    switch(opcion) {
        case "1" :
                // Ejercicio 1: Cálculo de salario
                console.log("# Ejercicio 1 ---------------------------");
                let nombre = "Ana López";
                let horas = 15;
                let salario;

                if (horas <= 10) {
                    salario = horas * 30000;
                } else {
                    salario = horas * 33000;
                }
                console.log(`Señor/a ${nombre}, el número de horas es ${horas} y su salario equivale a ${salario}`); 

                break
        case "2" :
                // Ejercicio 2: Determinar si un número es par o impar
                console.log("# Ejercicio 2 ---------------------------");
                let numero = 7;
                if (numero % 2 === 0) {
                    console.log(`${numero} es par.`);
                } else {
                    console.log(`${numero} es impar.`);
                }
                
                break 

        case "3" :
                // Ejercicio 3: Cálculo de costo de alquiler de lavadoras
                console.log("# Ejercicio 3 ---------------------------");
                let tipoLavadora = 1;
                let cantidad = 4;
                let horasAlquiler = 5;
                let costoBase = tipoLavadora === 1 ? 4000 : 3000;
                let total = cantidad * horasAlquiler * costoBase;
                if (cantidad > 3) {
                    total *= 0.97; // Aplicar descuento del 3%
                }
                console.log(`Costo total por alquilar ${cantidad} lavadoras tipo ${tipoLavadora} por ${horasAlquiler} horas: $${total}.`);

                break

        case "4" :

                // Ejercicio 4: Determinar si un número es par o impar (similar al Ejercicio 2)
                console.log("# Ejercicio 4 ---------------------------");
                    let numero2 = Number(prompt("Ingrese un numero"));
                    if (numero2 % 2 === 0) {
                        console.log(`${numero2} es par.`);
                    } else {
                        console.log(`${numero2} es impar.`);
                    }

                break

        case "5" :

                // Ejercicio 5: Cálculo de rendimiento académico
                console.log("# Ejercicio 5 ---------------------------");
                let fisica = 8;
                let quimica = 7;
                let biologia = 9;
                let matematicas = 10;
                let informatica = 8;
                let porcentaje = ((fisica + quimica + biologia + matematicas + informatica) / 50) * 100;
                let calificacion;

                if (porcentaje <= 59.9) {
                    calificacion = "Mala";
                } else if (porcentaje <= 80) {
                    calificacion = "Buena";
                } else {
                    calificacion = "Excelente";
                }
                console.log(`Tu porcentaje es ${porcentaje}% y tu calificación es ${calificacion}.`);

                break

        case "6" :

                // Ejercicio 6: Encontrar el número mayor entre tres números
                console.log("# Ejercicio 6 ---------------------------");
                let num1 = 10;
                let num2 = 20;
                let num3 = 15;
                let mayor = num1;

                if (num2 > mayor) {
                    mayor = num2;
                }
                if (num3 > mayor) {
                    mayor = num3;
                }
                console.log(`El número mayor es ${mayor}.`);

                break

        case "7" :

                // Ejercicio 7: Cálculo de ayuda económica
                console.log("# Ejercicio 7 ---------------------------");
                let genero = "femenino";
                let edad = 35;
                let ayuda;

                if (genero === "femenino") {
                    if (edad > 50) {
                        ayuda = 120000;
                    } else if (edad >= 30) {
                        ayuda = 100000;
                    } else {
                        ayuda = 0;
                    }
                } else {
                    ayuda = 40000;
                }
                console.log(`El valor de ayuda mensual es: $${ayuda}.`);

                break

        case "8" :
        

                // Ejercicio 8: Cálculo de costo de gimnasio
                console.log("# Ejercicio 8 ---------------------------");
                let dias = 30;
                let costoGimnasio;

                if (dias === 15) {
                    costoGimnasio = 18000;
                } else if (dias === 30) {
                    costoGimnasio = 35000;
                } else if (dias === 90) {
                    costoGimnasio = 86000;
                } else {
                    costoGimnasio = 0;
                }
                console.log(`El costo por ${dias} días es: $${costoGimnasio}.`);

                break

        case "9" :

                // Ejercicio 9: Verificar si un triángulo es válido
                console.log("# Ejercicio 9 ---------------------------");
                let angulo1 = 60;
                let angulo2 = 60;
                let angulo3 = 60;

                if (angulo1 + angulo2 + angulo3 === 180) {
                    console.log("El triángulo es válido.");
                } else {
                    console.log("El triángulo no es válido.");
                }

                break

        case "10" :

                // Ejercicio 10: Cálculo de costo de impresión
                console.log("# Ejercicio 10 ---------------------------");
                let copias = 600;
                let precioPorCopia;
                let totalCosto;

                if (copias < 500) {
                    precioPorCopia = 120;
                } else if (copias < 750) {
                    precioPorCopia = 100;
                } else if (copias < 1000) {
                    precioPorCopia = 80;
                } else {
                    precioPorCopia = 50;
                }
                totalCosto = copias * precioPorCopia;
                console.log(`El precio por copia es $${precioPorCopia} y el costo total es $${totalCosto}.`);

                break

        case "11" :

                // Ejercicio 11: Diagnóstico de computadora
                console.log("# Ejercicio 11 ---------------------------");
                let pitido = true;
                let discoDuroGira = false;

                if (pitido && discoDuroGira) {
                    console.log("Póngase en contacto con el técnico de apoyo.");
                } else if (pitido && !discoDuroGira) {
                    console.log("Verificar contactos de la unidad.");
                } else if (!pitido && !discoDuroGira) {
                    console.log("Traiga la computadora para repararla en la central.");
                } else {
                    console.log("Compruebe las conexiones de altavoces.");
                }

                break

        case "12" :

                // Ejercicio 12: Verificar si un automóvil está defectuoso
                console.log("# Ejercicio 12 ---------------------------");
                let modelo = 195;
                let defectuosos = [119, 179, 189, 190, 191, 192, 193, 194, 195, 221, 780];

                if (defectuosos.includes(modelo)) {
                    console.log("El automóvil está defectuoso, llevar a garantía.");
                } else {
                    console.log("Su automóvil no está defectuoso.");
                }

                break

        case "13" :

                // Ejercicio 13: Cálculo de costo de operador celular
                console.log("# Ejercicio 13 ---------------------------");
                let operador = "Tigo";
                let minutosInternacionales = 30;
                let cargoFijo, valorMinuto, paqueteDatos;

                if (operador === "Tigo") {
                    cargoFijo = 45000;
                    valorMinuto = 200;
                    paqueteDatos = 12000;
                } else if (operador === "Claro") {
                    cargoFijo = 30000;
                    valorMinuto = 100;
                    paqueteDatos = 18000;
                } else if (operador === "Movistar") {
                    cargoFijo = 40000;
                    valorMinuto = 250;
                    paqueteDatos = 8000;
                }
                let totalOperador = cargoFijo + (minutosInternacionales * valorMinuto) + paqueteDatos;
                console.log(`El costo total con ${operador} es: $${totalOperador}.`);

                break

        case "14" :


                // Ejercicio 14: Cálculo de costo de sándwich
                console.log("# Ejercicio 14 ---------------------------");
                let tamaño = "grande";
                let ingredientes = ["tocineta", "queso"];
                let costoSandwichBase = tamaño === "pequeño" ? 6000 : 12000;
                let costoIngredientes = 0;


                if (ingredientes.includes("tocineta")) {
                    costoIngredientes += 3000;
                }
                if (ingredientes.includes("pavo")) {
                    costoIngredientes += 3000;
                }
                if (ingredientes.includes("queso")) {
                    costoIngredientes += 2500;
                }
                let totalSandwich = costoSandwichBase + costoIngredientes;
                console.log(`El costo total del sándwich es: $${totalSandwich}.`);

                break

        case "15" :

                // Salir del menú
                opcion = 15;
                alert("Saliendo del menú...");
                break;


        default :
                alert("Usted ha seleccionado un caracter que el programa no reconoce en ninguno de sus casos, por favor, proporcione uno diferente.")

    }
}
