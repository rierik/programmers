//https://school.programmers.co.kr/learn/courses/30/lessons/42578
function solution(clothes) {
  var answer = 0;

  const grouped = clothes.reduce((acc, [item, type]) => {
    if (!acc[type]) acc[type] = [];
    acc[type].push(item);
    return acc;
  }, {});

  answer = Object.values(grouped).reduce((acc, items) => acc * (items.length + 1), 1) - 1;

  return answer;
}

console.log(
  solution([
    ['blue_sunglasses', 'eyewear'],
    ['yellow_hat', 'headgear'],
    ['green_turban', 'headgear'],
  ]),
); // 5
