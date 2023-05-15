class User{
    constructor(username,password){
        this.username = username;
        this.password = password;
    }

    getUserDetails(){
        return (`Username is: ${this.username} and password is: ${this.password}`);
    }
 }

 let u1 = new User('admin','admin123');
 let u2 = new User('john','john123');

 console.log(u1.username + " " + u1.password);
 console.log(u2.username + " " + u2.password);