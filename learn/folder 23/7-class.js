class Student {
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = "G G models"
    }
}

const student1 = new Student(1, "Abir")
const student2 = new Student(2, "shad")

console.log(student1, student2)
console.log(student1.name, student2.name)