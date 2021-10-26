// Заместитель (англ. Proxy) — структурный шаблон проектирования, предоставляющий объект, 
// который контролирует доступ к другому объекту, перехватывая все вызовы (выполняет функцию контейнера).
// Выполняет какой-то промежуточный функционал:
// - access control;
// - logging;
// - cashing etc;
// В отличие от Декоратора, Прокси сам управляет жизненным циклом своего служебного объекта

/* Subject */
class IMath {
	add(x, y) {}
	sub(x, y) {}
}

/* Real Subject */
class RMath extends IMath {
	add(x, y) {
		return x + y;
	}
	sub(x, y) {
		return x - y;
	}
}

/* Proxy */
class MathProxy extends IMath {
	math = new RMath()

	add(x, y) {
		return this.math.add(x, y)
	}
	sub(x, y) {
		return this.math.sub(x, y)
	}
}

const test1 = new MathProxy()
alert(test1.add(3, 2)) // 5
alert(test1.sub(3, 2)) // 1

//------------------ second example -----------------------------
/*
Пример реализации
Прежде всего создадим интерфейс двери и его реализацию:

Door interface :

open()
close()
*/

class LabDoor {
  open() {
      console.log('Opening lab door')
  }

  close() {
      console.log('Closing the lab door')
  }
}

// А теперь напишем прокси-класс, чтобы обеспечить безопасность нашей двери:
class SecurityProxy {
  door: any;

  constructor(door) {
      this.door = door
  }

  open(password) {
      if (this.authenticate(password)) {
          this.door.open()
      } else {
        console.log('Big no! It ain\'t possible.')
      }
  }

  authenticate(password) {
      return password === 'ecr@t'
  }

  close() {
      this.door.close()
  }
}

// Теперь кто попало не сможет зайти:
const door = new SecurityProxy(new LabDoor())
door.open('invalid') // Big no! It ain't possible.

door.open('ecr@t') // Opening lab door
door.close() // Closing lab door


//------------- third example ------------------------------------
// Presume we have an input filed with an ID of inputname:
const el = `<input type="text" id="inputname" value="" />`;

// We also have a JS object named myUser with
// an id property which references this input
const myUser = {
    id: 'inputname',
    name: ''
};

// Our first objective is to update myUser.name when a user changes the input value. 
// This can be achieved with an onchange event handler on the field:
(function inputChange(myObject) {
    if (!myObject || !myObject.id) { return; }

    const input = document.getElementById(myObject.id);
    input.addEventListener('onchange', function (e) {
        myObject.name = input.value;
    });
})(myUser);

// There is a JavaScript native class Proxy, which allows to catch get/set calls of objects 
// and perform additional actions. Here we use this feature to create a primitive but operating bi-directional data-binding. 

// create proxy
const myUserProxy = new Proxy(myUser, {
    set: function(target, prop, newValue) {
        if (prop === 'name' && target.id) {
            // update object property
            target[prop] = newValue;

            // update input field value
            document.getElementById(target.id).value = newValue;
            return true;
        }

        return false;
    }
});

// set a new name
myUserProxy.name = 'Craig';
console.log(myUserProxy.name); // Craig
console.log(document.getElementById('inputname').value);
