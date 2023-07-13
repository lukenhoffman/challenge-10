const fs = require('fs');
const readline = require('readline-sync');

function generateLogo() {
  // Prompt for text input
  const text = readline.question('Enter up to three characters: ');

  // Prompt for text color input
  const textColor = readline.question('Enter text color (keyword or hexadecimal): ');

  // Prompt for shape selection
  const shapes = ['circle', 'triangle', 'square'];
  console.log('Choose a shape:');
  shapes.forEach((shape, index) => {
    console.log(`${index + 1}. ${shape}`);
  });
  const shapeChoice = Number(readline.question('Enter shape number: ')) - 1;

  // Prompt for shape color input
  const shapeColor = readline.question('Enter shape color (keyword or hexadecimal): ');

  // Create SVG string
  const svgString = `
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="0 0 300 200">
      <rect width="100%" height="100%" fill="${shapeColor}" />
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}" font-size="64">${text}</text>
    </svg>
  `;

  // Write SVG string to file
  fs.writeFileSync('logo.svg', svgString);

  console.log('Generated logo.svg');
}

// Generate the logo
generateLogo();
