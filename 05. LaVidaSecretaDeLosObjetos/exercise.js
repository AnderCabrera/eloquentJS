class Mapp {
  datos;

  constructor() {
    this.datos = [];
  }

  add(value) {
    if (!this.has(value)) {
      this.datos.push(value);
    }
  }

  delete(value) {
    if (this.has(value)) {
      let indexValue = this.datos.indexOf(value);
      this.datos.splice(indexValue, 1);
    }
  }

  has(value) {
    for (const element of this.datos) {
      if (value === element) return true;
    }

    return false;
  }

  from(collection) {
    for (const element of collection) {
      if (!this.has(element)) {
        this.datos.push(element);
      }
    }
  }
}

let grupo = new Mapp();

console.log(grupo.from([10, 20]));
console.log(grupo.has(10));
// → true
console.log(grupo.has(30));
// → false
grupo.add(10);
grupo.delete(10);
console.log(grupo.has(10));