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

//제거한 0의 개수 세기
function solution(array) {
  return array.filter((n) => n == 0).length;
}

function solution(array) {
  return array.reduce((a, c) => {
    if (c == 0) {
      a++;
    }

    return a;
  }, 0);
}

function solution(array) {
  return array.map((n) => (n === 0 ? 1 : undefined)).filter((n) => n !== undefined).length;
}

console.log(solution([1, 0, 2, 0, 0, 3, 4])); //[1, 2, 3, 4]
