// Create prototype interface that will be implemented by concrete prototype classes in typescript
export interface Prototype {
    clone(): Prototype;
}

// Define the ComponentWithBackReference type
type ComponentWithBackReference = {
    prototype: Prototype;
};

// Concrete class that implements the Prototype interface. adding some properties to the class
export class Concrete1 implements Prototype {
    public primitive: any;
    public component: object;
    public circularReference: ComponentWithBackReference;

    public clone(): Prototype {
        const clone = Object.create(this);
        clone.component = Object.create(this.component);
        clone.circularReference = {
            ...this.circularReference,
            prototype: { ...this },
        };

        return clone;
    }
}

// Concrete class that implements the Prototype interface. adding some properties to the class
export class Concrete2 implements Prototype {
    public primitive: any;
    public component: object;
    public circularReference: ComponentWithBackReference;

    public clone(): Prototype {
        const clone = Object.create(this);
        clone.component = Object.create(this.component);
        clone.circularReference = {
            ...this.circularReference,
            prototype: { ...this },
        };

        return clone;
    }
}

// how to use
// const p1 = new Concrete1();
// p1.primitive = 245;
// p1.component = new Date();
// p1.circularReference = new ComponentWithBackReference();
// p1.circularReference.prototype = p1;

// const p2 = p1.clone();
// if (p1.primitive === p2.primitive) {
//     console.log('Primitive field values have been carried over to a clone. Yay!');
// } else {
//     console.log('Primitive field values have not been copied. Booo!');
// }

// if (p1.component === p2.component) {
//     console.log('Simple component has not been cloned. Booo!');
// } else {
//     console.log('Simple component has been cloned. Yay!');
// }
