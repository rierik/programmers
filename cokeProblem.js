//https://school.programmers.co.kr/learn/courses/30/lessons/132267?language=javascript
function solutions(give, take, init) {
  // 문제 해석하여 들어오는 인자를 대입해보면 a = 가져다줘야 하는 병 수 2 b = 돌려받을 수 있는 병 수 1 n = 20 내가 가지고 있는 콜라병 수
  var answer = 0;

  while (init >= give) {
    answer += Math.floor(init / give) * take;
    init = Math.floor(init / give) * take + Math.floor(init % give);
  }

  return answer;
}

//다른 풀이
solutions = (give, take, init) => Math.floor(Math.max(init - take, 0) / (give - take)) * take;

function solution(give, take, init) {
  let answer = 0;
  while (init >= give) {
    answer += parseInt(init / give) * take;
    init = parseInt(init / give) * take + (init % give);
  }
  return answer;
}

function solution(give, take, init) {
  let answer = 0;
  for (let i = give; i <= init; i += give) {
    answer += take;
    init += take;

    console.log(i, give, take, init);
  }
  return answer;
}
console.log(solution(3, 2, 20));
