const userNumber  = Number(prompt("Insert a number from 1 to 10"));
let multiplyVal = 1;
while(multiplyVal <= 10){
    let multiply =  multiplyVal * userNumber;
    console.log(userNumber + "x" + multiplyVal + "=" + multiply);
    multiplyVal++;
}
