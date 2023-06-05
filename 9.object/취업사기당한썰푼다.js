/**
 * 각 팀의 명단을 담은 객체 team
 * 원두를 개발팀에 추가하여 return 하는 함수 solution
 */

function solution(team) {
    team.dev.push("연두");
    return team;
}

console.log(solution({dev : ["카페", "라뗴"]}));