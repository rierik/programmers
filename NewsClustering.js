//https://school.programmers.co.kr/learn/courses/30/lessons/17677
function solution(str1, str2) {
  function explode(text) {
    const result = [];
    for (let i = 0; i < text.length - 1; i++) {
      const node = text.substr(i, 2);
      if (node.match(/[A-Za-z]{2}/)) {
        result.push(node.toLowerCase());
      }
    }
    return result;
  }

  function getIntersectionAndUnion(arr1, arr2) {
    const map1 = new Map();
    const map2 = new Map();

    arr1.forEach((el) => map1.set(el, (map1.get(el) || 0) + 1));
    arr2.forEach((el) => map2.set(el, (map2.get(el) || 0) + 1));

    let intersection = 0,
      union = 0;
    const allKeys = new Set([...map1.keys(), ...map2.keys()]);

    allKeys.forEach((key) => {
      const count1 = map1.get(key) || 0;
      const count2 = map2.get(key) || 0;
      intersection += Math.min(count1, count2);
      union += Math.max(count1, count2);
    });

    return [intersection, union];
  }

  const bigrams1 = getBigrams(str1);
  const bigrams2 = getBigrams(str2);
  const [inter, uni] = getIntersectionAndUnion(bigrams1, bigrams2);

  return uni === 0 ? 65536 : Math.floor((inter / uni) * 65536);
}

console.log(solution('FRANCE', 'french')); //16384
console.log(solution('handshake', 'shake hands')); //65536

//다른 사람 풀이
function solution(str1, str2) {
  function explode(text) {
    const result = [];
    for (let i = 0; i < text.length - 1; i++) {
      const node = text.substr(i, 2);
      if (node.match(/[A-Za-z]{2}/)) {
        result.push(node.toLowerCase());
      }
    }
    return result;
  }

  const arr1 = explode(str1);
  const arr2 = explode(str2);
  const set = new Set([...arr1, ...arr2]);
  let union = 0;
  let intersection = 0;

  set.forEach((item) => {
    const has1 = arr1.filter((x) => x === item).length;
    const has2 = arr2.filter((x) => x === item).length;
    union += Math.max(has1, has2);
    intersection += Math.min(has1, has2);
  });
  return union === 0 ? 65536 : Math.floor((intersection / union) * 65536);
}
