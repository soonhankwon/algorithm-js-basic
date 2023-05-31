/**
 * Number, String
 * typeOf("string") === 'string'
 * "123" -> Number("123") === 123
 * String(123) === "123"
 */

/**
 * 덧셈 계산기를 만들어라
 * 문자열은 숫자로 변환해라
 * 계산기에 입력된 값이 어떤 타입인지 확인하는 함수
 * 입력값 num1, num2 -> 각각 어떤 타입인지를 return 하는 함수 solution 
 */

function solution(num1, num2) {
    const type1 = typeof(num1);
    const type2 = typeof(num2);
    return `${type1} ${type2}`; 
}

function solution1(num1) {
    return Number(num1);
}

console.log(solution("9", 10));
console.log(solution1("스트링"));