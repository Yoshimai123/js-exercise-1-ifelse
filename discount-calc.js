let originalPrice = prompt("What's the price?");
let discountPercent = prompt("What's the discount?");
let discountAmount = (discountPercent / 100);
let finalPrice = originalPrice - discountAmount;

alert("This is the final price: " + finalPrice)

if(discountPercent > 50) {
    alert("This is a great deal :D")
} else {
    alert("This isn't a great deal ")
}