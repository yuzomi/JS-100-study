function reverseString(string) {
    let answer = "";
    for (let i of string) {
        answer = i + answer;
    }
    console.log(answer);
}

reverseString("거꾸로");
