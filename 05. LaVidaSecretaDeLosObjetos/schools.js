class Person {
  name;

  constructor(name) {
    this.name = name;
  }

  introduceSelf() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

class Professor extends Person {
  teaches;

  constructor(name, teaches) {
    super(name);
    this.teaches = teaches;
  }

  introduceSelf() {
    console.log(
      `Hello, I am ${this.name} and I will be your ${this.teaches} professor`
    );
  }

  grade(paper) {
    const grade = Math.floor(Math.random() * (5 - 1) + 1);
    console.log(grade);
  }
}

class Student extends Person {
  #year;

  constructor(name, year) {
    super(name);
    this.#year = year;
  }

  introduceSelf() {
    console.log(`Hi! I'm ${this.name}, and I'm in year ${this.#year}.`);
  }

  canStudyArchery() {
    return this.#year > 1;
  }
}

class privateClasses {
  publicMethod() {
    this.#privateMethod();
  }

  #privateMethod() {
    console.log("Hello i'm a private method");
  }
}

// Professors
let mate = new Professor("Nestor", "Math");
mate.introduceSelf();
mate.grade("Maths");

// Students
let paul = new Student("Paul", 2);
paul.introduceSelf();
console.log(paul.canStudyArchery());;

// Private method
const private = new privateClasses();
private.publicMethod();
