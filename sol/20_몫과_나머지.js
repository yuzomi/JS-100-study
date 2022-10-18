// 공백으로 구분하여 두 숫자가 주어집니다.
// 두번째 숫자로 첫번째 숫자를 나누었을 때 그 몫과 나머지를 공백으로 구분하여 출력하세요.

// 입출력
// 입력 : 10 2
// 출력 : 5 0

const n = prompt("두 숫자를 입력").split(" ");

const result = Math.floor(parseInt(n[0], 10) / parseInt(n[1], 10));
// Math.floor() 함수는 주어진 숫자와 같거나 작은 정수 중에서 가장 큰 수를 반환합니다. -> JS에서는 몫을 구하는 연산자가 별도로 있지 않아서 나누기한 값의 정수부분만 취하는 방식으로 직접 구함.
const left = parseInt(n[0], 10) % parseInt(n[1], 10);

console.log(result, left);
