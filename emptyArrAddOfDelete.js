/* 
아무 원소도 들어있지 않은 빈 배열 X가 있습니다. 길이가 같은 정수 배열 arr과 boolean 배열 flag가 매개변수로 주어질 때, flag를 차례대로 순회하며 flag[i]가 true라면 X의 뒤에 arr[i]를 arr[i] × 2 번 추가하고, flag[i]가 false라면 X에서 마지막 arr[i]개의 원소를 제거한 뒤 X를 return 하는 solution 함수를 작성해 주세요.

arr	            flag	                            result
[3, 2, 4, 1, 3]	[true, false, true, false, false]	[3, 3, 3, 3, 4, 4, 4, 4]
*/

function solution(arr, flag) {
  var result = [];

  for (let i = 0; i < flag.length; i++) {
    if (flag[i]) {
      const elementsToAdd = Array.from({ length: arr[i] * 2 }, () => arr[i]);
      result.push(...elementsToAdd);
    } else {
      result.splice(-arr[i]);
    }
  }

  return result;
}

/* 다른 풀이 */
function solution(arr, flag) {
  return arr.reduce((prev, num, i) => (flag[i] ? [...prev, ...new Array(num * 2).fill(num)] : prev.slice(0, -num)), []);
}

function solution(arr, flag) {
  var answer = [];

  arr.forEach((x, i) => {
    if (flag[i]) {
      for (let i = 0; i < x * 2; i++) {
        answer.push(x);
      }
    } else {
      answer = answer.slice(0, -x);
    }
  });

  return answer;
}
