/**
 * 호빵 - 한팩에 5개
 * n 명의 사무실 직원과 나눠먹어야한다.
 * 최소 몇팩을 구매해야하는지 return 하는 함수 solution
 */

function solution(n) {
    const itemsWithOnePack = 5;
    return Math.ceil(n/itemsWithOnePack);
}

console.log(solution(23));
console.log(solution(76));
console.log(solution(3));