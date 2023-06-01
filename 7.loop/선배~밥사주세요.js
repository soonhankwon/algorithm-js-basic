/**
 * 회사를 전부 뒤져서 선배 개발자의 위치를 찾아내려고 한다.
 * 선배 개발자 위치 1로 표시된 2차원 배열 map
 * 선배 개발자가 위치한 방의 숫자와 몇번자리에 있는지 찾아
 * 선배님은 x번 방, y번 자리에 있습니다. 문구를 return 하는 함수 solution
 * 찾지 못한경우 "선배님을 찾을 수가 없습니다." 문구 return
 */

const map1 = [[0, 0], [0], [0, 1, 0], [0, 0]];
const map2 = [[0], [0, 0], [0], [0, 0], [0, 0]];

function solution(map) {
    let ans = "선배님을 찾을 수가 없습니다.";
    let curRoomNo = 1;
    map.forEach((e) => {
        for(let i = 0; i < e.length; i++) {
            if(e[i] === 1) {
                return ans = "선배님은 " + `${curRoomNo}` + "번 방, " + `${i+1}` + "번 자리에 있습니다." ;
            }
        }
        curRoomNo++;
    });
    return ans;
}

console.log(solution(map1));
console.log(solution(map2));