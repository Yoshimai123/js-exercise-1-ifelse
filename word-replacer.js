let userPhrase = prompt("Write something");
let userChange = prompt("Select a word to change");
let userReplace = prompt("Select a word to replace it with")

userPhrase = userPhrase.replaceAll(userChange, userReplace);
console.log(userPhrase)