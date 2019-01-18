// eslint-disable-next-line
function greet() {
    
    // get the inputs by id
    var firstNameInput = document.getElementById('first-name');
    var lastNameInput = document.getElementById('last-name');
    
    // get values out of inputs
    var firstName = firstNameInput.value;
    var lastName = lastNameInput.value;
    
    // make greeting
    var greeting = 'Hello ' + firstName + ' ' + lastName + '!';
    
    // display greeting
    var greeter = document.getElementById('greeter');
    
    greeter.textContent = greeting;

}

// TODO: validate name inputs
// TODO: clear inputs after greet?