/**
 * 잘 등록되었는지 확인하기 위해서 개발팀의 명단을 출력해보려고 한다.
 * 각 팀의 명단을 담은 객체 team
 * 개발팀의 명단을 배열로 return 하는 함수 solution
 * 
 * team 객체에 개발팀에 해당하는 속성이 없는 경우 -> -1 return
 * team 객체에 개발팀은 있지만 명단에 아무도 없는경우 -> 빈배열 return
 */

function solution(team) {
    return team.dev === undefined ? -1 : team.dev;
}

console.log(solution({dev:["카페", "라떼", "원두"]}))
console.log(solution({mento:["은정", "세준", "아라"]}))
console.log(solution({dev:[], operation: ["시윤"]}))