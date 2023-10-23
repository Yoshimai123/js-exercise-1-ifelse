let testScore = prompt("Test score result");
if(testScore >= 90) {
    alert("A");
} else if(testScore >= 80 && testScore < 90) {
    alert("B");
} else if(testScore >= 70 && testScore < 80) {
    alert("C");
} else if(testScore >= 60 && testScore < 70) {
    alert("D");
} else{
    alert("F");
}