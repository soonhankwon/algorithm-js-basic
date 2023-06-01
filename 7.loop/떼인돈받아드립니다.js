/**
 * 다른 업체들로부터 받아야 할돈을 자동으로 계산해줄 수 있는 프로그램
 * 계산서에는 업체마다 받아야 할 금액들이 배열형태
 * 해당 업체에서 받을 금액의 합계를 계산하는 프로그램
 * 금액들이 나열된 2차원 배열 bill
 * 각 업체에게 받을 금액의 합계를 배열에 순서대로 담아 return 하는 함수 solution
 */

const bill1 = [[1000,500,800], [600,200,200]];
const bill2 = [[1,2], [3,3,4,5,6]];

function solution(bill) {
    const res = [];
    let sum = 0;
    bill.forEach(e => {
        for(let i = 0; i < e.length; i++) {
            sum += e[i];
        }
        res.push(sum);
        sum = 0;
    });
    return res;
}

console.log(solution(bill1));
console.log(solution(bill2));