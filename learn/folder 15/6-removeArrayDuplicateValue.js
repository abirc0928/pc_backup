var arr = [1,2,3,4,5,6,7,8,9,1,5,7,6,2];
var result = [];

for(var i = 0 ; i < arr.length; i++) {

    var index = result.indexOf(arr[i]);

    if(index == -1) {
        result.push(arr[i]);
    }
}

console.log(result);