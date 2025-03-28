//https://school.programmers.co.kr/learn/courses/30/lessons/42577

function solution(phone_book) {
  phone_book.sort();

  for (let i = 0; i < phone_book.length - 1; i++) {
    if (phone_book[i + 1].startsWith(phone_book[i])) {
      return false;
    }
  }

  return true;
}

console.log(solution(['119', '97674223', '1195524421'])); //false
// console.log(solution(['123', '456', '789'])); //true
//console.log(solution(['12', '123', '1235', '567', '88'])); //false

//다른 사람 풀이
function solution(phoneBook) {
  return !phoneBook.sort().some((t, i) => {
    if (i === phoneBook.length - 1) return false;

    return phoneBook[i + 1].startsWith(phoneBook[i]);
  });
}
