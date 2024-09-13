const person = {name: 'abir', age:20, email: 'abir@gmail.com', address: 'dhaka', phone: 45678}

console.log(person)
const {phone, email} = person;
console.log(phone, email)

console.log("==================")
const complexObject = {
    name: 'obak',
    info: {
        address: 'singair',
        leader : 'sagor'
    }
}

const{leader} = complexObject.info
console.log(leader)

console.log("==================")
const friends = ['abir','shad','rabby','bob','alice','jhon','james']

const [first, last, ...other] = friends

console.log(first, last, other)