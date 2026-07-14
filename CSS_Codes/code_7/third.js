// Strings

let str = "Sakshi";
console.log(str.trim());
str = str.trim();
console.log(str.replace("S" , "N"));
console.log(str.trim());
console.log(str.length);
console.log(str.toUpperCase());
console.log(str.toLowerCase());



const student = {
    name : "Sakshi",
    age  : 19,
    cgpa : 9.00
};

let output = `The name of the student is ${student.name} , ${student.age} has a CGPA of ${student.cgpa}`;
console.log(output);