import * as readline from 'readline';

// Configure readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Helper function to get user input
const question = (prompt: string): Promise<string> => {
    return new Promise((resolve) => {
        rl.question(prompt, (answer) => {
            resolve(answer);
        });
    });
};

// Function to clear console
const clearConsole = (): void => {
    console.clear();
};

// 1. Calculate factorial of a number
function calculateFactorial(number: number): number | null {
    if (number < 0) return null;
    let factorial = 1;
    for (let i = 2; i <= number; i++) {
        factorial *= i;
    }
    return factorial;
}

// 2. Check if a number is prime
function isPrime(number: number): boolean {
    if (number <= 1) return false;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
    }
    return true;
}

// 3. Calculate sum of digits in a number
function calculateDigitSum(number: number): number {
    if (isNaN(number)) return NaN;
    let sum = 0;
    const strNum = number.toString();
    for (let i = 0; i < strNum.length; i++) {
        if (strNum[i] !== '.') {
            sum += parseInt(strNum[i]);
        }
    }
    return sum;
}

// 4. Generate Fibonacci sequence up to a limit
function generateFibonacciSequence(limit: number): number[] {
    if (limit <= 0) return [];
    if (limit === 1) return [0];
    const sequence = [0, 1];
    for (let i = 2; i < limit; i++) {
        sequence.push(sequence[i-1] + sequence[i-2]);
    }
    return sequence.slice(0, limit);
}

// 5. Reverse a string
function reverseString(text: string): string {
    let reversed = '';
    for (let i = text.length - 1; i >= 0; i--) {
        reversed += text[i];
    }
    return reversed;
}

// 6. Calculate Greatest Common Divisor (GCD)
function calculateGCD(a: number, b: number): number {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

// 7. Count vowels in a string
function countVowels(text: string): number {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'á', 'é', 'í', 'ó', 'ú'];
    let count = 0;
    for (let char of text.toLowerCase()) {
        if (vowels.includes(char)) count++;
    }
    return count;
}

// 8. Calculate power of a number
function calculatePower(base: number, exponent: number): number {
    let result = 1;
    for (let i = 0; i < exponent; i++) {
        result *= base;
    }
    return result;
}

// 9. Check if text is palindrome
function isPalindrome(text: string): boolean {
    if (typeof text !== 'string') return false;
    const cleaned = text.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const length = cleaned.length;
    for (let i = 0; i < length/2; i++) {
        if (cleaned[i] !== cleaned[length - 1 - i]) return false;
    }
    return true;
}

// 10. Calculate sum of divisors
function calculateDivisorsSum(number: number): number {
    if (number <= 1) return 0;
    let sum = 0;
    for (let i = 1; i < number; i++) {
        if (number % i === 0) sum += i;
    }
    return sum;
}

async function showMenu(): Promise<void> {
    let option: string = '';  // Initialize with empty string
    
    do {
        clearConsole();
        console.log(`
=== EXERCISE MENU ===
1. Calculate Factorial
2. Check Prime Number
3. Sum Digits
4. Generate Fibonacci Sequence
5. Reverse String
6. Calculate GCD
7. Count Vowels
8. Calculate Power
9. Check Palindrome
10. Sum Divisors
11. Exit
`);

        try {
            option = await question('Select an option: ');

            switch(option) {
                case "1": {
                    const numFactorial = Number(await question("Enter a number to calculate its factorial: "));
                    if (isNaN(numFactorial)) throw new Error("Invalid input: Please enter a valid number");
                    console.log(`Factorial of ${numFactorial} is: ${calculateFactorial(numFactorial)}`);
                    break;
                }
                case "2": {
                    const numPrime = Number(await question("Enter a number to check if it's prime: "));
                    if (isNaN(numPrime)) throw new Error("Invalid input: Please enter a valid number");
                    console.log(`Is ${numPrime} prime? ${isPrime(numPrime)}`);
                    break;
                }
                case "3": {
                    const numDigitSum = Number(await question("Enter a number to sum its digits: "));
                    if (isNaN(numDigitSum)) throw new Error("Invalid input: Please enter a valid number");
                    console.log(`Sum of digits in ${numDigitSum} is: ${calculateDigitSum(numDigitSum)}`);
                    break;
                }
                case "4": {
                    const fibLimit = Number(await question("Enter the limit for Fibonacci sequence: "));
                    if (isNaN(fibLimit)) throw new Error("Invalid input: Please enter a valid number");
                    console.log("Fibonacci sequence:", generateFibonacciSequence(fibLimit));
                    break;
                }
                case "5": {
                    const strToReverse = await question("Enter a string to reverse: ");
                    console.log(`Reversed string: ${reverseString(strToReverse)}`);
                    break;
                }
                case "6": {
                    const num1GCD = Number(await question("Enter first number for GCD: "));
                    const num2GCD = Number(await question("Enter second number for GCD: "));
                    if (isNaN(num1GCD) || isNaN(num2GCD)) throw new Error("Invalid input: Please enter valid numbers");
                    console.log(`GCD of ${num1GCD} and ${num2GCD} is: ${calculateGCD(num1GCD, num2GCD)}`);
                    break;
                }
                case "7": {
                    const strVowels = await question("Enter a string to count vowels: ");
                    console.log(`Number of vowels: ${countVowels(strVowels)}`);
                    break;
                }
                case "8": {
                    const basePower = Number(await question("Enter the base: "));
                    const exponentPower = Number(await question("Enter the exponent: "));
                    if (isNaN(basePower) || isNaN(exponentPower)) throw new Error("Invalid input: Please enter valid numbers");
                    console.log(`${basePower}^${exponentPower} = ${calculatePower(basePower, exponentPower)}`);
                    break;
                }
                case "9": {
                    const textPalindrome = await question("Enter text to check if it's a palindrome: ");
                    console.log(`Is "${textPalindrome}" a palindrome? ${isPalindrome(textPalindrome)}`);
                    break;
                }
                case "10": {
                    const numDivisors = Number(await question("Enter a number to sum its divisors: "));
                    if (isNaN(numDivisors)) throw new Error("Invalid input: Please enter a valid number");
                    console.log(`Sum of divisors of ${numDivisors}: ${calculateDivisorsSum(numDivisors)}`);
                    break;
                }
                case "11":
                    console.log("Thank you for using the program!");
                    rl.close();
                    break;
                default:
                    console.log("Invalid option. Press Enter to continue...");
            }

            if (option !== "11") {
                await question("\nPress Enter to continue...");
            }
        } catch (error) {
            console.error(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
            await question("\nPress Enter to continue...");
        }
    } while (option !== "11");
}

// Start the program
showMenu().catch(console.error);