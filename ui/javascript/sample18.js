const person = {
    name:'Alex',
    age:20,
    greet: function(){console.log("welcome to js")},
    logout:function(){console.log('Bye!!!')}
}

console.log(person["name"]);
console.log(person.name + " " + person.age);
person.greet();
person.logout();