let billTotal = parseInt(prompt("Bill total"));
let tipPercent = parseInt(prompt("Tip percentage"));
let tipValue = (tipPercent / 100) * billTotal;

alert(tipValue);