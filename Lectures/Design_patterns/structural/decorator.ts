// Decorator is a structural design pattern that lets you attach new behaviors to objects 
// by placing these objects inside special wrapper objects that contain the behaviors. 

interface Coffee {
  getCost();
  getDescription();
}

class SimpleCoffee implements Coffee {
  public getCost() { return 10; }
  public getDescription() { return 'Simple coffee' }
}

class CoffeeDecorator implements Coffee {
  protected wrappee: Coffee;

  constructor(coffee: Coffee) {
      this.wrappee = coffee;
  }

  public getCost() { return this.wrappee.getCost(); }
  public getDescription() { return this.wrappee.getDescription(); }
}

// The decorators and the data source class implement the same interface, 
// which makes them all interchangeable in the client code. 
class MilkCoffeeDecorator extends CoffeeDecorator {
  public getCost(): any { return this.wrappee.getCost() + 2; }
  public getDescription(): any { return this.wrappee.getDescription() + 'with milk'; }
}

class WhipCoffeeDecorator extends CoffeeDecorator {
  public getCost(): any { return this.wrappee.getCost() + 3; }
  public getDescription(): any { return this.wrappee.getDescription() + 'and with whip'; }
}

let someCoffee = new SimpleCoffee();
someCoffee.getCost(); // 10
someCoffee.getDescription(); // Simple Coffee
someCoffee = new MilkCoffeeDecorator(someCoffee);
someCoffee.getCost(); // 12
someCoffee = new WhipCoffeeDecorator(someCoffee);
someCoffee.getDescription(); // Simple Coffee with milk and whip
