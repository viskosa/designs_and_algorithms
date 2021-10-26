// Facade - the simple interface for the complex system.
// Used in order to hide complex lgic in one method

// Here we have a Computer class with lots of unclear methods. 
class Computer {
  public getElectricShock() { return 'Ouch!'; }
  public makeSound() { return 'Beep beep!'; }
  public showLoadingScreen() { return 'Loading..'; }
  public bam() { return 'Ready to be used!'; }
  public closeEverything() { return 'Zzzzzz bup'; }
  public sooth() { return 'shhshh'; }
}

// And a façade with 2 straightforward methods turnOn and turnOff:
class ComputerFacade {
  protected computer: Computer;

  constructor(c: Computer) {
      this.computer = c;
  }

  public turnOn() {
      this.computer.getElectricShock();
      this.computer.makeSound();
      this.computer.showLoadingScreen();
      this.computer.bam();
  }

  public turnOff() {
      this.computer.closeEverything();
      this.computer.sooth();
  }
}

const computer = new ComputerFacade(new Computer());
computer.turnOn(); // Ouch! Beep beep! Loading.. Ready to be used!
computer.turnOff(); // Zzzzzz bup shhshh

//---- second example --------------------------------------------
/* Complex parts */
function SubSystem1() {
	this.method1 = function() {
		console.log("вызван SubSystem1.method1");
	};
}

function SubSystem2() {
	this.method2 = function() {
		console.log("вызван SubSystem2.method2");
	};
	this.methodB = function() {
		console.log("вызван SubSystem2.methodB");
	};
}

/* Facade */
function Facade() {
	var s1 = new SubSystem1(),
	    s2 = new SubSystem2();
	
	this.m1 = function() {
		console.log("вызван Facade.m1");
		s1.method1();
		s2.method2();
	};

	this.m2 = function() {
		console.log("вызван Facade.m2");
		s2.methodB();
	};
}

/* Client */
function test() {
	var facade = new Facade();
	facade.m1();
	facade.m2();       
}

test();
/*
Выведет:
"вызван Facade.m1"
  "вызван SubSystem1.method1"
  "вызван SubSystem2.method2"
"вызван Facade.m2"
  "вызван SubSystem2.methodB"
*/