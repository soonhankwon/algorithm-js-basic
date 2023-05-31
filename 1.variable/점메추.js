/**
 * 원두는 매일 점심시간 메뉴를 정해야한다.
 * 선배에게 받은 추천메뉴 recommend 매개변수로 주어진다.
 * 해당 추천 메뉴를 menu 상수에 선언 및 할당하여 return 하는 함수 solution
 */

const recommend = "부대찌개";

function solution(recommend) {
    const menu = recommend;
    return menu;
}

console.log("오늘의 추천 메뉴 = " + solution(recommend));