//https://school.programmers.co.kr/learn/courses/30/lessons/134240
function solution(food) {
  var answer = '';
  let temp = [];
  food.reduce((a, c, i) => {
    console.log('dddd', a, c, i);
    if (i > 0) {
      if (c >= 2) temp.push({ food: i, count: c });
    } else {
      temp.push({ food: i, count: c });
    }
  }, []);

  let arr = [];
  temp.filter((fc, i) => {
    if (fc.count > 1) {
      console.log(fc.count);
      arr.push(fc.food.toString().repeat(Math.floor(fc.count / 2)));
    }
  });

  console.log('arr', arr);

  return (answer = arr.join('') + '0' + arr.reverse().join(''));
}

//다른 풀이
function solution(food) {
  let res = '';
  for (let i = 1; i < food.length; i++) {
    res += String(i).repeat(Math.floor(food[i] / 2));
  }

  return res + '0' + [...res].reverse().join('');
}
console.log(solution([1, 7, 1, 2])); //"111303111"
