//https://school.programmers.co.kr/learn/courses/30/lessons/178871
function solution(players, callings) {
  var answer = players;
  callings.map((call, i) => {
    console.log(answer.indexOf(call));
    let removed = answer.splice(answer.indexOf(call) - 1, 1, callings[i]);
    let reset = answer.splice(answer.indexOf(call) + 1, 1, ...removed);
  });
  return answer;
}

console.log(solution(['mumu', 'soe', 'poe', 'kai', 'mine'], ['kai', 'kai'])); //players.
