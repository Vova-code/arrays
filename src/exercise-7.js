// Return the id & title of all objects that have a rating higher than 4 from given array.

// Throws if no argument given.

module.exports = (array) => {
  if (!array) {
    throw new Error("Invalid argument");
  }

  return array
    .filter((element) => element.rating > 4)
    .map(({ id, title }) => ({ id, title }));
};
