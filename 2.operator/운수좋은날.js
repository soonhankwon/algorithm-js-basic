/**
 * n원을 주웠다.
 * 자신이 가진돈 6000 + n
 * 팀원들에게 커피를 사주려고 한다.
 * 4100원 짜리 아메리카노를 주문
 * n 이 매개변수, 팀원의 수가 members
 * 원두에게 남은돈이 얼마인지 return 하는 함수 solution
 */

const americanoPrice = 4100;
const myCoin = 6000;

function solution(n, members) {
    return n + myCoin - (members * americanoPrice);
}

console.log("나에게 남은돈은...." + solution(50000, 12));