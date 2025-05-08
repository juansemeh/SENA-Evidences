/**
 * Loop menu with example exercises using alert, confirm, and prompt for interaction.
 */

// Exercise 1: Simple greeting
function exercise1() {
    const name = prompt("Exercise 1: What is your name?");
    if (name) {
        alert(`Hello, ${name}! Welcome to Exercise 1.`);
    } else {
        alert("You didn't enter a name.");
    }
}

// Exercise 2: Age check
function exercise2() {
    const ageStr = prompt("Exercise 2: How old are you?");
    const age = Number(ageStr);
    if (isNaN(age)) {
        alert("That's not a valid number.");
    } else if (age < 18) {
        alert("You are a minor.");
    } else {
        alert("You are an adult.");
    }
}

// Exercise 3: Confirm subscription
function exercise3() {
    const subscribe = confirm("Exercise 3: Do you want to subscribe to our newsletter?");
    if (subscribe) {
        alert("Thank you for subscribing!");
    } else {
        alert("Maybe next time.");
    }
}

// Menu loop
function menu() {
    let exit = false;
    while (!exit) {
        const choice = prompt(
            "Select an exercise to run:\n" +
            "1. Greeting\n" +
            "2. Age Check\n" +
            "3. Subscription Confirmation\n" +
            "4. Exit\n" +
            "Enter the number of your choice:"
        );

        switch (choice) {
            case "1":
                exercise1();
                break;
            case "2":
                exercise2();
                break;
            case "3":
                exercise3();
                break;
            case "4":
                exit = true;
                alert("Exiting the menu. Goodbye!");
                break;
            default:
                alert("Invalid choice. Please enter a number between 1 and 4.");
        }
    }
}

// Start the menu
menu();
