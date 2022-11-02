// 입력으로 반지름의 길이 정수 n이 주어지면 원의 넓이를 반환하는 함수를 만들어 주세요.

// let n = prompt("반지름 길이 입력");
// let result = n ** 2 * 3.14;
// console.log(result);

function circle(n) {
  const result = n * n * 3.14;

  return result;
}

const r = prompt("원의 반지름을 입력하세요.");

console.log(circle(r));
