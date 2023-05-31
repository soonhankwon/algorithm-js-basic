/**
 * 피규어 가격 57000
 * 상여금 money
 * 상여금으로 최대로 살수있는 피규어의 개수를 return 하는 solution 함수
 */

function solution(money) {
    const itemPrice = 57000;
    return Math.floor(money / itemPrice);
}

console.log(solution(230000));
console.log(solution(769000));
console.log(solution(35000));