function Person(){
    this.name = 'John',
    this.age= 23
}

Person.prototype.gender = 'Male';
let p1 = new Person();
let p2 = new Person();



console.log(p1.gender);
console.log(p2.gender);
console.log(p1);