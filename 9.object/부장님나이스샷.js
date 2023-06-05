/**
 * 사내 볼링 대회의 등수별 수상자의 상품 정리
 * 등수별 수상자의 인원이 적힌 객체 winners
 * 해당 등수를 수상할 인원의 수에 맞게 배열에 담아 
 * return 하는 함수 solution
 */

function solution(winners) {
    const ans = [];
    for(place in winners) {
        console.log(place, winners[place]);
        for(let i = 0; i < winners[place]; i++) {
            ans.push(Number(place));
        }
    }
    return ans;
}

console.log(solution({1:1, 2:2, 3:4}));