//https://school.programmers.co.kr/learn/courses/30/lessons/49993
function solution(skill, skill_trees) {
  let answer = 0;

  skill_trees.forEach(tree => {
    const filtered = tree
      .split('')
      .filter(char => skill.includes(char)) // 선행 스킬에 포함된 문자만 추출
      .join('');

      console.log(filtered) //BCD CBD CB BD

    if (skill.startsWith(filtered)) {
      //CBD와 CB만 가능
      answer++;
    }
  });

  return answer;
}


//다른 사람 풀이
function solution(skill, skill_trees) {
  var answer = 0;
  var regex = new RegExp(`[^${skill}]`, 'g');

  console.log(regex) // /[^CBD]/g
  
  return skill_trees
  .map((x) => {
    console.log(x.replace(regex, '')) // BCD, CBD, CB, BD
    return x.replace(regex, '')})
  .filter((x) => {
    return skill.indexOf(x) === 0 || x === "";
  })
  .length
}

console.log(solution('CBD', ['BACDE', 'CBADF', 'AECB', 'BDA'])); // 2