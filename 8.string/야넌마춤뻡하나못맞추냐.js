/**
 * 원고에 오타가 발견
 * a 가 q로 작성
 * 오타를 한번에 수정해주는 함수
 * 오타가 있는 문장 str
 * 오타가 있다면 수정된 문장을, 없다면 -1을 리턴하는 함수 solution
 */

const str1 = "It works, I don't know why.";
const str2 = "Qre you sleeping? Yes, now shut up. I know how to fix thqt bug on line 255.";

function solution(str) {
    let ans = -1;
    if(str.includes("q") || str.includes("Q")) {
        ans = str.replaceAll("q", "a");
        ans = ans.replaceAll("Q", "A");
        return ans;
    } else {
        return ans;
    }
}

console.log(solution(str1));
console.log(solution(str2));