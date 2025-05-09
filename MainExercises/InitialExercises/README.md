# Initial Exercises

This directory contains a collection of initial TypeScript exercises.

## Exercises Included

This project includes the following exercises:

1.  **Blackjack Game**: A command-line based Blackjack card game.
2.  **Traffic Light Simulator**: A simple simulation of a traffic light.

## Project Structure

-   `src/`: Contains the TypeScript source code for the exercises.
    -   `BlackJack.ts`: Implementation of the Blackjack game.
    -   `TrafficLight.ts`: Implementation of the Traffic Light simulator.
-   `package.json`: Defines project metadata, dependencies, and scripts.
-   `tsconfig.json`: Configuration file for the TypeScript compiler.

## How to Run

Ensure you have Node.js and npm (or yarn) installed.

1.  **Install Dependencies**:
    Navigate to the `MainExercises/InitialExercises` directory in your terminal and run:
    ```bash
    npm install
    ```

2.  **Run Exercises**:
    You can run the exercises using the following npm scripts defined in `package.json`:

    -   **To run the Blackjack game:**
        ```bash
        npm run blackjack
        ```

    -   **To run the Traffic Light simulator:**
        ```bash
        npm run traffic
        ```

## Technologies Used

-   TypeScript
-   Node.js
-   ts-node (for running TypeScript files directly)