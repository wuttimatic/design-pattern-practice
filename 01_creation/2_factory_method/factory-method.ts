// sample code for Factory Method pattern

// Product interface
interface Product {
    operation(): string;
}

// Concrete Product A
class ConcreteProductA implements Product {
    operation(): string {
        return '{Result of the ConcreteProductA}';
    }
}

// Concrete Product B
class ConcreteProductB implements Product {
    operation(): string {
        return '{Result of the ConcreteProductB}';
    }
}

// Creator interface
interface Creator {
    factoryMethod(): Product;
}

// Concrete Creator A
class ConcreteCreatorA implements Creator {
    factoryMethod(): Product {
        return new ConcreteProductA();
    }
}

// Concrete Creator B
class ConcreteCreatorB implements Creator {
    factoryMethod(): Product {
        return new ConcreteProductB();
    }
}

// client code
function clientCode(creator: Creator) {
    console.log('Client: I\'m not aware of the creator\'s class, but it still works.');
    console.log(creator.factoryMethod().operation());
}

clientCode(new ConcreteCreatorA());
clientCode(new ConcreteCreatorB());
