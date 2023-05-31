/**
 * 3주년 - 5일
 * 5주년 - 12일
 * 10주년 - 30일 휴가
 * 본인의 연차를 입력하면 안식휴가 몇일?
 * 연차 year, 안식휴가일수 return 함수 solution
 */

function solution(year) {
    if(year === 3) {
        return 5;
    } else if (year === 5) {
        return 12;
    } else if (year === 10) {
        return 30;
    } else {
        return 0;
    }
}

console.log(solution(3));
console.log(solution(4));
console.log(solution(5));
console.log(solution(7));
console.log(solution(10));