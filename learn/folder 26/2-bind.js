const normalPerson = {
    firstName: 'Abir',
    lastName: 'Chowdhury',
    salary: 15000,
    getFullName: function(){
        console.log(this.firstName , this.lastName)
    },
    chargeBill: function(amount){
        console.log(this)
        this.salary = this.salary - amount
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

const heroChargeBill = normalPerson.chargeBill.bind(heroPerson)
console.log(heroChargeBill(2500))

const friendlyChargeBill = normalPerson.chargeBill.bind(friendlyPerson)
console.log(friendlyChargeBill(1500))