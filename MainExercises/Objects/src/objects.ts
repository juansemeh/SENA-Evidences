import * as readline from 'readline';

// Helper to prompt user input using readline
function promptUser(query: string): Promise<string> {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    return new Promise((resolve) => {
        rl.question(query, (answer) => {
            rl.close();
            resolve(answer.trim());
        });
    });
}

// Helper to simulate alert (console.log)
function alert(message: string): void {
    console.log(message);
}

// Helper to simulate confirm (yes/no)
async function confirm(message: string): Promise<boolean> {
    const answer = await promptUser(`${message} (y/n): `);
    return answer.toLowerCase() === 'y' || answer.toLowerCase() === 'yes';
}

// Exercise 1: Simple greeting
async function exercise1(): Promise<void> {
    try {
        const name = await promptUser("Exercise 1: What is your name? ");
        if (name) {
            alert(`Hello, ${name}! Welcome to Exercise 1.`);
        } else {
            alert("You didn't enter a name.");
        }
    } catch (error) {
        alert("An error occurred in Exercise 1.");
    }
}

// Exercise 2: Age check
async function exercise2(): Promise<void> {
    try {
        const ageStr = await promptUser("Exercise 2: How old are you? ");
        const age = Number(ageStr);
        if (isNaN(age)) {
            alert("That's not a valid number.");
        } else if (age < 18) {
            alert("You are a minor.");
        } else {
            alert("You are an adult.");
        }
    } catch (error) {
        alert("An error occurred in Exercise 2.");
    }
}

// Exercise 3: Confirm subscription
async function exercise3(): Promise<void> {
    try {
        const subscribe = await confirm("Exercise 3: Do you want to subscribe to our newsletter?");
        if (subscribe) {
            alert("Thank you for subscribing!");
        } else {
            alert("Maybe next time.");
        }
    } catch (error) {
        alert("An error occurred in Exercise 3.");
    }
}

// Menu loop
async function menu(): Promise<void> {
    let exit = false;
    while (!exit) {
        try {
            const choice = await promptUser(
                "\nSelect an exercise to run:\n" +
                "1. Greeting\n" +
                "2. Age Check\n" +
                "3. Subscription Confirmation\n" +
                "4. Exit\n" +
                "Enter the number of your choice: "
            );

            switch (choice) {
                case "1":
                    await exercise1();
                    break;
                case "2":
                    await exercise2();
                    break;
                case "3":
                    await exercise3();
                    break;
                case "4":
                    exit = true;
                    alert("Exiting the menu. Goodbye!");
                    break;
                default:
                    alert("Invalid choice. Please enter a number between 1 and 4.");
            }
        } catch (error) {
            alert("An unexpected error occurred in the menu.");
        }
    }
}

// Start the menu
menu();