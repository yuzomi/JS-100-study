function getAverage(input) {
    let arr = input.split(" ").map(item => parseInt(item));

    let average = arr.reduce((acc, cur, index, { length }) => {
        return index === length - 1 ? Math.floor((acc + cur) / length) : acc + cur;
    }, 0);

    return average;
}

console.log(getAverage("20 30 43"));
