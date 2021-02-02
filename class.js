class Student{
    constructor(studentID, studentName){
        this.id = studentID;
        this.name = studentName;
    }
}

const student1 = new Student(16, "Sherlock");
const student2 = new Student(21, "Moriarty");
console.log(student1, student2);