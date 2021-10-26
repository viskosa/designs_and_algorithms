// Singleton defines static method getInstance(), which returns the only instance of its class. 
// The constructor of singleton should be hidden from client code. 
// Calling the getInstance() method should be the only way of getting the Singleton object. 

// The President is an excellent example of the Singleton pattern. 
// This class doesn’t have a public constructor, so the only way to get its instance – 
// is call getInstance() method. This method saves the first created object 
// and will return it in further calls. 

class President {
  private static president: President;
  private constructor() {}

  public static getInstance(): President {
      if (!President.president) {
          President.president = new President();
      }
      return President.president;
  }
}

const president1 = President.getInstance();
const president2 = President.getInstance();

president1 === president2 // true
