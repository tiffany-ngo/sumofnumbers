function sumFor(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

function sumWhile(array) {
  let sum = 0;
  let i = 0;
  while (i < array.length) {
    sum += array[i];
    i++;
  }
  return sum;
}

function sumRecursion(array) {
  if (array.length === 0) {
    return 0;
  }
  return array[0] + sumRecursion(array.slice(1, array.length));
}

function sumTheSimpleWay(array) {
  return _.reduce(array, function (memo, num) { return memo + num; }, 0);
}

const testArray = [1, 2, 3, 4];

console.log(sumFor(testArray));
console.log(sumWhile(testArray));
console.log(sumRecursion(testArray));
console.log(sumTheSimpleWay(testArray));
