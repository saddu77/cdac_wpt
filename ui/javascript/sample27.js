class A{
    display(){
       console.log("welcome- A");
    }
}

class B extends A{
    display(){
        console.log("welcome- B");
     }
}

//var b = new B();
//b.display();

var objs = [new A(),new B()];
objs.forEach(function(msg){
    msg.display();
})