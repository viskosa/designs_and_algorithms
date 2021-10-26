// Abstract Factory Pattern assumes that we have a few product families,
// which stored in a different class hierarchy (Door/DoorFittingExpert).
// Products from one family have to have the common interface (Door)

// Here we have 2 kinds of products: door and door fitting master for each type of doors.
// We declare abstract and concrete products:

// abstract product Door:
interface Door {
    getDescription();
}

// concrete products of Door interface:
class WoodenDoor implements Door {
    public getDescription() {
        return 'I am a wooden door';
    }
}

class IronDoor implements Door {
    public getDescription() {
        return 'I am an iron door';
    }
}

//-----------------------------------------
// abstract product DoorFittingExpert:
interface DoorFittingExpert {
    getDescription();
}

// concrete products of DoorFittingExpert interface:
class Welder implements DoorFittingExpert {
    public getDescription() {
        return 'I can only fit iron doors';
    }
}

class Carpenter implements DoorFittingExpert {
    public getDescription() {
        return 'I can only fit wooden doors';
    }
}

// Next, let's declare our abstract factory 'DoorFactory' that would allow us to create a family of related objects: 
// •	wooden door and a carpenter from wooden door factory 
// •	iron door and a welder from iron door factory 
// As you can see, the wooden doors factory contains carpenter's creation and a wooden door, 
// and iron doors factory contains an iron door and a welder.

// In this case we make sure, that a client who would use a door factory will get a proper specialist for each of the created doors.

interface DoorFactory {
    makeDoor(): Door;
    makeFittingExpert(): DoorFittingExpert;
}

class WoodenDoorFactory implements DoorFactory {
    public makeDoor(): Door {
        return new WoodenDoor();
    }

    public makeFittingExpert(): DoorFittingExpert {
        return new Carpenter();
    }
}

class IronDoorFactory implements DoorFactory {
    public makeDoor(): Door {
        return new IronDoor();
    }

    public makeFittingExpert(): DoorFittingExpert {
        return new Welder();
    }
}
