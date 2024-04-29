function solution(edges) {
  var answer = [];
  const firstvertex = edges[0][0];
  console.log('fifi', firstvertex);
  answer.push(firstvertex);

  return answer;
}

solution([
  [2, 3],
  [4, 3],
  [1, 1],
  [2, 1],
]); //	[2, 1, 1, 0]
