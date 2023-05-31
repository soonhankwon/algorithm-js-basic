/**
 * 연산자 +, -, *, /, %
 * 사내 컨퍼런스에 제공될 도넛을 사야한다.
 * 컨퍼런스 참여인원 n
 * 한 상자에 들어있는 도넛의 개수 donuts -> m
 * 컨퍼런스에 참여하는 모든 인원이 도넛 하나씩 받을수 있게 구매하려면
 * 몇 박스의 도넛을 구매해야하는지 return
 */

function solution(n, m) {
    const conferencePeopleNumber = n; //40
    const donuts = m; //8
    return conferencePeopleNumber / donuts;
}

console.log("필요한 도넛 상자는 = " + solution(40, 8) + "상자");