// The Strategy pattern suggests you take a class that does something specific 
// in a lot of diverse ways and extract all these algorithms into separate 
// classes called 'strategies'. The original class, called 'context', must have 
// a field for storing a reference to one of the strategies. The context delegates 
// the work to a linked strategy object instead of executing it on its own. 

// The context is not responsible for selecting an appropriate algorithm for the job. 
// Instead, the client passes the desired strategy to the context. In fact, 
// the context does not know much about strategies. It works with all strategies 
// through the same generic interface, which only exposes a single method for 
// triggering the algorithm encapsulated within the selected strategy. 
// This way the context becomes independent of concrete strategies, so you can add 
// new algorithms or modify existing ones without changing the code of the context or other strategies. 

// The strategy interface declares operations common to all supported versions of some algorithm.
// there are 3 main steps:
// 1. to create Context;
// 2. to give it Strategy;
// 3. to execute 'execute' method.
interface Strategy {
  execute(a: number, b: number): number;
}
// Concrete strategies implement the algorithm while following
// the base strategy interface. The interface makes them
// interchangable in the context.
class ConcreteStrategyAdd implements Strategy {
  execute(a, b) {
      return a + b;
  }
}
class ConcreteStrategySubstract implements Strategy {
  execute(a, b) {
      return a - b;
  }
}
class ConcreteStrategyMultiply implements Strategy {
  execute(a, b) {
      return a * b;
  }
}

// We have common interface and 3 concrete classes implementing this interface. 
// The Context in not aware of what specific strategy he works with. 
// Context knows that it can send the execute message. 
// Thus the client decides when and which strategy should be used. 
// It can switch them on the fly, getting different behavior, without changing the interface. 
// The context defines the interface of interest to clients.
class Context {
  private strategy: Strategy;

  setStrategy(s: Strategy) {
      this.strategy = s;
  }
  // The context delegates some work to the strategy object
  // instead of implementing multiple versions of the
  // algorithm on its own.
  executeStrategy(a: number, b: number) {
      return this.strategy.execute(a, b);
  }
}

let ctx = new Context();

ctx.setStrategy(new ConcreteStrategyAdd());
ctx.executeStrategy(5, 2); // 7


//------------------------------ second example ------------------------
// Для упорядочивания некоторого набора данных вы используете алгоритм пузырьковой сортировки. 
// Она отлично справляется с небольшими объемами, но тормозит с крупными. 
// У быстрой сортировки противоположная проблема. Тогда вы решаете изменять алгоритм в зависимости от размера набора. 
// Это ваша Стратегия.

// Шаблон Стратегия позволяет переключать используемый алгоритм в зависимости от ситуации.

// Пример реализации
// Воплотить Стратегию в JavaScript помогут функции первого класса.
const bubbleSort = dataset => {
  console.log('Sorting with bubble sort')
  // ...
  // ...
  return dataset
}

const quickSort = dataset => {
  console.log('Sorting with quick sort')
  // ...
  // ...
  return dataset
}

// А это клиент, который может использовать любую стратегию:
const sorter = dataset => {
  if (dataset.length > 5) {
      return quickSort
  } else {
      return bubbleSort
  }
}

// Теперь можно сортировать массивы:
const longDataSet = [1, 5, 4, 3, 2, 8]
const shortDataSet = [1, 5, 4]

const sorter1 = sorter(longDataSet)
const sorter2 = sorter(shortDataSet)

sorter1(longDataSet) // Sorting with quick sort
sorter2(shortDataSet) // Sorting with bubble sort
