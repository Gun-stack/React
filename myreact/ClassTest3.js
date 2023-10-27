class Person{
    constructor(name,age){
        this.name=name;
        this.age = age;
        
    }
    info(){
        return `이름 : ${this.name} ,나이 : ${this.age} `;

    }
}

class Student extends Person{
    constructor(name,age,sunbject){
        super(name,age);
        this.sunbject = sunbject;
    }
    info(){
        return `이름 : ${this.name} ,나이 : ${this.age} , 학과 : ${this.sunbject} `;
    }
}

let person = new Person('kim','30');
console.log(person.info());

let student = new Student('mim','20','sports');
console.log(student.info());