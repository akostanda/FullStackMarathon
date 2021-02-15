greeting();

function greeting() {
    let firstName = prompt("Input your first name").match(/^[A-Za-z]+$/);
    let lastName = prompt("Input your last name").match(/^[A-Za-z]+$/);

    if (firstName && lastName) {
        firstName = firstName.toString().charAt(0).toUpperCase() + firstName.toString().toLowerCase().slice(1);
        lastName = lastName.toString().charAt(0).toUpperCase() + lastName.toString().toLowerCase().slice(1);
        alert("Hello dear " + firstName+ " " + lastName);
        console.log("Hello dear " + firstName + " " + lastName);
    }
    else {
        alert("Wrong input!");
        console.log("Wrong input!");
    }

}