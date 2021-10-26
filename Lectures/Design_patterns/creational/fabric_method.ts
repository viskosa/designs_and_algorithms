// abstract product:
interface Product {
  GetName(): string
}

// concrete products of Product interface:
class ConcreteProductA implements Product {
  public GetName() {
      return 'ProductA'
  }
}

class ConcreteProductB implements Product {
  public GetName() {
      return 'ProductB'
  }
}

//--------------------------------------------
// abstract creator:
interface Creator {
  FactoryMethod(): Product
}

// concrete creators of Creator interface:
class ConcreteCreatorA implements Creator {
  public FactoryMethod() {
      return new ConcreteProductA()
  }
}

class ConcreteCreatorB implements Creator {
  public FactoryMethod() {
      return new ConcreteProductB()
  }
}

//---------------------------------------------
// An array of creators
const creators: Creator[] = [ new ConcreteCreatorA(), new ConcreteCreatorB() ]
const products: string[] = []

// Iterate over creators and create products
for (let creator of creators) {
  products.push(creator.FactoryMethod().GetName())
}

console.log(products)