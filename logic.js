"use strict";

// first Function
function getRandomNumber(min, max) {
  // Check if min and max are numbers and not equal NaN because it is still a numeric data type!!
  if (
    typeof min === "number" &&
    !isNaN(min) &&
    typeof max === "number" &&
    !isNaN(max)
  ) {
    // check if min is less than max
    if (min < max) {
      return Math.floor(Math.random() * (max - min) + min);
    } else throw Error("Min should be less than Max!");
  } else throw Error("min and max must be numbers!");
}
// End of first Function

// Second Function
function putTogether(a) {
  return function (b) {
    if (a && typeof a === "string" && b && typeof b === "string") {
      return a + b;
    } else throw Error("a and b must be provided and of type string");
  };
}
// End of second Function

// Third Function
function transformObjectToArray(obj) {
  // get all the keys of the object using Object.keys method
  const keys = Object.keys(obj);
  // sort the keys based on the name of each key
  return keys.sort();
}
// End of third Function

// Fourth Function
function ultimateSort(arrayOfObjects) {
  let newArr = [...arrayOfObjects]; //create a clone of the array of objects
  const notValidElements = newArr.filter(
    //get all the invalid elements
    (obj) =>
      obj.updatedAt === undefined || typeof obj.updatedAt.getTime !== "function"
  );
  const validElements = newArr.filter(
    //get all the valid elements
    (obj) =>
      obj.updatedAt !== undefined && typeof obj.updatedAt.getTime === "function"
  );
  newArr = [...validElements, ...notValidElements]; //put the valid elements first, then the invalid elements at the end.
  newArr.sort(function (a, b) {
    //sort the elements by the date of updatedAt(the newest one is the first)
    return !a.updatedAt || !b.updatedAt
      ? 0
      : b.updatedAt.getTime() - a.updatedAt.getTime();
  });
  return newArr;
}
// End of fourth Function

module.exports = {
  getRandomNumber,
  putTogether,
  transformObjectToArray,
  ultimateSort,
};
