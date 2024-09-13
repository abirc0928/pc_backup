var frAge = [15,16,17,18]
console.log(frAge);

console.log(frAge[2]);

frAge[1] = 22;
console.log(frAge);

frAge.push(30);
console.log(frAge);
console.log(frAge.length);

frAge.pop();
console.log(frAge);
console.log(frAge.length);

// add elements to the beginning of the array
frAge.unshift(30);
console.log(frAge);
console.log(frAge.length);

frAge.unshift(60,40,50);
console.log(frAge);
console.log(frAge.length);

//  add elements to the any position in the array
frAge.splice(2,0,55)
console.log(frAge);
console.log(frAge.length);

frAge.splice(2,0,55,44)
console.log(frAge);
console.log(frAge.length);

// add elements to last
frAge.push(100);
console.log(frAge);

// concate two arrays
var frAge1 = [15,16,17,18]
var frAge2 = [19,20,21,22]
var frAge3 = [].concat(frAge1,frAge2)
console.log(frAge3);

//remove from first

var fr = [1,2,3,4,5,6]
console.log(fr);
console.log(fr.length);
console.log(fr.shift());
console.log(fr);
console.log(fr.length);

// remove from any position
var fr = [1,2,3,4,5,6]
console.log(fr);
console.log(fr.length);
console.log(fr.splice(4,1));
console.log(fr);
console.log(fr.length);

// remove from last position

var fr = [1,2,3,4,5,6]
console.log(fr);
console.log(fr.length);
console.log(fr.pop());
console.log(fr);
console.log(fr.length);

// slice() part a vag kora
var fr = [1,2,3,4,5,6]
console.log(fr);
var part = fr.slice(3)
console.log(part);

var fr = [1,2,3,4,5,6]
console.log(fr);
var part = fr.slice(2,5)
console.log(part);