// 1. Calcular el factorial de un número
function calcularFactorial(numero) {
    if (numero < 0) return null;
    let factorial = 1;
    for (let i = 2; i <= numero; i++) {
        factorial *= i;
    }
    return factorial;
}

// 2. Verificar si un número es primo
function verificarNumeroPrimo(numero) {
    if (numero <= 1) return false;
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) return false;
    }
    return true;
}

// 3. Calcular la suma de dígitos de un número
function calcularSumaDigitos(numero) {
    if (isNaN(numero)) return NaN;
    let suma = 0;
    const strNum = numero.toString();
    for (let i = 0; i < strNum.length; i++) {
        if (strNum[i] !== '.') {
            suma += parseInt(strNum[i]);
        }
    }
    return suma;
}

// 4. Generar una serie de Fibonacci hasta un límite
function generarSerieFibonacci(limite) {
    if (limite <= 0) return [];
    if (limite === 1) return [0];
    const serie = [0, 1];
    for (let i = 2; i < limite; i++) {
        serie.push(serie[i-1] + serie[i-2]);
    }
    return serie.slice(0, limite);
}

// 5. Invertir una cadena de texto
function invertirCadena(cadena) {
    let invertida = '';
    for (let i = cadena.length - 1; i >= 0; i--) {
        invertida += cadena[i];
    }
    return invertida;
}

// 6. Calcular el máximo común divisor de dos números
function calcularMCD(a, b) {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

// 7. Contar las vocales en una cadena de texto
function contarVocales(cadena) {
    const vocales = ['a', 'e', 'i', 'o', 'u', 'á', 'é', 'í', 'ó', 'ú'];
    let contador = 0;
    for (let char of cadena.toLowerCase()) {
        if (vocales.includes(char)) contador++;
    }
    return contador;
}

// 8. Calcular la potencia de un número
function calcularPotencia(base, exponente) {
    let resultado = 1;
    for (let i = 0; i < exponente; i++) {
        resultado *= base;
    }
    return resultado;
}

// 9. Verificar si un texto es palindrómico
function verificarPalindromo(texto) {
    if (typeof texto !== 'string') return false;
    const limpio = texto.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const longitud = limpio.length;
    for (let i = 0; i < longitud/2; i++) {
        if (limpio[i] !== limpio[longitud - 1 - i]) return false;
    }
    return true;
}

// 10. Calcular la suma de los divisores de un número
function calcularSumaDivisores(numero) {
    if (numero <= 1) return 0;
    let suma = 0;
    for (let i = 1; i < numero; i++) {
        if (numero % i === 0) suma += i;
    }
    return suma;
}


function mostrarMenu() {
    let opcion;
    while(opcion !== "11") {
        opcion = prompt(`Escriba un número para elegir ejercicio:
1. Calcular factorial
2. Verificar número primo
3. Sumar dígitos
4. Generar serie Fibonacci
5. Invertir cadena
6. Calcular MCD
7. Contar vocales
8. Calcular potencia
9. Verificar palíndromo
10. Sumar divisores
11. Salir`);

        switch(opcion) {
            case "1":
                const numFactorial = Number(prompt("Ingrese un número para calcular su factorial:"));
                console.log(`El factorial de ${numFactorial} es:`, calcularFactorial(numFactorial));
                break;
            case "2":
                const numPrimo = Number(prompt("Ingrese un número para verificar si es primo:"));
                console.log(`¿${numPrimo} es primo?`, verificarNumeroPrimo(numPrimo));
                break;
            case "3":
                const numSumaDigitos = Number(prompt("Ingrese un número para sumar sus dígitos:"));
                console.log(`La suma de dígitos de ${numSumaDigitos} es:`, calcularSumaDigitos(numSumaDigitos));
                break;
            case "4":
                const limiteFibonacci = Number(prompt("Ingrese el límite para la serie Fibonacci:"));
                console.log("Serie Fibonacci:", generarSerieFibonacci(limiteFibonacci));
                break;
            case "5":
                const cadenaInvertir = prompt("Ingrese una cadena para invertir:");
                console.log(`Cadena invertida: ${invertirCadena(cadenaInvertir)}`);
                break;
            case "6":
                const num1MCD = Number(prompt("Ingrese el primer número para calcular MCD:"));
                const num2MCD = Number(prompt("Ingrese el segundo número para calcular MCD:"));
                console.log(`MCD de ${num1MCD} y ${num2MCD} es:`, calcularMCD(num1MCD, num2MCD));
                break;
            case "7":
                const cadenaVocales = prompt("Ingrese una cadena para contar vocales:");
                console.log(`Número de vocales: ${contarVocales(cadenaVocales)}`);
                break;
            case "8":
                const basePotencia = Number(prompt("Ingrese la base:"));
                const exponentePotencia = Number(prompt("Ingrese el exponente:"));
                console.log(`${basePotencia}^${exponentePotencia} =`, calcularPotencia(basePotencia, exponentePotencia));
                break;
            case "9":
                const textoPalindromo = prompt("Ingrese un texto para verificar si es palíndromo:");
                console.log(`¿"${textoPalindromo}" es palíndromo?`, verificarPalindromo(textoPalindromo));
                break;
            case "10":
                const numDivisores = Number(prompt("Ingrese un número para sumar sus divisores:"));
                console.log(`Suma de divisores de ${numDivisores}:`, calcularSumaDivisores(numDivisores));
                break;
            case "11":
                alert("Saliendo del menú...");
                break;
            default:
                alert("Opción no válida");
        }
    }
}


mostrarMenu();
