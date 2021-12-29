function Circle(radios) {
  this.radios,
    (this.getArea = () => {
      return radios ** 2 * Math.PI;
    });
  this.getperimiter = () => {
    return radios * 2 * Math.PI;
  };
}
let myCircle = new Circle(3);
console.log("area is:", myCircle.getArea());
console.log("perimiter is:", myCircle.getperimiter());
