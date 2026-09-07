import datt from "../../js/datt.js";

const data = {
  description: `Hayat Battleship Calculator is a browser-based tactical simulation 
and calculation tool designed for modeling space combat scenarios. It focuses 
on accurate representation of battleships, sub-units, and their interactions 
within a configurable 2D map. Users can place objects, configure ship modules, 
simulate movement and combat steps, and analyze results in a clear and visual way.`,

  features: [
    'Interactive tactical map with scalable grid, layers, and overlays',
    'Dynamic object management: add, remove, and modify ships, drones, missiles, and other entities',
    'Step-based simulation engine for controlled and repeatable calculations',
    'Modular ship system with internal and external modules, states, and overrides',
    'Physics-driven movement and combat logic, including acceleration, fuel, damage, and explosions',
    'Scenario and state persistence (save/load)',
    'Detailed HUD and logs for inspecting object states and simulation steps',
  ],

  stack: [
    'JavaScript (ES Modules) - core logic and architecture',
    'HTML5 & CSS3 - structure and UI styling, template system',
    'Canvas API - map, objects, and overlays rendering',
    'JSON-based data models - ships, modules, weapons, and schemas',
    'Custom event system - simulation flow and UI interaction',
    'No external frameworks - vanilla JS and custom utilities',
  ],

  conclusion: `This project demonstrates the power of complex client-side 
architecture, robust data-driven design, and precise simulation logic. Hayat 
Battleship Calculator excels in providing a highly interactive and customizable 
experience, enabling users to experiment with tactical scenarios in depth. Its 
modular structure ensures scalability and maintainability, while the clear 
separation between data, physics, rendering, and UI enhances both performance 
and usability. Overall, it stands out as a versatile and powerful tool, ready 
for expansion into more advanced strategy or simulation applications.`
}

export default async function (root) {
  data.html = await (await fetch('./projects/HayatBattleshipCalculator/main.html')).text();
  root.innerHTML = data.html;
  
  datt(root, data);
}