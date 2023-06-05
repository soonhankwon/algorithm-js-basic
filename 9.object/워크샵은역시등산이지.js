/**
 * 인원이 홀수가 되는팀 gogo
 * 사람들은 팀 번호 1~5까지 적힌 종이를 뽑는다.
 * 사람들이 뽑은 숫자가 배열에 담기게 된다.
 * 사람들이 뽑은 숫자를 담은 배열 arr 가 주어질 때
 * 워크샵에 가게 되는 팀의 숫자를 return 하는 함수 solution
 */

const arr1 = [1,2,2,1,1];
const arr2 = [5,1,2,2,5,3,3,1,5];
const arr3 = [2,4,3,3,2,4,1];

function solution(arr) {
    let map = new Map();
    let set = new Set();
    for(let i = 0; i < arr.length; i++) {
        set.add(arr[i]);
        if(isNaN(map.get(arr[i])))
            map.set(arr[i], 1);    
        else
            map.set(arr[i], map.get(arr[i]) + 1);    
    }

    const ans = [];
    for(const e of set) {
        if(map.get(e) % 2 === 1)
            ans.push(e);
        else
            continue;
    }
    return ans;
}

function solution2(arr) {
    //Object
    const team = {};
    arr.map((teamNo) => {
        if(team[teamNo] === undefined) 
            team[teamNo] = 1;
        else 
            team[teamNo] = team[teamNo] + 1;
    })

    const numberOfPeople = Object.values(team);
    const odd = numberOfPeople.find((e) => e % 2 === 1);

    const teamNoNumber = Object.keys(team);
    const ans = teamNoNumber.find((e) => team[e] === odd);

    return Number(ans);
}

console.log(solution(arr1));
console.log(solution(arr2));
console.log(solution(arr3));
console.log(solution2(arr1));
console.log(solution2(arr2));
console.log(solution2(arr3));