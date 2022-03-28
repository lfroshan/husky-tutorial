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
