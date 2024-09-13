function explain_callback(name, age, task){
    console.log("Your name: " + name)
    console.log("Your age: " + age)
    task();
}

function washHand(){
    console.log("Wash hand with soap...")
}

function takeShower(){
    console.log("Take shower...")
}

function facebookScroll(){
    console.log("Facebook scroll...")
}


explain_callback("Abir", 17, washHand)
explain_callback("Shad", 17, takeShower)
explain_callback("Jakir", 17, facebookScroll)