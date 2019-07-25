let isPrime = (number) => {
    for (let i = 2; i < number; i++)
        if (number % i === 0)
            return false;
    return true;
}

let findPrimeTillNumber = (number) => {
    let output = "";
    for (let i = 2; i < number; i++)
        if (isPrime(i))
            output = output + i + " ";
    return output.trim();
}

console.time();
console.log(findPrimeTillNumber(15))
console.timeEnd()