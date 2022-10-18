// 공백으로 구분하여 두 숫자 a와 b가 주어지면, a의 b승을 구하는 프로그램을 작성하세요.

const n = prompt("두 숫자를 입력").split(" ");
// let a = n[0];
// let b = n[1];
// console.log(a ** b);

console.log(Math.pow(parseInt(n[0], 10), parseInt(n[1], 10)));
