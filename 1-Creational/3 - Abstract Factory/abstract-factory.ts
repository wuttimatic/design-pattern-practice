// sample code for Abstract Factory pattern
//
// // Abstract Factory interface
// start abstract-factory.ts
export interface AbstractProductA { }
export interface AbstractProductB { }
// end abstract-factory.ts

export default interface AbstractFactory {
    createProductA(): AbstractProductA;
    createProductB(): AbstractProductB;

    // other methods...

}

// Concrete Factory 1
export class ConcreteFactory1 implements AbstractFactory {
    createProductA(): AbstractProductA {
        return new ProductA1();
    }
    createProductB(): AbstractProductB {
        return new ProductB1();
    }
}

// Concrete Factory 2
export class ConcreteFactory2 implements AbstractFactory {
    createProductA(): AbstractProductA {
        return new ProductA2();
    }
    createProductB(): AbstractProductB {
        return new ProductB2();
    }
}

// Concrete Product A1
export class ProductA1 implements AbstractProductA { }

// Concrete Product B1
export class ProductB1 implements AbstractProductB { }

// Concrete Product A2
export class ProductA2 implements AbstractProductA { }

// Concrete Product B2
export class ProductB2 implements AbstractProductB { }

// client code
function clientCode(factory: AbstractFactory) {
    const productA = factory.createProductA();
    const productB = factory.createProductB();
    console.log(productA);
    console.log(productB);
}

clientCode(new ConcreteFactory1());
clientCode(new ConcreteFactory2());
// Output:
// ProductA1 {}
// ProductB1 {}
// ProductA2 {}
// ProductB2 {}
// The client code works with factories and products only through abstract types: AbstractFactory and AbstractProduct. This lets you pass any factory or product subclass to the client code without breaking it. The client code can work with any concrete factory/product variant.

