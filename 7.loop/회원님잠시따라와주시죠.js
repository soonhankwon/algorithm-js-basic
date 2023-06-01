/**
 * 서비스 이용 동의 리스트를 받아오는 업무
 * 이용동의 회원 "Yes" -> 숫자 1
 * 미동의 회원 "No" -> 숫자 0
 * 숫자를 다시 "Yes", "No" 로 바꾸어 리스트 재구성하려고 한다.
 * 회원들의 동의 여부 배열 list
 * 회원들의 동의여부를 "Yes", "No" 로 바꾸어 구성된 배열을 return 하는 solution 함수
 */

const list1 = [1,0,0,1];
const list2 = [1,1,1,1,0,1];

function solution(list) {
    const res = [];
    list.forEach(element => {
        if(element === 1)
            res.push("Yes");
        else
            res.push("No");
    });
    return res;
}

console.log(solution(list1));
console.log(solution(list2));