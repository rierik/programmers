//https://school.programmers.co.kr/learn/courses/30/lessons/178871
function solutions(players, callings) {
  var answer = players;
  callings.map((call, i) => {
    console.log(answer.indexOf(call));
    let removed = answer.splice(answer.indexOf(call) - 1, 1, callings[i]);
    let reset = answer.splice(answer.indexOf(call) + 1, 1, ...removed);
  });
  return answer;
}

function solution(players, callings) {
  var answer = players;
  var playerIndices = {};

  for (let i = 0; i < answer.length; i++) {
    playerIndices[answer[i]] = i;
  }
  console.log('playerIndices', playerIndices);

  for (let i = 0; i < callings.length; i++) {
    let call = callings[i];
    let index = playerIndices[call];

    console.log('index', index);

    if (index > 0) {
      // 맨 앞에 있는 경우는 제외
      let previousPlayer = answer[index - 1];
      console.log('previousPlayer', previousPlayer, call);

      // 두 선수의 위치를 교환
      answer[index - 1] = call;
      answer[index] = previousPlayer;

      // 인덱스 업데이트
      playerIndices[call] = index - 1;
      playerIndices[previousPlayer] = index;
    }
  }

  return answer;
}

console.log(solution(['mumu', 'soe', 'poe', 'kai', 'mine'], ['kai', 'kai'])); //['mumu', 'kai', 'soe', 'poe', 'mine']
