/**
 * 경마장 사이트 : 5장까지 구매가 불가능하다.
 * 문자열 "1"로 입력이 되어 덧셈했을때 연산이 이상하게 되고있다.
 * 무조건 숫자로 바꿔 출력
 */

const exceptionMessage = "5장까지 구매가 불가능합니다.";

function solution(n) {
    const convertedNumber = Number(n);
    if(convertedNumber >= 5) 
        return exceptionMessage;
    else 
        return convertedNumber;
}

console.log(solution("2"));
console.log(solution(1));
console.log(solution(5));
console.log(solution("5"));