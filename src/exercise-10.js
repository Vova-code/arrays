// Use map() and flat() to extract all movies' id in a flat array.

module.exports = (array) => {
  if (!array) {
    throw new Error("Invalid argument");
  }

  let expectedArray = [];

  array.map(({ videos }) => expectedArray.push(videos));

  return expectedArray.flat().map(({ id }) => id);
};
