var duplicateZeros = function (arr) {
  let originalLength = arr.length;
  const addZero = (index) => {
    let prev = arr[index];
    arr[index] = 0;

    arr.push(null);
    for (let i = index + 1; i < arr.length; i++) {
      let next = arr[i];
      arr[i] = prev;
      prev = next;
    }
  };

  let amountZeroes = arr.reduce((zeroes, value) => {
    if (value === 0) {
      zeroes++;
    }
    return zeroes;
  }, 0);

  for (let i = 0; i < arr.length + amountZeroes; i++) {
    if (arr[i] === 0) {
      addZero(i);
      i++;
    }
  }

  while (arr.length > originalLength) {
    arr.pop();
  }

  return arr;
};

console.log(duplicateZeros([1, 5, 0, 1, 2, 6, 0, 72, 23, 6]));
