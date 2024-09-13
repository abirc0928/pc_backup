function reverseString(str){
    var result = "";
    for(var i=0; i<str.length; i++){
        var char  = str[i];
        result = char + result;
    }
    return result;
}

var result = reverseString("My name is abir")
console.log(result)