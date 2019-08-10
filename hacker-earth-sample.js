let getNumbers = (input) => {
    let output = '';
    input = input.split('\n')[1].split(' ');
    input.forEach(element => {
        for (let i = 1; i <= element; i++) {
            if (i % 3 === 0 && i % 5 === 0) {
                output += 'FizzBuzz\n';
            } else if (i % 3 === 0) {
                output += 'Fizz\n';
            } else if (i % 5 === 0) {
                output += 'Buzz\n';
            } else {
                output += `${i}\n`
            }
        }
    });
    return output.trim();
}

let getNumbers = () => {
    let output = '';
    input = input.split('\n')[1].split(' ');
    for (let index = 0; index < input.length; val++) {
        for (let i = 1; i <= input[index]; i++) {
            if (i % 3 === 0 && i % 5 === 0) {
                output += 'FizzBuzz\n';
            } else if (i % 3 === 0) {
                output += 'Fizz\n';
            } else if (i % 5 === 0) {
                output += 'Buzz\n';
            } else {
                output += `${i}\n`
            }
        }
    }
}