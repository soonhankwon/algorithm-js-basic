/**
 * 프로젝트 명세서
 * 프로젝트 사용된 기술 스택의 이름 배열 stacks 로 주어질 때
 * 내림차순 정렬 return 하는 함수 solution
 * 오름차순 정렬 sort()
 */

function solution(stacks) {
    return stacks.sort().reverse();
}

const arr1 = ["typescript", "express", "node", "react"];
const arr2 = ["docker", "graphql", "javascript"];

console.log(solution(arr1))
console.log(solution(arr2))