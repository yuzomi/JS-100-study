// 문장이 입력되면 거꾸로 출력하는 프로그램을 만들어 봅시다.

// 입출력

// 입력 : 거꾸로
// 출력 : 로꾸거

// 첫 번째

const name1 = prompt("문장을 입력하세요.");

"apple".split("").reverse().join("");

// 두 번찌

let res = "";

for (let i of "apple") {
    res = i + res;
}

console.log(res);

// 세 번째

let rev = function reverse(txt) {
    if (txt.length <= 1) {
        return txt;
    }

    return reverse(txt.slice(1)) + txt[0];
};

// 화살표 함수

let rev = (txt) => {
    if (txt.length <= 1) {
        return txt;
    }

    return rev(txt.slice(1)) + txt[0];
};
