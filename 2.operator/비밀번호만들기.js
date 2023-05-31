/**
 * 테스트용 아이디에 대한 비밀번호도 함께 만들어달라
 * 생년월일 + 회사의 설립연도
 * 팀원들의 이메일에 비밀번호는 @@@@입니다. 라고 전송하려 한다.
 * 생년월일 birth, 설립연도 date
 * "비밀번호는 @@@@입니다." 를 return 하는 함수 solution
 */

function solution(birth, date) {
    const password = birth + date;
    return `비밀번호는 ${password}입니다.`
}

console.log(solution(900501, 2021));