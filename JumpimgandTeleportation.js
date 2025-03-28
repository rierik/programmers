//https://school.programmers.co.kr/learn/courses/30/lessons/12980
// function solution(n) {
//   var ans = 0;

//   while (n !== 1) {
//     console.log('n', n);
//     if (n % 2 === 0) {
//       n = n / 2;
//     } else {
//       ans++;
//       n = (n - 1) / 2;
//     }
//   }

//   return ans + 1;
// }

function solution(n) {
  if (n === 0) return 0; // 종료 조건
  console.log('n', n, Math.floor(n / 2));
  return (n % 2) + solution(Math.floor(n / 2));
}

console.log(solution(5)); //2
// console.log(solution(6)); //2
// console.log(solution(5000)); //5
