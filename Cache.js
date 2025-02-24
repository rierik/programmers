//https://school.programmers.co.kr/learn/courses/30/lessons/17680
function solution(cacheSize, cities) {
  var answer = 1;

  cities = cities.map((city) => city.toLowerCase());
  let cacheArr = [];
  for (let i = 0; i < cities.length; i++) {
    if (!cacheArr.includes(cities[i])) {
      cacheArr.push(cities[i]);
      answer += 5;
    } else {
      // **LRU 규칙 적용: 기존 위치에서 삭제 후 최신 위치로 이동**
      cacheArr.splice(cacheArr.indexOf(cities[i]), 1);
      cacheArr.push(cities[i]);
      answer += 1;
    }

    if (cacheArr.length > cacheSize) cacheArr.shift();
  }

  return answer - 1;
}
// console.log(solution(3, ['Jeju', 'Pangyo', 'Seoul', 'NewYork', 'LA', 'Jeju', 'Pangyo', 'Seoul', 'NewYork', 'LA'])); //  50
console.log(solution(5, ['Jeju', 'Pangyo', 'Seoul', 'NewYork', 'LA', 'SanFrancisco', 'Seoul', 'Rome', 'Paris', 'Jeju', 'NewYork', 'Rome'])); //  52
