let age = prompt("What is your age?")

if(age < 13) {
    alert("You can only watch PG movies");
}
else if(age >= 13 && age < 18) {
    alert("You can watch PG and PG-13 movies");
}
else if(age >= 18){
    alert("You can watch all movies");
}