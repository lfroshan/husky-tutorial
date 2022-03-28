class Car {
  constructor(brand) {
    this.brand = brand;
  }
}

class Model extends Car {
  constructor(brand, model) {
    super(brand);
    this.model = model;
  }

  get modelName() {
    return this.model;
  }

  get brandName() {
    return this.brand;
  }

  set modelName(model) {
    this.model = model;
  }

  set brandName(brand) {
    this.brand = brand;
  }
}

const kia = new Model("Hyundai", "i20");
console.log(kia);
console.log(
  "This line is not properly written in local but this will be properly maintained in git because of husky."
);
console.log();

         console.log("again another line.");

console.log("removed prettier.")
