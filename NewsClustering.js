//https://school.programmers.co.kr/learn/courses/30/lessons/17677
function solution(str1, str2) {
  function getBigrams(str) {
    const bigrams = [];
    str = str.toLowerCase(); // 대소문자 구분X
    for (let i = 0; i < str.length - 1; i++) {
      const pair = str[i] + str[i + 1];
      if (/^[a-z]{2}$/.test(pair)) bigrams.push(pair); // 영문자 쌍만 추가
    }
    return bigrams;
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
