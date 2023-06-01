/**
 * const week = ["월", "화", "수", "목", "금"];
 * week.map((e) => "A" + e); -> ["A월", "A화".....]   
 * const numList = [1,2,3,4,5]
 * const res = numList.filter((num) => num % 2 === 0);
 * -> [2,4]
 */

/**
 * 창립기념일 파티에 초대할 사람에게 메일
 * 초대자 이름 뒤에 "님" 을 붙여서 메일 전송
 * 초대자 명단이 담겨있는 배열 nameList
 * 각 초대자 이름 뒤에 "님" 을 추가한 배열을 return 하는 함수 solution
 */

const nameList1 = ["병건", "호민", "풍"];

function solution(nameList) {
    return nameList.map((e) => e + "님");;
}

console.log(solution(nameList1));