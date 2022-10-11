/*
다음 배열에서 400, 500를 삭제하는 code를 입력하세요.
*/

var nums = [100, 200, 300, 400, 500];

nums = nums.filter(val => !(val == 400 || val == 500))

console.log(nums);