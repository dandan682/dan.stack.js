function printName(name) {
    console.log("Your name is", name);
}

printName("Piero");
printName("Sunil");

const sum = function(num1, num2) {
    return num1 + num2;
}

const mySum = sum(10, 10);
console.log("Your sum is", mySum);

const sum2 = (num1, num2) => {
    return num1 + num2;
}

console.log("Your sum is", sum2(2, 2));

const print = name => console.log("Your name is", name);
print("Piero");

function printInfo (name, age) {
    console.log("Your first name is", name, "and your age is", age);
}

printInfo("Piero", 22);
