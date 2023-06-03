/**
 * 해당 검색어를 포함한 추천 검색어를 추천해주는 프로그램
 * 추천해주고 싶은 검색어 목록은 완성
 * 추천 목록을 언제까지 노출할지?
 * 
 * 사용자가 작성하려고 하는 검색어 문자열 search
 * 추천해줄 검색어 목록 배열 recommends
 * 검색어 목록에 전부 해당하는 가장 긴 문자열을 return 하는 함수 solution
 */

const search1 = "flutter";
const recommends1 = ["flower", "flow", "flight"];
const search2 = "apple";
const recommends2 = ["dog", "racecar", "car"];

function solution(search, recommends) {
    let ans = "";
    for (let i = 0; i < search.length; i++) {
        for (let j = 0; j < recommends.length; j++) {
            if (search.charAt(i) !== recommends[j].charAt(i)) {
                break;
            }
            if(j === recommends.length - 1) {
                ans += search.charAt(i);
            } 
        }
    }
    return ans;
}

function solution2(search, recommends) {
    let ans = "";
    for (let i = 1; i <= search.length; i++) {
        let searchWord = search.slice(0, i);

        for(let j = 0; j < recommends.length; j++) {
            if(!recommends[j].startsWith(searchWord)) {
                return ans;
            }
        }
        ans = searchWord;
    }
    return ans;
}

console.log(solution(search1, recommends1));
console.log(solution(search2, recommends2));
console.log(solution2(search1, recommends1));
console.log(solution2(search2, recommends2));