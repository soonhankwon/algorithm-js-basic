/**
 * 거꾸로 해도 똑같은 단어
 * 친구들에게 추천받은 word 가 주어질 때
 * 거꾸로 해도 똑같은 단어인지 true, false 로 리턴하는 함수 solution
 */

const word1 = "역삼역";
const word2 = "고양이";

function solution(word) {
    let startIndex = 0;
    let endIndex = word.length - 1;
    while(startIndex < endIndex) {
        if(word.charAt(startIndex) !== word.charAt(endIndex)) {
            return false;
        } else {
            startIndex++;
            endIndex--;
        }
    }
    return true;
}

function solution2(word) {
    const reversedWord = word.split("").reverse().join("");
    return word === reversedWord;
}

console.log(solution(word1));
console.log(solution(word2));
console.log(solution2(word1));
console.log(solution2(word2));