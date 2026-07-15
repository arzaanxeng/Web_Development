// Average marks of a class
let marks = [23,78,65,54,90,59,30,79];
let sum = 0;
for(let i = 0 ; i < marks.length ; i++){
    sum += marks[i];
}

const avg = sum/marks.length ;
console.log("The avg marks of the class is : " , avg);

// Discounted Prices
let prices = [200,300,400,350,250,600,540];
console.log("\nThe actual prices are as follows: ")
for(let i = 0 ; i < prices.length ; i++){
    console.log(prices[i]);
}

const discount = 0.1;
for(let i = 0 ; i < prices.length ; i++){
    prices[i] = prices[i] - prices[i]*discount;
}

console.log("\nThe discounted prices are as follows: ")
for(let i = 0 ; i < prices.length ; i++){
    console.log(prices[i]);
}