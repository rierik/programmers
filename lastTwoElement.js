function solution(num_list) {
  var answer = [];
  const last_index = num_list.length - 1;

  if (num_list[last_index] > num_list[last_index - 1]) {
    answer.push(num_list[last_index] - num_list[last_index - 1]);
  } else {
    answer.push(num_list[last_index] * 2);
  }

  num_list.push(answer[0]);
  return num_list;
}
