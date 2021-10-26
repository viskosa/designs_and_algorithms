// Imagine a complex object that requires step-by-step initialization of many fields and nested objects. 
// Such initialization code is usually buried inside a huge constructor with lots of parameters.  
// Often most of the parameters will be unused, making the constructor calls  ugly. 
// The Builder pattern suggests you extract the object construction code out of its own class 
// and move it to separate objects called 'builders'. The pattern organizes object construction 
// into a set of steps. To create an object, you execute a series of these steps on a builder object. 
// The important part is that you do not need to call all the steps at a time. 
// You can call only those steps that are necessary for producing a particular configuration of an object. 

// You can go further and extract a series of calls to the builder steps you use to construct a product into a separate class called director. 
// The director class defines the order in which to execute the building steps, while the builder provides the implementation for those steps. 
// Having a director class in your program is not necessary. You can always call the building steps in a specific order directly from the client code.


// This example of the Builder pattern illustrates how you can reuse the same object construction code when building diverse types of products, 
// such as cars, and create the corresponding manuals for them. 

class Car {}

interface Builder {
    reset();
    setSeats(n: Number);
    setEngine(n: String);
    setTripComputer(n: Boolean);
    setGPS(n: Boolean);
}

class CarBuilder implements Builder {
    private car: Car;

    constructor() {
        this.reset();
    }

    reset() { this.car = new Car(); }
    setSeats() {}
    setEngine() {}
    setTripComputer() {}
    setGPS() {}

    getProduct(): Car {
        const product = this.car;
        this.reset();
        return product;
    }
}

// A car is a complex object that can be constructed in a hundred diverse ways. Instead of bloating the Car class with a huge constructor, 
// we extract the car assembly code into a separate car builder class. This class has a set of methods for configuring various parts of a car. 
// Director accept Builder:
class Director {
  private builder: Builder;

  setBuilder(b: Builder) {
      this.builder = b;
  }

  makeSportCar(b: Builder = this.builder) {
      b.reset();
      b.setSeats(2);
      b.setEngine('V12');
      b.setTripComputer(true);
      b.setGPS(true);
  }
}

const director = new Director();
const builder = new CarBuilder();
director.makeSportCar(builder);


//---------- second example ------------------
class Burger {
  size: any;
  cheeze: any;
  pepperoni: any;
  lettuce: any;
  tomato: any;

  constructor(builder) {
      this.size = builder.size
      this.cheeze = builder.cheeze || false
      this.pepperoni = builder.pepperoni || false
      this.lettuce = builder.lettuce || false
      this.tomato = builder.tomato || false
  }
}

class BurgerBuilder {
  size: number;
  pepperoni: boolean;
  lettuce: boolean;
  cheeze: boolean;
  tomato: boolean;

  constructor(size) {
      this.size = size
  }

  addPepperoni() {
      this.pepperoni = true
      return this
  }

  addLettuce() {
      this.lettuce = true
      return this
  }

  addCheeze() {
      this.cheeze = true
      return this
  }

  addTomato() {
      this.tomato = true
      return this
  }

  build() {
      return new Burger(this)
  }
}

const burger = (new BurgerBuilder(14))
    .addPepperoni()
    .addLettuce()
    .addTomato()
    .build()