// constrator function

function Student (firstName,lastName,dob){

    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    this.getBirthYear = function(){
        return this.dob.getFullYear();
    }
    this.getFullName = function(){
        return `${firstName} ${lastName}`;
    }
}


const student1 = new Student('Rayhan','Ahmed','4-22-2021');
const student2 = new Student('Foysal','Ahmed','4-22-2021');
const student3 = new Student('Riyad','Mollah','4-22-2021');
const student4 = new Student('Ariyan','Islam','4-22-2021');
const student5 = new Student('Rayhan','Ahmed','4-22-2021');
const student6 = new Student('Foysal','Ahmed','4-22-2021');
const student7 = new Student('Riyad','Mollah','4-22-2021');
const student8 = new Student('Ariyan','Islam','4-22-2021');
const student9 = new Student('Rayhan','Ahmed','4-22-2021');
const student10 = new Student('Foysal','Ahmed','4-22-2021');
const student11 = new Student('Riyad','Mollah','4-22-2021');
const student12 = new Student('Ariyan','Islam','4-22-2021');


console.log(student1.getFullName());
console.log(student2.getFullName());
console.log(student3.getFullName());
console.log(student4.getFullName());
console.log(student5.getFullName());
console.log(student6.getFullName());
console.log(student7.getFullName());
console.log(student8.getFullName());
console.log(student9.getFullName());
console.log(student10.getFullName());
console.log(student11.getFullName());
console.log(student12.getFullName());