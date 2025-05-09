function solution(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== 0) {
      result.push(array[i]);
    }
  }
  return result;
}

function solution(array) {
  return array.filter((n) => n !== 0);
}

console.log(solution([1, 0, 2, 0, 0, 3, 4])); //[1, 2, 3, 4]
