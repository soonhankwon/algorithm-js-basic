/**
 * 이달의 직원 -> 상품 수여
 * vote 배열에 사원 번호가 1번인 직원의 득표수 부터 순서대로 -> 매개변수
 * 가장 많은 표를 받은 직원의 사원 번호를 return 하는 solution 함수
 */

const arr1 = [5,2,0,1,0];
const arr2 = [0,0,1,7,0,4,2];

function solution(vote) {
    return vote.indexOf(Math.max(...vote)) + 1;
}

console.log(solution(arr1));
console.log(solution(arr2));