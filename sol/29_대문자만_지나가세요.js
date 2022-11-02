//알파벳 하나만을 입력하고 그 알파벳이 대문자이면 YES를 아니면 NO를 출력하는 프로그램을 만들어 주세요.

const data = prompt("알파벳을 입력하세요.");

if (data === data.toUpperCase()) {
  // 입력된 값을 대문자 변환했을 때 기존 입력값과 동일하다면 대문자를 입력한 것이므로,
  console.log("YES");
} else {
  console.log("NO");
}
