function calculateSupply(age, amount) {
    const maxAge = 100;
    let need = (amount * 365) * (maxAge - age);
    console.log("You will need", need, "chocolates to last you until the ripe old age of",maxAge)
}

calculateSupply(30, 5);
calculateSupply(50, 3);
calculateSupply(10, 10);
