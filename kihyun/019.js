function getSquare(num) {
    const [a, b] = num.split(" ").map(item => parseInt(item));
    console.log(a ** b);
}

getSquare("2 3");
