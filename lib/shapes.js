// Create shape class to utilize constructor to define the shapes
class Shape {
    constructor() {
        this.color = "";
    }
    setColor(colorVar) {
        this.color = colorVar;
    }
}
// Triangle (and following) classes inherit properties defined in Shape class
class Triangle extends Shape {
    render() {
        // Returns polygon with color input
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
}  
class Square extends Shape {
    render() {
      // Returns polygon with color input
      return `<rect x="73" y="40" width="160" height="160" fill="${this.color}" />`;
    }
  }