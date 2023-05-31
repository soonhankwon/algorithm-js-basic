// let age; -> let age = 20; age = 21;
// const age;(X) const age = 20;(O) age = 21 (X)
/**
 * 원두의 이력서
 * 원두 -> A 회사에 이력서
 * B 회사로 이력서 변경 희망
 * 회사 a , 회사 b 매개변수
 * let을 이용해 company라는 변수명으로 a를 할당해서 선언 후
 * b 로 재할당 후 company 변수를 return 하는 함수 solution 을 완성하세요
 */

const a = "naver";
const b = "kakao";

function solution(a, b) {
    let company = a;
    company = b;
    return company;
}

console.log("answer = " + solution(a, b));