class Animal {
  constructor(number) {
    console.log("new");
    this.x = number;
    this.y = 20;
    this.color = "red";
  }

  draw() {
    console.log("hahahha");
  }
} // this is a class

const dog = new Animal(5000);
console.log(dog.x);
