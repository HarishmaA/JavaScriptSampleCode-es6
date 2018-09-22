//Closure example
function showName (firstName, lastName) {
var nameIntro = "Your name is ";
    // this inner function has access to the outer function's variables, including the parameter
function makeFullName () {        
return `${nameIntro}${firstName} ${lastName}`;    
}

return makeFullName ();
}

console.log(showName ("Harishma", "Arivazhagan")); // Your name is Harishma Arivazhagan