class User{
    constructor(name){
        this.name=name;

    }

    sayHello(){
        console.log(`Hello!, ${this.name}`);
    }

}

let user = new User('김건우');
user.sayHello();