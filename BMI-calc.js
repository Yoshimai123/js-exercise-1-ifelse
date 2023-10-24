let weight = prompt("How many KG do you weigh?");
let height = prompt("How tall are you?");
let bmi = (weight) / (height * height)

alert("Your BMI is: " + bmi)

if(bmi < 18.5) {
    alert("You are underweight");
} else if(bmi >= 18.5 && bmi <= 24.9) {
    alert("Your weight is normal");
} else {
    alert("You are overweight")
}