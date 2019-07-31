const windowSeatMap = {
    0: {
        oppositeSeat: -11,
        seatMode: 'WS'
    },
    1: {
        oppositeSeat: 11,
        seatMode: 'WS'
    },
    2: {
        oppositeSeat: 9,
        seatMode: 'MS'
    },
    3: {
        oppositeSeat: 7,
        seatMode: 'AS'
    },
    4: {
        oppositeSeat: 5,
        seatMode: 'AS'
    },
    5: {
        oppositeSeat: 3,
        seatMode: 'MS'
    },
    6: {
        oppositeSeat: 1,
        seatMode: 'WS'
    },
    7: {
        oppositeSeat: -1,
        seatMode: 'WS'
    },
    8: {
        oppositeSeat: -3,
        seatMode: 'MS'
    },
    9: {
        oppositeSeat: -5,
        seatMode: 'AS'
    },
    10: {
        oppositeSeat: -7,
        seatMode: 'AS'
    },
    11: {
        oppositeSeat: -9,
        seatMode: 'MS'
    }
};

let input = `2
18
40`

input = input.split('\n');
let totalLen = input.shift();
let output = [];

for (let i = 0; i < totalLen; i++) {
    output.push((parseInt(input[i]) + windowSeatMap[input[i] % 12].oppositeSeat) + " " + windowSeatMap[input[i] % 12].seatMode);
}

console.log(output.join('\n'));