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

//다른풀이
function solution(players, callings) {
  let idx;
  let name1;
  let name2;
  const idxList = {};

  players.forEach((name, index) => (idxList[name] = index));
  for (let call of callings) {
    idx = idxList[call];
    name1 = players[idx];
    name2 = players[idx - 1];
    idxList[call] -= 1;
    idxList[name2] += 1;
    players[idx] = name2;
    players[idx - 1] = name1;
  }

  return players;
}

function solution(players, callings) {
  let maps = {};
  for (let i = 0; i < players.length; i++) {
    maps[players[i]] = i;
  }
  callings.forEach((v) => {
    let num = maps[v];
    let temp = players[num - 1];
    players[num - 1] = v;
    players[num] = temp;
    maps[v]--;
    maps[players[num]]++;
  });
  return Object.entries(maps)
    .sort((a, b) => a[1] - b[1])
    .map((v) => v[0]);
}

console.log(solution(['mumu', 'soe', 'poe', 'kai', 'mine'], ['kai', 'kai'])); //['mumu', 'kai', 'soe', 'poe', 'mine']
