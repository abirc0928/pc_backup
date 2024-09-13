let count = 0;

increase = document.getElementById('increase');
decrease = document.getElementById('decrease');
reset = document.getElementById('reset');

increase.addEventListener('click', function(){
    count = parseInt(document.getElementById('value').innerText)
    count += 1
    document.getElementById('value').innerText = count
    if(count > 0){
        document.getElementById('value').style.color = 'green'
    }
    else if(count < 0){ 
        document.getElementById('value').style.color = 'red'
    }
    else{ 
        document.getElementById('value').style.color = 'black'
    }
    console.log(count)
})

decrease.addEventListener('click', function(){
    count = parseInt(document.getElementById('value').innerText)
    count -= 1
    document.getElementById('value').innerText = count
    console.log(count)
    if(count > 0){
        document.getElementById('value').style.color = 'green'
    }
    else if(count < 0){ 
        document.getElementById('value').style.color = 'red'
    }
    else{ 
        document.getElementById('value').style.color = 'black'
    }
})

reset.addEventListener('click', function(){
    count = 0
    document.getElementById('value').innerText = count
    document.getElementById('value').style.color = 'black'
})



console.log(count)