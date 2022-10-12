// 다음 소스코드를 완성하여 날짜와 시간을 출력하시오

var year = '2019';
var month = '04';
var day = '26';
var hour = '11';
var minute = '34';
var second = '27';

var date = year.concat('/', month, '/', day);
var time = hour.concat(':', minute, ':', second);
var result = date.concat(' ', time);
console.log(result);
// 출력
// 2019/04/26 11:34:27
