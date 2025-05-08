function calcularSalario() {
    let nombre = "Ana López";
    let horas = 15;
    let salario = horas <= 10 ? horas * 30000 : horas * 33000;
    console.log(`Señor/a ${nombre}, el número de horas es ${horas} y su salario equivale a ${salario}`);
}

function determinarParImpar(numero) {
    if (numero % 2 === 0) {
        console.log(`${numero} es par.`);
    } else {
        console.log(`${numero} es impar.`);
    }
}

function calcularCostoLavadoras(tipoLavadora, cantidad, horasAlquiler) {
    let costoBase = tipoLavadora === 1 ? 4000 : 3000;
    let total = cantidad * horasAlquiler * costoBase;
    if (cantidad > 3) {
        total *= 0.97;
    }
    console.log(`Costo total por alquilar ${cantidad} lavadoras tipo ${tipoLavadora} por ${horasAlquiler} horas: $${total}.`);
}

function calcularRendimientoAcademico(fisica, quimica, biologia, matematicas, informatica) {
    let porcentaje = ((fisica + quimica + biologia + matematicas + informatica) / 50) * 100;
    let calificacion = porcentaje <= 59.9 ? "Mala" : porcentaje <= 80 ? "Buena" : "Excelente";
    console.log(`Tu porcentaje es ${porcentaje}% y tu calificación es ${calificacion}.`);
}

function encontrarNumeroMayor(num1, num2, num3) {
    let mayor = num1;
    if (num2 > mayor) mayor = num2;
    if (num3 > mayor) mayor = num3;
    console.log(`El número mayor es ${mayor}.`);
}

function calcularAyudaEconomica(genero, edad) {
    let ayuda = genero === "femenino" ? (edad > 50 ? 120000 : edad >= 30 ? 100000 : 0) : 40000;
    console.log(`El valor de ayuda mensual es: $${ayuda}.`);
}

function calcularCostoGimnasio(dias) {
    let costoGimnasio = dias === 15 ? 18000 : dias === 30 ? 35000 : dias === 90 ? 86000 : 0;
    console.log(`El costo por ${dias} días es: $${costoGimnasio}.`);
}

function verificarTriangulo(angulo1, angulo2, angulo3) {
    if (angulo1 + angulo2 + angulo3 === 180) {
        console.log("El triángulo es válido.");
    } else {
        console.log("El triángulo no es válido.");
    }
}

function calcularCostoImpresion(copias) {
    let precioPorCopia = copias < 500 ? 120 : copias < 750 ? 100 : copias < 1000 ? 80 : 50;
    let totalCosto = copias * precioPorCopia;
    console.log(`El precio por copia es $${precioPorCopia} y el costo total es $${totalCosto}.`);
}

function diagnosticarComputadora(pitido, discoDuroGira) {
    if (pitido && discoDuroGira) {
        console.log("Póngase en contacto con el técnico de apoyo.");
    } else if (pitido && !discoDuroGira) {
        console.log("Verificar contactos de la unidad.");
    } else if (!pitido && !discoDuroGira) {
        console.log("Traiga la computadora para repararla en la central.");
    } else {
        console.log("Compruebe las conexiones de altavoces.");
    }
}

function verificarAutoDefectuoso(modelo) {
    let defectuosos = [119, 179, 189, 190, 191, 192, 193, 194, 195, 221, 780];
    if (defectuosos.includes(modelo)) {
        console.log("El automóvil está defectuoso, llevar a garantía.");
    } else {
        console.log("Su automóvil no está defectuoso.");
    }
}

function calcularCostoOperador(operador, minutosInternacionales) {
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
}

function calcularCostoSandwich(tamaño, ingredientes) {
    let costoSandwichBase = tamaño === "pequeño" ? 6000 : 12000;
    let costoIngredientes = 0;
    if (ingredientes.includes("tocineta")) costoIngredientes += 3000;
    if (ingredientes.includes("pavo")) costoIngredientes += 3000;
    if (ingredientes.includes("queso")) costoIngredientes += 2500;
    let totalSandwich = costoSandwichBase + costoIngredientes;
    console.log(`El costo total del sándwich es: $${totalSandwich}.`);
}

let opcion;
while(opcion !== 15) {
    opcion = prompt("Escriba un numero del 1 hasta el 15 para elegir los siguientes ejercicios: 1. Cálculo de salario 2. Determinar si un número es par o impar 3. Cálculo de costo de alquiler de lavadoras 4. Determinar si un número dado es par o impar 5. Cálculo de rendimiento academico 6. Encontrar el número mayor entre tres numeros 7. Cálculo de ayuda economica 8. Cálculo de costo de gimnasio 9. Verificar si un triangulo es valido 10. Cálculo costo de una impresión 11. Diagnóstico de computadora 12. Verificar si un automóvil esta defectuoso 13. Cálculo de costo de un operador de celular 14. Cálculo de costo de un sandwich 15. Salir");

    switch(opcion) {
        case "1": calcularSalario(); break;
        case "2": determinarParImpar(7); break;
        case "3": calcularCostoLavadoras(1, 4, 5); break;
        case "4": determinarParImpar(Number(prompt("Ingrese un numero"))); break;
        case "5": calcularRendimientoAcademico(8, 7, 9, 10, 8); break;
        case "6": encontrarNumeroMayor(10, 20, 15); break;
        case "7": calcularAyudaEconomica("femenino", 35); break;
        case "8": calcularCostoGimnasio(30); break;
        case "9": verificarTriangulo(60, 60, 60); break;
        case "10": calcularCostoImpresion(600); break;
        case "11": diagnosticarComputadora(true, false); break;
        case "12": verificarAutoDefectuoso(195); break;
        case "13": calcularCostoOperador("Tigo", 30); break;
        case "14": calcularCostoSandwich("grande", ["tocineta", "queso"]); break;
        case "15": 
            opcion = 15;
            alert("Saliendo del menú...");
            break;
        default:
            alert("Usted ha seleccionado un caracter que el programa no reconoce en ninguno de sus casos, por favor, proporcione uno diferente.");
    }
}
