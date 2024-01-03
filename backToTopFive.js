/* 
정수로 이루어진 리스트 num_list가 주어집니다. num_list에서 가장 작은 5개의 수를 오름차순으로 담은 리스트를 return하도록 solution 함수를 완성해주세요.
*/

function solution(num_list) {
  var answer = [];
  const lank = num_list.sort(function (a, b) {
    return a - b;
  });
  answer = lank.slice(0, 5);
  return answer;
}

function solution(num_list) {
  return num_list.sort((a, b) => a - b).slice(0, 5);
}