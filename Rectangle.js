class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  calcArea(){
    return this.height*this.width;
  }
}
const first = new Rectangle(10, 8);
console.log(first.calcArea());