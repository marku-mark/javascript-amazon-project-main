class Car {
  brand;
  model;
  speed;
  isTrunkOpen;

  constructor(carDetails){
    this.brand = carDetails.brand;
    this.model = carDetails.model;
    this.speed = carDetails.speed;
    this.isTrunkOpen = carDetails.isTrunkOpen;
  };

  #displayInfo(){
    console.log(`${this.brand}: ${this.model} - Speed: ${this.speed} km/h, ${this.isTrunkOpen ? 'open' : 'closed'}`);
  }

  showInfo(){
    this.#displayInfo();
  }

  go(){
    if (this.isTrunkOpen === false) {
    if (this.speed <= 200){
    this.speed += 5;
    }}
    return;
  }

  brake(){
    if(this.speed > 0){
    this.speed -= 5;
    }
  }

  openTrunk(){
    this.isTrunkOpen = true;
  }

  closeTrunk(){
    this.isTrunkOpen = false;
  }
}


class RaceCar extends Car {
  acceleration;

  constructor(carDetails){
    super(carDetails);
    this.acceleration = carDetails.acceleration;
  }

  go(){
    if (this.speed <= 300){
      this.speed += this.acceleration;
    }
  }

  openTrunk(){
    console.log("RaceCar has no trunk");
    return;
  }
  
  closeTrunk(){
    console.log("RaceCar has no trunk");
    return;
  }
}

const car1 = new Car({
    brand: 'Toyota', 
    model: 'Corolla',
    speed: 0,
  }
);

const car2 = new Car({
    brand: 'Tesla',
    model: 'Model 3',
    speed: 0,
  }
);

const car3 = new RaceCar({
  brand: 'Mclaren',
  model: 'F1',
  speed: 0,
  acceleration: 20,
});


car1.openTrunk();
car2.closeTrunk();

car1.go();
car2.go();
car3.go();

car1.showInfo();
car2.showInfo();
car3.showInfo();







