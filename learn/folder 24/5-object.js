const students = [
    {id: 21, name: 'Omar Sunny'},
    {id: 31, name: 'Maannaaaaaa'},
    {id: 41, name: 'Moyouri'},
    {id: 71, name: 'DeepJol'}
];

// var result = [];
// for(let i=0; i< students.length; i++){
//     result.push(students[i].name);
// }

const names = students.map(s => s.name)
const ids = students.map(s => s.id)
const bigger = students.filter(s => s.id>40)
 
const biggerOne = students.find( s => s.id>40);
var arr = []
const biggerName =  students.filter(function(s, index){
    // console.log(index);
     if(s.id > 40){
        arr.push(index)
        return s
     }
})

console.log(ids);
console.log(names);
console.log(bigger);
console.log(biggerOne);
console.log(biggerName)
console.log(arr)