//https://school.programmers.co.kr/learn/courses/30/lessons/42889
// function solution(N, stages) {
//   var answer = [];

//   const organizeObj = stages.reduce((a, c) => {
//     console.log('a', a, 'c', c);
//     a[c] = (a[c] || 0) + 1;
//     return a;
//   }, {});
//   console.log('organizeObj', organizeObj);

//   const organizeList = Object.entries(organizeObj).map(([stage, count]) => ({
//     stage: parseInt(stage), // stage를 숫자로 변환 (선택 사항)
//     count: count,
//   }));

//   console.log('organizeList', organizeList);

//   let cumulativeGamer = 0;
//   let resultObj = {};
//   let resultList = [];
//   for (i = 0; i < N; i++) {
//     console.log('cumulativePeople', organizeList[i].count, stages.length - cumulativeGamer);

//     const result = organizeList[i].count / (stages.length - cumulativeGamer);
//     if (i + 1 == organizeList[i].stage) resultObj = { stage: i + 1, result: result };
//     else resultObj = { stage: i + 1, result: 0 };

//     console.log(i, '|| ', resultObj);

//     cumulativeGamer += organizeList[i].count;

//     resultList.push(resultObj);
//     console.log('|| ', resultList);

//     resultList.sort((x, y) => y.result - x.result);
//     answer = resultList.map((item) => item.stage);
//   }
//   console.log('&& ', answer);
//   return answer;
// }

function solution(N, stages) {
  let answer = [];

  // 각 스테이지에 도달한 플레이어 수를 저장하는 배열
  let stageCount = Array(N + 2).fill(0);

  // 각 스테이지에 도달한 플레이어 수를 계산
  stages.forEach((stage) => {
    stageCount[stage]++;
  });

  let playersRemaining = stages.length; // 도전 중인 플레이어 수

  let failureRates = [];

  for (let i = 1; i <= N; i++) {
    if (playersRemaining === 0) {
      failureRates.push({ stage: i, failureRate: 0 });
    } else {
      let failureRate = stageCount[i] / playersRemaining;
      failureRates.push({ stage: i, failureRate: failureRate });
      playersRemaining -= stageCount[i];
    }
  }

  // 실패율을 기준으로 내림차순으로 정렬, 동일한 경우 스테이지 번호가 작은 순으로
  failureRates.sort((a, b) => {
    if (b.failureRate === a.failureRate) {
      return a.stage - b.stage;
    }
    return b.failureRate - a.failureRate;
  });

  // 정렬된 실패율을 기준으로 스테이지 번호만 추출
  answer = failureRates.map((item) => item.stage);

  console.log(answer);
  return answer;
}

//다른풀이
//훨씬 깔끔하고 이해하기 좋음 내가 짜려던 코드에서 사이드 이펙트 날 수 있는 부분을 만들지 않고 깔끔하게 만들었음
function solution(N, stages) {
  let result = [];
  for (let i = 1; i <= N; i++) {
    let reach = stages.filter((x) => {
      return x >= i;
    }).length;
    // console.log('reach', reach);
    let curr = stages.filter((x) => {
      // console.log(x, i);
      return x === i;
    }).length;
    console.log('curr', curr);
    result.push([i, curr / reach]);
    console.log(result);
  }
  result.sort((a, b) => b[1] - a[1]);
  return result.map((x) => x[0]);
}

solution(5, [2, 1, 2, 6, 2, 4, 3, 3]);
// solution(4, [4, 4, 4, 4, 4]);
