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

//다른풀이
function solution(sizes) {
  const [hor, ver] = sizes.reduce(
    ([h, v], [a, b]) => {
      console.log('>>>', [h, v], [a, b]);
      return [Math.max(h, Math.max(a, b)), Math.max(v, Math.min(a, b))];
    },
    [0, 0],
  );
  return hor * ver;
}

function solution(sizes) {
  const rotated = sizes.map(([w, h]) => (w < h ? [h, w] : [w, h]));

  let maxSize = [0, 0];
  rotated.forEach(([w, h]) => {
    if (w > maxSize[0]) maxSize[0] = w;
    if (h > maxSize[1]) maxSize[1] = h;
  });
  return maxSize[0] * maxSize[1];
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
