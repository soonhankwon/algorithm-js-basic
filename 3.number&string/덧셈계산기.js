/**
 * 덧셈 계산기를 개선하려 한다.
 * 문자열 타입으로 된 숫자를 입력해도 제대로 작돌하도록
 * 입력값 num1, num2
 * 입력된 값의 합을 return 하는 함수 solution
 */

function solution(num1, num2) {
    const result = Number(num1) + Number(num2);
    return result;
}

console.log(solution("1", 2));