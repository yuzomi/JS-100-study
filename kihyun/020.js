function 몫과나머지구하기(num) {
    const [a, b] = num.split(" ").map(item => parseInt(item));
    console.log(a / b + " " + (a % b));
}

몫과나머지구하기("10 2");
