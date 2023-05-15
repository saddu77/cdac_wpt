function Bike(name,model,color){
    this.name = name;
    this.model = model;
    this.color = color;
}

Bike.prototype.getBikeInfo = function(){
    console.log("Bike is : " + this.name);
}

let b1 = new Bike("Hayabusa",'Hero Honda','Blue');
let b2 = new Bike("Pulsar",'Bajaj','Black');

console.log(b1.name);
console.log(b2.model);
b1.getBikeInfo()