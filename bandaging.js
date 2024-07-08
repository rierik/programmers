// 문제
//https://school.programmers.co.kr/learn/courses/30/lessons/250137?language=javascript

function solution(bandage, health, attacks) {
  var answer = health;
  let haveAttacktCount = 0;
  let bonusCheckCount = 0;

  for (let i = 0; i <= attacks[attacks.length - 1][0]; i++) {
    if (haveAttacktCount < attacks.length && i == attacks[haveAttacktCount][0]) {
      answer -= attacks[haveAttacktCount][1];
      haveAttacktCount++;
      bonusCheckCount = 0;
      if (answer <= 0) {
        return -1;
      }
    } else {
      if (answer < health) {
        answer = Math.min(answer + bandage[1], health);
      }
      bonusCheckCount++;
      if (bonusCheckCount == bandage[0]) {
        answer = Math.min(answer + bandage[2], health);
        console.log('추가점수', answer);
        bonusCheckCount = 0;
      }
    }
  }

  return answer;
}

solution([5, 1, 5], 30, [
  [2, 10],
  [9, 15],
  [10, 5],
  [11, 5],
]);

function solution(bandage, health, attacks) {
  let currHealth = health;
  let currTime = 0;

  for (let [attackTime, damage] of attacks) {
    let diffTime = attackTime - currTime - 1;
    currHealth += diffTime * bandage[1] + Math.floor(diffTime / bandage[0]) * bandage[2];

    if (currHealth > health) currHealth = health;
    currHealth -= damage;
    if (currHealth <= 0) return -1;
    currTime = attackTime;
  }

  return currHealth;
}
