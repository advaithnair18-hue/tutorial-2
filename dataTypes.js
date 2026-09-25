function printAgeIn2026(birthYear){
    let age = 2026-birthYear;

    // Don't modify these lines.
    console.log("This person will turn " + age + " in 2026.")
    return age;
}


function printAgeIn10Years(age){
    let newAge = Number(age) + 10;

    console.log("This person will be " + newAge + " in 10 years.")
    return newAge;
}


function checkIfAdult(age){
    let isAdult = age>=18;


    console.log("The person is " + (isAdult ? "" : "not")  + " adult.")
    return isAdult;
}


function checkIfZero(number){

    let isZero = 0;


    console.log("The input is " + (isZero ? "" : "not")  + " 0.")
    return isZero;
}

function checkIfEquivalent(string, number){
    let isEquivalent = string == number;

  [

    
  ]
    console.log("The string is " + (isEquivalent ? "" : "not")  + " equivalent to the number.")
    return isEquivalent;
}







