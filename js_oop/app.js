class Pet {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    eat() {
        return `${this.name} is eating!`;
    }
}

class Cat extends Pet {
    constructor(name, age, livesLeft = 9) {
        console.log('IN CAT CONSTRUCTOR!');
        super(name, age);
        this.liveLeft = livesLeft;
    }
    meow() {
        return `MEOWWW!!`;
    }
}

// EXAMPLE CODE
// const monty = new Cat('monty', 9)
// monty.eat()

class Dog extends Pet {
   bark() {
        return 'WOOOF!!';
    }
}







