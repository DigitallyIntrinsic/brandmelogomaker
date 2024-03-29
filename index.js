// Inquirer (node package manager) import
const inquirer = require("inquirer");

// File system module (node package manager) import
const fs = require("fs");

// Importing classes from ./lib/shapes directory
const { Triangle, Square, Circle } = require("./lib/shapes");

// Function writes the SVG file using user answers from inquirer prompts
function writeToFile(fileName, answers) {

    let svgString = "";

    svgString =
        '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
    // <g> tag wraps <text> tag so that user font input layers on top of polygon -> not behind
    svgString += "<g>";

    svgString += `${answers.shape}`;

    // Conditional check takes users input from choices array and then adds polygon properties and shape color to SVG string
    let shapeChoice;
    if (answers.shape === "Triangle") {
        shapeChoice = new Triangle();
        svgString += `<polygon points="150, 18 244, 182 56, 182" fill="${answers.shapeBackgroundColor}"/>`;
    } else if (answers.shape === "Square") {
        shapeChoice = new Square();
        svgString += `<rect x="73" y="40" width="160" height="160" fill="${answers.shapeBackgroundColor}"/>`;
    } else {
        shapeChoice = new Circle();
        svgString += `<circle cx="150" cy="115" r="80" fill="${answers.shapeBackgroundColor}"/>`;
    }
    // <text> tag gives rise to text alignment, text-content/text-color taken in from user prompt and gives default font size of "40"
    svgString += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${answers.textColor}">${answers.text}</text>`;
    svgString += "</g>";
    svgString += "</svg>";

    // Using file system module to generate svg file 
    fs.writeFile(fileName, svgString, (err) => {
        err ? console.log(err) : console.log("Generated logo.svg");
    });
}

// This function utilizes inquirer to prompt the user to answer questions in the command line and save user input
function promptUser() {
    inquirer
        .prompt([
            {
                type: "input",
                message:
                    "What text would you like you logo to display? (Enter up to three characters)",
                name: "text",
            },
            {
                type: "input",
                message:
                  "Please choose the shape's text color (Enter color keyword OR a hexadecimal number)",
                name: "textColor",
              },
              {
                type: "list",
                message: "What shape would you like the logo to render?",
                choices: ["Triangle", "Square", "Circle"],
                name: "shape",
              },
              {
                type: "input",
                message:
                  "Please choose the shape's backgound color (Enter color keyword OR a hexadecimal number)",
                name: "shapeBackgroundColor",
              },
            ])
            .then((answers) => {
                // Error handling for text prompt (user must enter 3 characters or less for logo to generate)
                if (answers.text.length > 3) {
                  console.log("Must enter a value of no more than 3 characters");
                  promptUser();
                } else {
                  // Calling write file function to generate SVG file
                  writeToFile("logo.svg", answers);
                }
              });
          }

          promptUser();