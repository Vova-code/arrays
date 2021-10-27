// Same as 8 but use .flat() and flatten 2 levels instead of 1
// e.g. fn([[1, 2], [3, 4, [5], [[6]]]) === [1, 2, 3, 4, 5, [6]]

module.exports = (array) => {
  let expectedArray = [];

  if (!array) {
    throw new Error("Invalid argument");
  }

  array.forEach((element) => {
    if (Array.isArray(element)) {
      expectedArray.push(element.flat());
    } else {
      expectedArray.push(element);
    }
  });

  return expectedArray.flat();
};
