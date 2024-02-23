let nums = [1, 2, 3, 4, 5];

// let newNums = [];
// nums.forEach(num => newNums.push(num*2));
// console.log(newNums);

/* map() */
// 각 배열 요소에 똑같은 함수를 실행한 후에, 그 결과를 '새로운 배열로 반환'하는 메서드이다.
let newNums = nums.map(num => num*2);
console.log(newNums);

// [1, 2, 3, 4, 5] -> [3, 7, 11, 15, 19];
let newNums2 = nums.map((num, index) => num * 3 + index);
console.log(newNums2);