/**
 * 현재까지 예약된 손님 리스트 list
 * 수용 가능한 예약자 수 limit
 * 새로 예약 신청된 손님의 수 reports
 * 현재까지 예약된 손님의 수와 수용가능한 손님의 수를 고려해
 * 새로 예약을 신청한 손님을 받을 수 있는지 boolean 타입으로 return 하는 함수 solution
 */

const arr1 = [1,5,4,3];
const limit1 = 15;
const reports1 = 3;
const arr2 = [1,1,1,2];
const limit2 = 7;
const reports2 = 2;

function solution(list, limit, reports) {
    let sum = reports;
    let index = 0;
    list.sort().reverse(); //정렬로 합이 초과되는경우 빠르게 결과가 나오도록
    while(sum <= limit) {
        if(index === list.length) {
            return true; 
        } else {
            sum += list[index];
            index++;
        }
    }
    return false;
}

console.log(solution(arr1, limit1, reports1));
console.log(solution(arr2, limit2, reports2));