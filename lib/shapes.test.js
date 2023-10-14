// Importing Triangle, Square, Circle classes from ./shapes.js
const { Triangle, Square, Circle } = require("./shapes.js");

// Unit testing -> testing for a triangle with an orange background to render (same as following examples)
describe("Triangle test", () => {
    test("test for a triangle with a orange background", () => {
        const shape = new Triangle();
        shape.setColor("orange");
        expect(shape.render()).toEqual(
            '<polygon points="150, 18 244, 182 56, 182" fill="orange" />'
        );
    });
});


describe("Square test", () => {
    test("test for a square with a green background", () => {
      const shape = new Square();
      shape.setColor("green");
      expect(shape.render()).toEqual(
        '<rect x="73" y="40" width="160" height="160" fill="green" />'
      );
    });
  });


describe("Circle test", () => {
    test("test for a circle with a #DAF7A6 background", () => {
      const shape = new Circle();
      shape.setColor("#DAF7A6");
      expect(shape.render()).toEqual(
        '<circle cx="150" cy="115" r="80" fill="#DAF7A6" />'
      );
    });
  });