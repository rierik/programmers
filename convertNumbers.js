//https://school.programmers.co.kr/learn/courses/30/lessons/154538
function solution(x, y, n) {
  const queue = [[x, 0]];
  const visited = new Set([x]);
  let head = 0; // queue에서 shift 대신 head 포인터를 사용

  console.log('queue,visited',queue,visited)
  while (head < queue.length) {

    console.log('queue나야',queue[0])
      const [current, count] = queue[head++]; // shift 대신 이렇게
      
      if (current === y) {
          return count;
      }
      
      const nextNumbers = [current + n, current * 2, current * 3];
      console.log('nextNumbers ::::::            ',nextNumbers)
      for (const next of nextNumbers) {
          if (next <= y && !visited.has(next)) {
            console.log('next             ::::',next)
            visited.add(next);
            console.log('visited             ::::',next)
            queue.push([next, count + 1]);
            console.log('queue             ::::',next)
          }
      }
  }
  
  return -1;
}
console.log(solution(10	,40,	5)) //2