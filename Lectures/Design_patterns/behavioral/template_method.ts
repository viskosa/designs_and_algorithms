// Template Method is a behavioral design pattern that defines the skeleton 
// of an algorithm in the superclass but allows subclasses to override 
// specific steps of the algorithm without changing its structure. 

// The Template Method pattern suggests you break down an algorithm into a series of steps, 
// turn these steps into methods, and put a series of calls to these methods inside a single template method. 
// The steps may either be abstract, or have some default implementation. 
// To use the algorithm, the client is supposed to provide its own subclass, 
// implement all abstract steps, and override some of the optional ones if needed (but not the template method itself). 
// There are three types of steps: 
// •	abstract steps must be implemented by every subclass 
// •	optional steps already have default implementation, but can be overridden if needed 
// •	hooks are optional steps with an empty body. A template method would work even if a hook is not overridden. 
//    Usually, hooks are placed before and after crucial steps of algorithms, providing subclasses with additional extension points for an algorithm. 

// 1.	The Abstract Class declares methods that act as steps of an algorithm, 
// as well as the actual template method which calls these methods in a specific order. 
// The steps may either be declared abstract or have some default implementation. 
// 2.	Concrete Classes can override all the steps, but not the template method itself. 

// Template method for making tea and coffee: 
// boilWater(); 
// brew(); 
// pourInCup() 
// addCondiments(); 



// Вы строите дом по определенному плану: сначала фундамент, затем стены и только потом крыша. 
// Порядок этих шагов изменить нельзя, но их реализация может быть разной.

// Шаблонный метод определяет "скелет" алгоритма, но делегирует реализацию шагов дочерним классам.

// Пример реализации
// Создадим инструмент для тестирования, сборки и разворачивания приложения.

// Базовый класс определяет скелет алгоритма сборки:
abstract class Builder {
  // Template method
  public build() {
      this.test();
      this.lint();
      this.assemble();
      this.deploy();
  }

  abstract test();
  abstract lint();
  abstract assemble();
  abstract deploy();
}
// Note that final keyword used to prevent overriding of the build method 
// and thus changing order of steps for a given algorithm, is not supported in TS at the moment. 
class AndroidBuilder extends Builder {
    public test() { return 'Running android tests'; }
    public lint() { return 'Linting android code'; }
    public assemble() { return 'Assembling android build'; }
    public deploy() { return 'Deploying android build to server'; }
}

class IosBuilder extends Builder {
    public test() { return 'Running ios tests'; }
    public lint() { return 'Linting ios code'; }
    public assemble() { return 'Assembling ios build'; }
    public deploy() { return 'Deploying ios build to server'; }
}

const androidBuilder = new AndroidBuilder();
androidBuilder.build();
// Running android tests
// Linting android code
// Assembling android build
// Deploying android build to server

const iosBuilder = new IosBuilder();
androidBuilder.build();
// Running ios tests
// Linting ios code
// Assembling ios build
// Deploying ios build to server
