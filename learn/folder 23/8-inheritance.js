class Parent{
    constructor(){
        this.fatherName = "Mizanor"
    }
}

class Child extends Parent{
    constructor(name){
        super();
        this.name = name
    }

    getFullName(){
        return this.name + " " + this.fatherName
    }
}

const child1 = new Child("abir")
const child2 = new Child("rabby")

console.log(child1,child2)

console.log(child1.getFullName())
console.log(child2.getFullName())