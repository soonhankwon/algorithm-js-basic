/**
 * 간식을 전하는 봉사
 * 0~3세 분유스틱
 * 4~7세 초콜릿과 사탕
 * 나머지 쿠키
 */

const exceptionMessage = "나이는 0 이상이어야 합니다.";

function solution(age) {
    
    if(age < 0) {
        return exceptionMessage;
    } else if (age >= 0 && age < 4) {
        return "분유스틱";
    } else if (age >= 4 && age < 8) {
        return "초콜릿과 사탕";
    } else {
        return "쿠키";
    }
}

console.log(solution(-1));
console.log(solution(7));
console.log(solution(2));
console.log(solution(19));