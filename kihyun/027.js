function toObject(name, score) {
    const nameArr = name.split(" ");
    const scoreArr = score.split(" ");
    const answer = {};
    nameArr.forEach((v, i) => {
        answer[v] = parseInt(scoreArr[i]);
    });
    return answer;
}

console.log(toObject("Yujin Hyewon", "70 100"));
