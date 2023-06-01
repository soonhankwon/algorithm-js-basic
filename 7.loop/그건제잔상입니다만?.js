/**
 * 직원 외 인물이 회사 내부 네트워크망 접속
 * 회사 IP 주소로만 접속이 가능
 * 네트워크망에 접속한 회원의 IP 주소 userList
 * 접속가능한 회사 IP 주소 ip
 * 허용되지 않는 IP 주소로 접속한 회원의 IP주소를 나열한 배열을 
 * return 하는 함수 solution
 */

const userList1 = ["123.123.02", "123.123.02", "432.233.07", "123.173.08"];
const ip1 = "123.123.02";
const userList2 = ["228.093.22", "228.093.22", "228.093.22"];
const ip2 = "228.093.22";

function solution(userList, ip) {
    return userList.filter((e) => e !== ip);
}

console.log(solution(userList1, ip1));
console.log(solution(userList2, ip2));