//https://school.programmers.co.kr/learn/courses/30/lessons/42587
function solution(priorities, location) {
  let queue = priorities.map((priority, index) => ({ priority, index })); // (우선순위, 인덱스) 저장
  let executionOrder = 0; // 실행 순서

  console.log('queue', queue);
  while (queue.length > 0) {
    let current = queue.shift(); // 현재 프로세스 꺼냄
    console.log('current', current);

    // 🔥 더 높은 우선순위가 남아 있으면 다시 큐에 넣기
    queue.some((job) => {
      console.log('priority', job, job.priority);
      job.priority > current.priority;
    });
    if (queue.some((job) => job.priority > current.priority)) {
      queue.push(current);
    } else {
      executionOrder++; // 실행 순서 증가
      if (current.index === location) {
        return executionOrder; // 찾던 프로세스 실행 완료!
      }
    }
  }
}

console.log(solution([2, 1, 3, 2], 2)); //1
// console.log(solution([1, 1, 9, 1, 1, 1], 0)); //5

//다른 사람 풀이
function solution(priorities, location) {
  var arr = priorities.map((priority, index) => {
    return {
      index: index,
      priority: priority,
    };
  });

  var queue = [];

  while (arr.length > 0) {
    var firstEle = arr.shift();
    var hasHighPriority = arr.some((ele) => ele.priority > firstEle.priority);
    if (hasHighPriority) {
      arr.push(firstEle);
    } else {
      queue.push(firstEle);
    }
  }

  return queue.findIndex((queueEle) => queueEle.index === location) + 1;
}
