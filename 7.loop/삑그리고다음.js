/**
 * 랜덤 바코드 숫자 기능
 * 바코드는 0~9 까지의 숫자 13자리
 * 바코드에 들어갈 숫자들이 담긴 배열이 주어질 때
 * 모든 0을 배열의 끝으로, 나머지는 순서를 유지한 배열을 return 하는 함수 solution
 */

const barcode1 = [8, 8, 0, 1, 2, 3, 4, 5, 6, 0, 1, 0, 5];
const barcode2 = [0, 7, 6, 0, 0, 4, 6, 9, 0, 2, 5, 0, 1];

function solution(barcode) {
    const arr1 = barcode.filter((e) => e !== 0);
    const arr2 = barcode.filter((e) => e === 0)
    return [...arr1,
        ...arr2];
}

console.log(solution(barcode1));
console.log(solution(barcode2));