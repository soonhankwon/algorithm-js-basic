/**
 * 배열에 요소 추가/제거하기
 * const arr = [1,2,3,4];
 * arr.push(5); -> [1,2,3,4,5] (맨 뒤 추가) -> stack push, pop 과 같음
 * arr.pop() -> [1,2,3] (맨 뒤 요소 뺌)
 * arr.unshift(5) -> [5,1,2,3,4] (맨 앞 추가)
 * arr.shift() -> [2,3,4] (맨 앞 요소 뺌) -> queue dequeue(poll)
 */

/**
 * 점심 메뉴를 매일 결정해야한다.
 * 배열 menuList -> 기존에 적어둔 메뉴 목록
 * 오늘 먹은 점심 메뉴 today 로 주어졌을때
 * 오늘 먹은 메뉴가 추가된 새로운 메뉴 목록을 return 하는 함수 solution
 */

function solution(menuList, today) {
    if(menuList.length > 10) {
        return menuList;
    } 
    if(menuList.includes(today)) {
        return menuList;
    } else {
        menuList.push(today);
        return menuList;
    }
}

const arr1 = ["돈까스", "마라샹궈"];
const arr2 = ["국밥", "파스타", "카레라이스"];
const arr3 = ["쌀국수"];

console.log(solution(arr1,"마라탕"));
console.log(solution(arr2,"닭갈비"));
console.log(solution(arr3,"쌀국수"));