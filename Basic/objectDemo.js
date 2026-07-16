const student={
    name:"janvi",
    roll:123,
    marks:80.6,
    isPass:true
};

//To access value by key
console.log(student.name);
console.log(student["isPass"]);

//to reassign value to key
student.name="preeti";
student.marks=student.marks+1;
console.log(student.name);
console.log(student.marks);

//check type of object
console.log(typeof student);
console.log(typeof student["roll"]);