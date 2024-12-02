import { dataReadFromFile } from "./utils/helpers/dataReadFromFile.js";

const values = await dataReadFromFile("./utils/day-2-list.txt");

// Make each row an array of strings, and each of these strings, an array of numbers
const valuesInRows = values
  .split(/\n/)
  .map((row) => row.split(" ").map((item) => Number(item)));

const totalSafeRows = (arrayOfRows) => {
  let safeRows = 0;
  const minimumIncrease = 1;
  const maximumIncrease = 3;

  for (let i = 0; i < arrayOfRows.length; i++) {
    const row = arrayOfRows[i];
    let rowIsSafe = true;
    let direction = null;

    for (let j = 0; j < row.length - 1; j++) {
      //Calculation to know if the difference is between 1 and 3.
      const diff = row[j + 1] - row[j];

      if (
        Math.abs(diff) < minimumIncrease ||
        Math.abs(diff) > maximumIncrease
      ) {
        rowIsSafe = false;
        break;
      }

      //if the direction changes while iterating, the row turns unsafe
      const currentDirection = diff > 0 ? "increasing" : "decreasing";
      if (direction && currentDirection !== direction) {
        rowIsSafe = false;
        break;
      }

      direction = currentDirection;
    }

    if (rowIsSafe) safeRows++;
  }

  return safeRows;
};

console.log(totalSafeRows(valuesInRows));
