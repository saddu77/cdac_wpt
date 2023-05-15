function Person(){
    this.name = 'John',
    this.age = 23,
    this.greet = function(){
        console.log('welcome')
    }
    this.msg = function(){
        return "hello"
    }
}

const p1 = new Person();
const p2 =new Person();
console.log(p1.name);
console.log(p2.name)
// console.log(p2.greet())
p2.greet()
console.log(p2.msg())
