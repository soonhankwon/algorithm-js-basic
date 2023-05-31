/**
 * 거래처에 상품권 번호를 전달해라
 * 사장님 -> 100만원
 * 나머지 -> 50만원
 * 사장님 이름 나사장
 * 이름을 입력하면 사장님과 임원에 각각 맞는 상품권 코드를 return 해주는 함수
 * 입력값 name
 */

const vipPresent = "code100";
const generalPresent = "code50";

function solution(name) {
    const covertedName = String(name);
    return covertedName === "나사장" ? vipPresent : generalPresent;
}

console.log(solution("나사장"))
console.log(solution("나임원"))