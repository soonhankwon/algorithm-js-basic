/**
 * 배열에 요소 추가/제거하기
 * const arr = [1,2,3,4];
 * arr.push(5); -> [1,2,3,4,5] (맨 뒤 추가) -> stack push, pop 과 같음
 * arr.pop() -> [1,2,3] (맨 뒤 요소 뺌)
 * arr.unshift(5) -> [5,1,2,3,4] (맨 앞 추가)
 * arr.shift() -> [2,3,4] (맨 앞 요소 뺌) -> queue dequeue(poll)
 */

/**
 * 발표 순서를 정하는 규칙
 * 지난 발표에서 첫번째로 발표한 사람은 마지막 순서로 발표
 * 새로 참여하는 사람은 첫번째 
 * 나머지 사람들의 발표 순서는 동일
 * 지난번 발표한 사람들의 닉네임 순서대로 담긴 배열 prev
 * 새로 참여한 사람의 닉네임 문자열 join
 * 이번 스터디의 발표 순서가 담긴 배열을 return 하는 함수 solution
 */
const arr1 = ["sudo", "임금"];
const arr2 = ["아버", "광어", "안드로이드", "siri"];
const join1 = "라떼";
const join2 = "피카츄";

function solution(prev, join) {
    const temp = prev.shift();
    prev.unshift(join);
    prev.push(temp);
    return prev;
}

console.log(solution(arr1, join1));
console.log(solution(arr2, join2));