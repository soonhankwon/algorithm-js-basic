/**
 * 어린딸이 비밀일기장 -> 알파벳 어순을 거꾸로 작성
 * 문자열 str이 주어질 때 비밀일기를 해석한 내용을
 * return 하는 함수 solution
 */

const str1 = "R dzmg gl vzg ggvlpylppr";
const str2 = "Xzgh ziv xfgv";

function solution(str) {
    let ans = "";
    for(let i = 0; i < str.length; i++) {
        let lowerCasedStr = str.toLowerCase();
        if(lowerCasedStr.charAt(i) === " ") {
            ans += " ";
        } else {
            const decryption = 219 - lowerCasedStr.charCodeAt(i);
            ans += String.fromCharCode(decryption);
        }
    }
    return ans.charAt(0).toUpperCase() + ans.slice(1);
}

console.log(solution(str1));
console.log(solution(str2));