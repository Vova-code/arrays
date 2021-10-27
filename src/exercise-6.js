// Get movies with a rating of > 4 using .filter() method.
// e.g fn([
//   {
//     id: 70111470,
//     title: "Die Hard",
//     boxart: "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
//     uri: "http://api.netflix.com/catalog/titles/movies/70111470",
//     rating: 4.0,
//     bookmark: [],
//   },
//   {
//     id: 654356453,
//     title: "Bad Boys",
//     boxart: "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
//     uri: "http://api.netflix.com/catalog/titles/movies/70111470",
//     rating: 5.0,
//     bookmark: [{ id: 432534, time: 65876586 }],
//   },
// ]) ===
//   [
//     {
//       id: 654356453,
//       title: "Bad Boys",
//       boxart: "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
//       uri: "http://api.netflix.com/catalog/titles/movies/70111470",
//       rating: 5.0,
//       bookmark: [{ id: 432534, time: 65876586 }],
//     },
//   ];

module.exports = (array, filterFunction) => {
  if (!array) {
    throw new Error("Invalid argument");
  }

  return array.filter(filterFunction);
};
