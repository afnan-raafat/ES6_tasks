class Shape {
  constructor() {
    if (this.constructor === Shape) {
      throw new Error("Cannot instantiate abstract class Shape.");
    }
  }

  area() {
    throw new Error("Method 'area()' must be implemented.");
  }
}

class Square extends Shape {
  constructor(side) {
    super();
    this.side = side;
  }

  area() {
    return this.side * this.side;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius * this.radius;
  }
}

const square = new Square(4);
console.log(`Area of square: ${square.area()}`); 

const rectangle = new Rectangle(5, 3);
console.log(`Area of rectangle: ${rectangle.area()}`);

const circle = new Circle(3);
console.log(`Area of circle: ${circle.area().toFixed(2)}`); 
