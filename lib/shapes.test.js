// Importing Triangle, Square, Circle classes from ./shapes.js
const { Triangle, Square, Circle } = require("./shapes.js");

// Unit testing -> testing for a triangle with an orange background to render
describe("Triangle test", () => {
    test("test for a triangle with a orange background", () => {
        const shape = new Triangle();
        shape.setColor("orange");
        expect(shape.render()).toEqual(
            '<polygon points="150, 18 244, 182 56, 182" fill="orange" />'
        );
    });
});