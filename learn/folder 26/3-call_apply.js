const normalPerson = {
    firstName: 'Abir',
    lastName: 'Chowdhury',
    salary: 15000,
    getFullName: function(){
        console.log(this.firstName , this.lastName)
    },
    chargeBill: function(amount, tips, tax){
        console.log(this)
        this.salary = this.salary - amount -tips - tax
        return this.salary
    }
}

const heroPerson = {
    firstName: 'Hero',
    lastName: 'Balam',
    salary: 25000
}

const friendlyPerson = {
    firstName: 'zero',
    lastName: 'alom',
    salary: 25000
}

// normalPerson.chargeBill.call(heroPerson, 900, 100, 10)
// normalPerson.chargeBill.call(heroPerson, 3000, 300, 30 )
// console.log(heroPerson.salary)

normalPerson.chargeBill.apply(heroPerson, [900, 100, 10])
normalPerson.chargeBill.apply(heroPerson, [3000, 300, 30])
console.log(heroPerson.salary)