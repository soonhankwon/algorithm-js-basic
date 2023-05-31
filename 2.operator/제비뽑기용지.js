/**
 * 제비뽑기 용지를 만들어야 한다.
 * 종이 1cm 정사각형으로 만들어야 함
 * 가로 길이 a, 세로 길이 b
 * 가위질을 몇 번 해야하는지 return하는 함수 solution
 */

// a = 20 , b = 50 -> 1000 넓이
// (1000 / 1) - 1

function solution(a, b) {
    return a * b - 1;
}

console.log(solution(100,100));
console.log(solution(1,1));
console.log(solution(20,50));