"use strict";

const {
  getRandomNumber,
  putTogether,
  transformObjectToArray,
  ultimateSort,
} = require("./logic");

const getRandomNumberResult = getRandomNumber(10, 150);
console.log(getRandomNumberResult);

const putTogetherResult = putTogether("Data")("mars");
console.log(putTogetherResult);

const transformObjectToArrayResult = transformObjectToArray({
  id: "10",
  name: "Ten",
  type: "number",
  previous: 9,
  next: 11,
});
console.log(transformObjectToArrayResult);

const ultimateSortResult = ultimateSort([
  { id: "1", updatedAt: new Date("2021-01-01T00:00:00Z") },
  { id: "2" },
  { id: "3", updatedAt: new Date("2021-01-02T12:00:00Z") },
  { id: "4", updatedAt: new Date("2020-12-25T10:00:00Z") },
]);
console.log(ultimateSortResult);
