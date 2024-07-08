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

// console.log(test);
