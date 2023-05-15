function Person(pname,page,pgender){
    this.name = pname;
    this.age = page;
    this.gender = pgender;
    this.greet = function(){
        return ('Hi' + ' ' + this.name);
    }
}

const p1 = new Person('John',23,'M');
const p2 = new Person('Sam',24,'F');
console.log(p1.name);
console.log(p2.name);
console.log(p2.greet());
console.log(typeof(p2));
