var stu1 = { id:11, phone:1755, name:"Abir"};
var stu2 = { id:12, phone:4756, name:"Shad"};

console.log(stu1, stu2);
// access any elements of objects
var phoneNo = stu1.phone;
console.log(phoneNo);

var phoneNo = stu1["phone"];
console.log(phoneNo);

var phonePropNo = "phone";
console.log(stu1[phonePropNo]);

// Change any properties values in the object
stu1.phone = 11115;
console.log(stu1);

//add new properties of the object
stu1.cinema = "ABC";
console.log(stu1);