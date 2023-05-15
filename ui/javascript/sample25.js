class Person{
    constructor(id,name){
        this.id = id;
        this.name = name;
    }
    add_age(age){
        this.age = age;
    }
    getDetails(){
        console.log(`Name is: ${this.name} and age is: ${this.age}`)
    }
}

let p1 = new Person(101,'John');
p1.add_age(23);

p1.getDetails()