# Juan Sebastián Uribe Lesmes  Ficha 3144622
This is my first GitHub repository. Here i added the JavaScript exercises i was asigned from the instructor Arle Morales, and a Vite + Vue3 Application that can run every exercise in the browser with an TailwindCSS integration.

# JavaScript Exercises Runner

  

This project is a Vue 3 application that allows you to navigate and run JavaScript exercises organized in categories. It uses a dynamic navbar to select exercises from the public folder and runs the code using a custom CodeRunner component.

  

## Features

  

- Dynamic navigation of exercises grouped by categories

- Responsive navbar with dropdown menus for desktop and collapsible menus for mobile

- CodeRunner component to display and run JavaScript exercises with output

- Built with Vue 3, Vite, TailwindCSS, Headless UI, and Heroicons

  

## Prerequisites

  

- Node.js (version 14 or higher recommended)

- npm (comes with Node.js)

  

## Installation

  

1. Clone the repository:

  

```bash

git clone https://github.com/MrPolvos/repositorio-sena

cd repositorio-sena/vue-app

```

  

2. Install dependencies:

  

```bash

npm install

```

  

## Running the Development Server

  

Start the development server with:

  

```bash

npm run dev

```

  

This will start the Vite dev server. Open your browser and navigate to:

```

http://localhost:5173/

```

  

## Project Structure

  

- `public/Ejercicios principales/`: Contains JavaScript exercise files organized by category folders.

- `src/components/`: Vue components including `Navbar.vue` and `CodeRunner.vue`.

- `src/exercises.json`: JSON file listing all exercises grouped by category, used to generate the navbar.

- `src/App.vue`: Main application component managing state and rendering navbar and code runner.

- `vite.config.js`: Vite configuration file.

- `package.json`: Project dependencies and scripts.

  

## How to Use

  

- Use the navbar to select an exercise category.

- Click on an exercise to load its code in the CodeRunner.

- Click the "Run Code" button to execute the JavaScript code and see the output.

- The app is responsive and works on desktop and mobile devices.

  

## Dependencies

  

- Vue 3

- Vite

- TailwindCSS

- Headless UI Vue

- Heroicons Vue