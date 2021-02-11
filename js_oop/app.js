class Cat {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    eat() {
        return `${this.name} is eating!`;
    }
}

// EXAMPLE CODE
// const monty = new Cat('monty', 9)
// monty.eat