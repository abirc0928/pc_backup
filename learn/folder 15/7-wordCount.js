var speach = "I am a  good person. I   don't snore at  night"

var count = 1;

for(var i = 0; i < speach.length; i++){
    var char = speach[i];
    if(char == " " && speach[i-1] != " "){
        count++;
    }
}

console.log(count)