function solution(arr) {
  const countMap = {}; // 등장 횟수 저장용

  for (let num of arr) {
    if (countMap[num]) {
      countMap[num]++;
    } else {
      countMap[num] = 1;
    }
  }

  console.log(countMap);

  let maxCount = 0;
  let result = Infinity;

  for (let key in countMap) {
    console.log('key', key);
    let value = countMap[key];
    console.log('value', value);
    if (value > maxCount) {
      maxCount = value;
      result = Number(key); // 문자열 키를 숫자로
    } else if (value === maxCount) {
      result = Math.min(result, Number(key));
    }
  }

  return result;
}

console.log(solution([1, 2, 2, 3, 3, 3, 4])); //    ➞ 3
solution([1, 1, 2, 2]); //   ➞ 1   // 1과 2가 둘 다 2번씩, 더 작은 값인 1 반환
solution([7]);
