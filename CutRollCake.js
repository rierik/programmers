//https://school.programmers.co.kr/learn/courses/30/lessons/132265
function solution(topping) {
  var answer = 0;
  let leftRollcakeSet = new Set(); // 왼쪽 토핑 종류 저장
  let rightRollcakeMap = new Map(); // 오른쪽 토핑 개수 저장

  // oldRollcakeMap(형 토핑 개수 저장)
  for (let t of topping) {
    rightRollcakeMap.set(t, (rightRollcakeMap.get(t) || 0) + 1);
  }

  // 반복하면서 토핑 이동
  for (let i = 0; i < topping.length - 1; i++) {
    leftRollcakeSet.add(topping[i]); // 왼쪽(young)에 추가

    // 오른쪽(old)에서 개수 감소
    if (rightRollcakeMap.get(topping[i]) === 1) {
      rightRollcakeMap.delete(topping[i]); // 개수가 0이면 삭제
    } else {
      rightRollcakeMap.set(topping[i], rightRollcakeMap.get(topping[i]) - 1);
    }

    // 서로 다른 토핑 개수 비교
    if (leftRollcakeSet.size === rightRollcakeMap.size) {
      answer++;
    }
  }

  return answer;
}

// console.log(solution([1, 2, 1, 3, 1, 4, 1, 2])); // 2
console.log(solution([1, 2, 3, 1, 4])); // 0
