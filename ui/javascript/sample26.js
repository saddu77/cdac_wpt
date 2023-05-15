class Person{
    constructor(name){
        this.name = name;
    }
    toString(){
        return (`Name is: ${this.name}`)
    }
}
class Student extends Person{
    constructor(name,id){
        super(name);
        this.id = id;
    }
    toString(){
        return (`${super.toString()}, Student ID: ${this.id}`);        
    }
}
let Student1 = new Student('Alex',23);
console.log(Student1.toString());