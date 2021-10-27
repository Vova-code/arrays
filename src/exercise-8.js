// Return a flatten array using forEach() method.
// e.g. fn([[1, 2], [3, 4, [5]]) === [1, 2, 3, 4, [5]]

// Throws if no argument given.

module.exports = (array) => {
  let expectedArray = [];
  if (!array) {
    throw new Error("Invalid argument");
  }

  array.forEach((element) => {
    element.forEach((element) => expectedArray.push(element));
  });

  return expectedArray;
};
