function addNumbers(){
    console.log(arguments)
    var sum = 0;
    for(var i=0; i<arguments.length; i++){
        sum = sum + arguments[i];
    }
    return sum;
}

var result = addNumbers(10, 20, 30, 40)
console.log(result)