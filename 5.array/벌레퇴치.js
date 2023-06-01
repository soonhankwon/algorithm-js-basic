/**
 * const arr = [0,1,2,3,4]
 * arr.splice(시작인덱스, 개수); 시작 인덱스 부터 개수 제거
 * arr.splice(1,2); -> [0,3,4]
 * arr.slice(시작인덱스, 끝인덱스); 시작인덱스부터 끝 인덱스 전까지 가져옴
 * arr.slice(1,3); -> [1,2]
 */

/**
 * 작성한 코드중에 버그를 찾아 제거하세요
 * 배열 feature -> code 또는 bug 가 담겨있음
 * feature 에 bug 가 있다면 제거한 배열을 return 하는 함수 solution
 */

const arr1 = ["code", "bug", "code", "bug"];
const arr2 = ["code", "code"];
const arr3 = ["code", "bug", "code", "bug"];
const arr4 = ["code", "code"];

// 배열 feature 안에 있는 bug의 개수는 0 또는 1개
function solution1(feature) {
    feature.splice(feature.indexOf("bug"), 1);
    return feature;
}

function solution2(feature) {
    for(i = 0; i < feature.length; i++) {
        if(feature[i] === "bug") {
            feature.splice(i, 1);
        }
    }
    return feature;
}

console.log(solution1(arr1));
console.log(solution1(arr2));
console.log("for문 사용 = " + solution2(arr3));
console.log("for문 사용 = " + solution2(arr4));