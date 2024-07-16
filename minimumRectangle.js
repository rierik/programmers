function solution(sizes) {
  var w_max = [];
  var h_max = [];
  for (var i = 0; i < sizes.length; i++) {
    sizes[i].sort((a, b) => b - a);
    w_max.push(sizes[i][0]);
    h_max.push(sizes[i][1]);
  }
  return Math.max(...w_max) * Math.max(...h_max);
}

console.log(
  solution([
    [60, 50],
    [30, 70],
    [60, 30],
    [80, 40],
  ]),
);
//40000
