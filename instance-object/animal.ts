// Classes are implemented using the class keyword, just like in ES6. To create an object we call the class with the new keyword, 
// which triggers the constructor and returns an instance-object just like in regular JavaScript. Since objects in JavaScript are 
// technically just a set of key/value pairs, I like to use the term instance-object to refer to objects returned with the new keyword.

// instance object using typescript/ES6

class Animal {
    age: number;
    type: string;

    constructor(age, type) {
        this.age = age;
        this.type = type;
    }

    animalInfo() {
        return 'Animal Age: '+this.age+' & type: '+this.type;
    }
}

let animal = new Animal(30, 'Cow');

var br = document.createElement("br");
document.body.append(br, animal.animalInfo());