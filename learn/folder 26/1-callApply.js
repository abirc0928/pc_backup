const normalPerson = {
    firstName: 'Abir',
    lastName: 'Chowdhury',
    salary: 15000,
    getFullName: function(){
        console.log(this.firstName , this.lastName)
    },
    chargeBill: function(amount){
        this.salary = this.salary - amount
    }
}
normalPerson.chargeBill(200)
console.log(normalPerson.salary)
