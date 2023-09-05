// Importing required modules
const inquirer = require("inquirer");
const fs = require("fs");
const shapes = require("./lib/shapes");

// Array of questions for user prompts
const questions = [
  {
    type: "input",
    name: "text",
    message: "Enter up to three characters for your logo:",
    // Validation to ensure the entered text is up to three characters
    validate: function (value) {
      if (value.length > 3) {
        return "Please enter up to three characters.";
      }
      return true;
    },
  },
  {
    type: "input",
    name: "textColor",
    message: "Enter a color keyword (OR a hexadecimal number) for your text:",
    // Validation to ensure a color keyword or hex value is provided
    validate: function (value) {
      if (value.length < 1) {
        return "Please enter a color keyword (OR a hexadecimal number).";
      }
      return true;
    },
  },
  {
    type: "list",
    name: "shape",
    message: "Select a shape for your logo:",
    choices: ["Circle", "Triangle", "Square"], // Choices for the shapes
  },
  {
    type: "input",
    name: "shapeColor",
    message: "Enter a color keyword (OR a hexadecimal number) for your shape:",
    // Validation to ensure a color keyword or hex value is provided
    validate: function (value) {
      if (value.length < 1) {
        return "Please enter a color keyword (OR a hexadecimal number).";
      }
      return true;
    },
  },
];

/**
 * Function to write data to a file
 * @param {string} fileName - The name of the file to be written to.
 * @param {string} data - The data to be written.
 */
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (err) {
    if (err) {
      return console.log(err);
    }
    console.log("Generated " + fileName); // Notify that the file has been generated
  });
}

/**
 * Initialize the command-line application. 
 * - Prompts the user to answer a set of questions.
 * - Generate an SVG logo based on the answers.
 * - Writes the SVG content to a file.
 */
function init() {
  inquirer.prompt(questions).then((response) => {
    const shape = new shapes[response.shape]();
    shape.setColor(response.shapeColor);
    shape.setText(response.text);
    shape.setTextColor(response.textColor);

    // Wrap the shape's render output in an SVG root element
    const svgContent = `
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
${shape.render()}
</svg>
        `;

    writeToFile("dist/logo.svg", svgContent.trim()); // Save the SVG content to 'dist/logo.svg'
  });
}

// Start the application
init();

// Export the init function for potential external use
module.exports = init;
