/**
 * 전 직원의 키보드를 새것으로 교체하려고 한다.
 * 여러 커머스의 사이트 가격을 비교하여 최저가를 찾아야한다.
 * 사이트에 고지된 키보드의 가격이 prices 배열에 담겨 매개변수로 주어진다.
 * 가장 저렴하게 구매할 수 있는 가격을 return 하는 함수 solution
 */

const prices1 = [20000,113000,67000,40500,99000];
const prices2 = [19900,54200,43000];


function solution(prices) {
    prices.sort((a,b) => a - b);
    return prices[0];
}

function solution2(prices) {
    return Math.min(...prices);
}

console.log(solution(prices1));
console.log(solution(prices2));
console.log(solution2(prices1));
console.log(solution2(prices2));