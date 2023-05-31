/**
 * 테스트용 아이디를 만드는 업무
 * 팀원의 영어 이름 + 생년월일6자리 -> 아이디
 * 영어이름 name, 생년월일 birth
 * 만들어지는 아이디를 return 하는 함수 solution
 */

function solution(name, birth) {
    const id = name + birth;
    return id;
}

console.log(solution("marco", 971204));