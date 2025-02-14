class Animal {
  constructor(name, legCount, speaks) {
    this.name = name;
    this.legCount = legCount;
    this.speaks = speaks;
  }

  static myType() {
    // the static are only associate with only class but not with objects
    console.log("Animal");
  }
  describe() {
    return `${this.name} has ${this.legCount} legs and it ${this.speaks}`;
  }
}

console.log(Animal.myType());
let dog = new Animal("Dog", 4, "bhow bhow"); // create an object
console.log(dog.describe()); // call function on object

// classes means give out a structure of something that is resuable in multiple places
