//https://school.programmers.co.kr/learn/courses/30/lessons/131705

// function solution(number) {
//   var answer = 0;
//   for (i = 0; i < number.length - 2; i++) {
//     for (j = i + 1; j < number.length - 1; j++) {
//       for (k = j + 1; k < number.length; k++) {
//         console.log('number.length - 1 :::]]]]]', i, j, k);
//         console.log('k', k);
//         if (number[i] + number[j] + number[k] == 0) {
//           answer += 1;
//         }
//       }
//     }
//   }
//   return answer;
// }

//다른풀이
function solution(number) {
  let result = 0;

  const combination = (current, start) => {
    console.log('current, start', current, start);
    if (current.length === 3) {
      result += current.reduce((acc, cur) => acc + cur, 0) === 0 ? 1 : 0;
      return;
    }

    //start = 0
    for (let i = start; i < number.length; i++) {
      combination([...current, number[i]], i + 1);
    }
  };
  combination([], 0);
  return result;
}

// 서로 다른 사람 3명을 필요로하므로
// 조합 활용 => 3명이 존재 => 그 합을 구하여 0이면 count++;
// combination 함수 사용
solution([-2, 3, 0, 2, -5]);
