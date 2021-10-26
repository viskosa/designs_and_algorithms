// Visitor is a behavioral design pattern that lets you separate algorithms from the objects on which they operate. 
// Used if you need to iteratee through the objects tree and get some different info from them

// The element interface declares an `accept` method that takes the base visitor interface 
// as an argument. Each concrete element class must implement the `accept` method in such a way 
// that it calls the visitor's method that corresponds to the element's class. 

// The component interface declares an 'accept' method that
// takes the base visitor interface as an argument.
interface Shape {
  move(x, y);
  draw();
  accept(v: Visitor);
}
// Each concrete component class must implement the 'accept' method
class Dot implements Shape {
  accept(v: Visitor) { v.visitDot(this); }
  move(x, y) {}
  draw() {}
}
class Circle implements Shape {
  accept(v: Visitor) { v.visitCircle(this); }
  move(x, y) {}
  draw() {}
}
class Rectangle implements Shape {
  accept(v: Visitor) { v.visitRectangle(this); }
  move(x, y) {}
  draw() {}
}

// The Visitor interface declares a set of visiting methods that correspond to element classes. 
// The signature of a visiting method lets the visitor identify the exact class of the element that it's dealing with. 

// The Visitor interface declares a set of visiting methods that
// correspond to component classes.
interface Visitor {
  visitDot(d: Dot);
  visitCircle(c: Circle);
  visitRectangle(r: Rectangle);
}
class JSONExportVisitor implements Visitor {
  visitDot(d: Dot) {
      // Export the dot's ID and coordinates.
  }
  visitCircle(d: Circle) {
      // Export the circle's ID, center coordinates and radius.
  }
  visitRectangle(d: Rectangle) {
      // Export the rectangle's ID, left-top coordinates, width and height.
  }
}

// The client code can run visitor operations over any set of
// elements without figuring out their concrete classes. The
// 'accept' operation directs a call to the appropriate operation
// in the visitor object.
const allShapes = [new Dot(), new Circle(), new Rectangle()];
const exportVisitor = new JSONExportVisitor();

allShapes.forEach(shape => shape.accept(exportVisitor));
// Concrete visitors implement several versions of the same algorithm, which can work with all concrete element classes. 




//------------------- second example -----------------------------------------
// Чтобы отправиться за границу, нужно получить разрешение (визу). Но оказавшись в стране, 
// вы можете спокойно посещать самые разные места, не спрашивая дополнительного разрешения. Достаточно лишь узнать о них.
// Паттерн Посетитель позволяет добавлять объектам дополнительные операции, не изменяя их исходный код.

// Пример реализации
// Смоделируем зоопарк с разными видами животных:
class Monkey {
  shout() {
      console.log('Ooh oo aa aa!')
  }

  accept(operation) {
      operation.visitMonkey(this)
  }
}

class Lion {
  roar() {
      console.log('Roaaar!')
  }
  
  accept(operation) {
      operation.visitLion(this)
  }
}

class Dolphin {
  speak() {
      console.log('Tuut tuttu tuutt!')
  }
  
  accept(operation) {
      operation.visitDolphin(this)
  }
}

// Теперь мы хотим послушать, какие звуки они издают. Для этого создадим Посетителя:
const speak = {
  visitMonkey(monkey){
      monkey.shout()
  },
  visitLion(lion){
      lion.roar()
  },
  visitDolphin(dolphin){
      dolphin.speak()
  }
}

// Он просто обращается к каждому классу и вызывает нужный метод:
const monkey = new Monkey()
const lion = new Lion()
const dolphin = new Dolphin()

monkey.accept(speak)    // Ooh oo aa aa!    
lion.accept(speak)      // Roaaar!
dolphin.accept(speak)   // Tuut tutt tuutt!

// Посетитель позволяет не изменять существующие объекты. С его помощью можно, например, 
// добавить всем этим животным возможность прыгать без создания дополнительных методов.
const jump = {
  visitMonkey(monkey) {
      console.log('Jumped 20 feet high! on to the tree!')
  },
  visitLion(lion) {
      console.log('Jumped 7 feet! Back on the ground!')
  },
  visitDolphin(dolphin) {
      console.log('Walked on water a little and disappeared')
  }
}

// Вуаля:
monkey.accept(speak)   // Ooh oo aa aa!
monkey.accept(jump)    // Jumped 20 feet high! on to the tree!

lion.accept(speak)     // Roaaar!
lion.accept(jump)      // Jumped 7 feet! Back on the ground! 

dolphin.accept(speak)  // Tuut tutt tuutt! 
dolphin.accept(jump)   // Walked on water a little and disappeared
